/* Content access: keyless module packages and level configs from the private
   R2 bucket (binding CONTENT = klarweg-exam-content), verified against the
   sha256 recorded in D1 at import time. Packages are immutable per release,
   so an isolate-level cache keyed by (key, sha) is safe. */
import { fail, sha256Hex } from './http.js';

const pkgCache = new Map();
const lcCache = new Map();

export async function formModule(env, formId, module) {
  return env.DB.prepare('SELECT form_id, module, module_order, package_key, package_sha256 FROM form_modules WHERE form_id = ?1 AND module = ?2')
    .bind(formId, module).first();
}

export async function formModules(env, formId) {
  const r = await env.DB.prepare('SELECT module, module_order FROM form_modules WHERE form_id = ?1 ORDER BY module_order').bind(formId).all();
  return r.results;
}

export async function loadPackage(env, formId, module) {
  const fm = await formModule(env, formId, module);
  if (!fm) fail(404, 'module_not_in_form');
  const ck = `${fm.package_key}#${fm.package_sha256}`;
  if (pkgCache.has(ck)) return pkgCache.get(ck);
  const obj = await env.CONTENT.get(fm.package_key);
  if (!obj) fail(503, 'content_unavailable', 'Exam content package missing.');
  const buf = new Uint8Array(await obj.arrayBuffer());
  if ((await sha256Hex(buf)) !== fm.package_sha256) fail(503, 'content_integrity', 'Exam content package failed its integrity check.');
  const text = new TextDecoder().decode(buf);
  const pkg = { text, data: JSON.parse(text) };
  pkg.items = indexItems(pkg.data);
  pkgCache.set(ck, pkg);
  return pkg;
}

function indexItems(data) {
  const out = new Map();
  for (const part of data.parts) for (const task of part.tasks) for (const it of task.items) out.set(it.item_id, { ...it, part: part.part });
  return out;
}

export async function levelConfig(env, levelConfigId) {
  if (lcCache.has(levelConfigId)) return lcCache.get(levelConfigId);
  const r = await env.DB.prepare('SELECT json FROM level_configs WHERE id = ?1').bind(levelConfigId).first();
  if (!r) fail(503, 'level_config_missing');
  const cfg = JSON.parse(r.json);
  lcCache.set(levelConfigId, cfg);
  return cfg;
}

export async function formRow(env, formId) {
  return env.DB.prepare('SELECT id, level_config_id, kind, label, status, rev, release FROM forms WHERE id = ?1').bind(formId).first();
}

export const moduleConfig = (cfg, module) => cfg.modules.find((m) => m.module === module);

export function _clearCaches() { pkgCache.clear(); lcCache.clear(); }
