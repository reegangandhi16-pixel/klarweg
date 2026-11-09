"""Build one exam-room figure with Blender + MPFB (headless).

  blender -b --python scripts/exam-room-mpfb-build.py -- <person.json> <out.glb>

Needs: MPFB (Blender extension) with the MakeHuman CC0 system assets used below, the visemes02 + faceunits01
target packs, and the TalkingHead MPFB rig saved as the custom rig "talkinghead" (rigs/talkinghead.json +
weights.talkinghead.json in MPFB's user data). See docs/exam/SPRECHEN-ROOM-STAGE1.md, "Figures".

person.json: { "name", "phenotype": {...MPFB macros}, "skin", "eyes_material", "eyebrows", "eyelashes", "hair",
               "clothes": [...], "tint": { "<material substring>": [r, g, b] } (optional, multiplies the texture) }
Output: a GLB with the root object "Armature" (TalkingHead's default modelRoot), Meta/Oculus visemes and ARKit
face units as shape keys, PBR materials (alpha clip only for hair, brows and lashes), no animation. """
import json
import os
import sys

import bpy

ARGS = sys.argv[sys.argv.index('--') + 1:]
person = json.load(open(ARGS[0]))
OUT = os.path.abspath(ARGS[1])

PKG = 'bl_ext.blender_org.mpfb'
mod = lambda m: __import__(f'{PKG}.{m}', fromlist=['*'])
HumanService = mod('services.humanservice').HumanService
ExportService = mod('services.exportservice').ExportService
FaceService = mod('services.faceservice').FaceService
TargetService = mod('services.targetservice').TargetService
ObjectService = mod('services.objectservice').ObjectService
AssetService = mod('services.assetservice').AssetService

# empty scene, keep preferences (MPFB must stay enabled)
for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)
AssetService.invalidate_custom_rig_cache()

info = HumanService._create_default_human_info_dict()
info.update({
    'name': person['name'],
    'phenotype': {**info['phenotype'], **person['phenotype']},
    'rig': 'custom.talkinghead',
    'skin_mhmat': person['skin'], 'skin_material_type': 'GAMEENGINE',
    'eyes': 'high-poly/high-poly.mhclo', 'eyes_material_type': 'GAMEENGINE',
    'eyebrows': person['eyebrows'], 'eyelashes': person['eyelashes'],
    'teeth': 'teeth_base/teeth_base.mhclo', 'tongue': 'tongue01/tongue01.mhclo',
    'hair': person['hair'], 'clothes': person['clothes'], 'clothes_material_type': 'GAMEENGINE',
    'proxy': '',
})
settings = HumanService.get_default_deserialization_settings()
settings.update({'subdiv_levels': 0, 'material_instances': 'NEVER', 'override_skin_model': 'PRESET'})
basemesh = HumanService.deserialize_from_dict(info, settings)

# export copy: bake modelling targets, add visemes + face units (MPFB packs), propagate them to eyes/teeth/lashes
copy = ExportService.create_character_copy(basemesh, name_suffix='_export')
mesh = ObjectService.find_object_of_type_amongst_nearest_relatives(copy)
TargetService.bake_targets(mesh)
FaceService.load_targets(mesh, load_microsoft_visemes=False, load_meta_visemes=True, load_arkit_faceunits=True)
FaceService.interpolate_targets(mesh)
ExportService.bake_modifiers_remove_helpers(mesh, bake_masks=True, bake_subdiv=False, remove_helpers=True, also_proxy=True)

# keep only the export copy
keep = {copy} | set(copy.children_recursive)
for o in list(bpy.data.objects):
    if o not in keep: bpy.data.objects.remove(o, do_unlink=True)
copy.name = 'Armature'; copy.data.name = 'Armature'

# materials for glTF: opaque everywhere except hair/brows/lashes (alpha clip); optional texture tint
CUTOUT = ('hair', 'eyebrow', 'eyelash', person['hair'].split('/')[0])
for o in bpy.data.objects:
    if o.type != 'MESH': continue
    for slot in o.material_slots:
        m = slot.material
        if not m or not m.use_nodes: continue
        bsdf = next((n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED'), None)
        if not bsdf: continue
        alpha = bsdf.inputs['Alpha']
        cut = any(k in (m.name + o.name).lower() for k in CUTOUT)
        if alpha.is_linked:
            src = alpha.links[0].from_socket
            for l in list(alpha.links): m.node_tree.links.remove(l)
            if cut:
                gt = m.node_tree.nodes.new('ShaderNodeMath'); gt.operation = 'GREATER_THAN'; gt.inputs[1].default_value = 0.4
                m.node_tree.links.new(src, gt.inputs[0]); m.node_tree.links.new(gt.outputs[0], alpha)
        if not cut: alpha.default_value = 1.0
        for key, rgb in (person.get('tint') or {}).items():
            if key in m.name.lower():
                img = next((n.image for n in m.node_tree.nodes if n.type == 'TEX_IMAGE' and n.image and bsdf.inputs['Base Color'].is_linked and n.outputs[0] in [l.from_socket for l in bsdf.inputs['Base Color'].links]), None)
                if img:
                    px = list(img.pixels)
                    for i in range(0, len(px), 4):
                        px[i] *= rgb[0]; px[i + 1] *= rgb[1]; px[i + 2] *= rgb[2]
                    img.pixels = px; img.pack()

bpy.ops.object.select_all(action='DESELECT')
for o in keep: o.select_set(True)
bpy.context.view_layer.objects.active = copy
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

stats = {o.name: [len(o.data.vertices), len(o.data.shape_keys.key_blocks) if o.data.shape_keys else 0] for o in keep if o.type == 'MESH'}
print('MESHES', json.dumps(stats))
bpy.ops.export_scene.gltf(filepath=OUT, export_format='GLB', use_selection=True, export_animations=False,
                          export_morph=True, export_morph_normal=False, export_skins=True, export_yup=True,
                          export_image_format='AUTO')
print('EXPORTED', OUT)
