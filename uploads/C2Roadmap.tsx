"use client";

import { useEffect } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type Variant = "primary" | "secondary";
type Skill = "audio" | "speak" | "grammar" | "quiz" | "pdf";

interface CtaButton {
  label: string;
  href: string;
  variant: Variant;
  arrow: boolean;
}
interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}
interface Nav {
  logo: { text: string; href: string; dot: boolean; ariaLabel: string };
  links: NavLink[];
  cta: { label: string; href: string };
}
interface Headline {
  prefix: string;
  accent: string;
  suffix: string;
}
interface Pill {
  label: string;
  dotColor?: string;
}
interface Hero {
  badge: string;
  pills: Pill[];
  headline: Headline;
  lede: string;
  ctas: CtaButton[];
}
interface Stat {
  num: string;
  label: string;
}
interface PathBand {
  ariaLabel: string;
  eyebrow: string;
  title: string;
  note: string;
}
interface Station {
  num: string;
  title: string;
  meta: string;
}
interface RoadmapIntro {
  eyebrow: string;
  title: string;
  body: string;
}
interface Phase {
  eyebrow: string;
  title: string;
  range: [number, number];
}
interface Chapter {
  id: string;
  n: number;
  title: string;
  goal: string;
  duration: string;
  skills: Skill[];
  status: "free" | "locked";
  cta: string;
  route: string;
}
interface LoopStep {
  num: string;
  title: string;
  desc: string;
  icon: string;
}
interface LearnLoop {
  ariaLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  steps: LoopStep[];
}
interface PriceCard {
  tier: string;
  price: string;
  priceStrike: string | null;
  sub: string;
  center: boolean;
  features: string[];
  cta: CtaButton;
}
interface Pricing {
  eyebrow: string;
  title: string;
  intro: string;
  cards: PriceCard[];
}
interface FinalCta {
  title: string;
  body: string;
  ctas: CtaButton[];
}
interface Level {
  code: string;
  name: string;
  hero: Hero;
  heroStats: Stat[];
  pathBand: PathBand;
  pathStations: Station[];
  roadmapIntro: RoadmapIntro;
  phases: Phase[];
  chapters: Chapter[];
  learnLoop: LearnLoop;
  pricing: Pricing;
  finalCta: FinalCta;
}
interface RoadmapData {
  meta: { lang: string; title: string; description: string; canonical: string };
  nav: Nav;
  skillLabels: Record<Skill, string>;
  icons: Record<string, string>;
  levels: { c2: Level };
  footer: { meta: string; links: NavLink[] };
}

const data: RoadmapData = {
  meta: {
    lang: "en",
    title: "C2 · Großes Sprachdiplom — Klarweg",
    description:
      "The complete C2 German journey for Hindi-speaking learners — 29 chapters, color-coded grammar, Goethe-aligned. Begin Chapter 1 free.",
    canonical: "https://klarweg.com/c2",
  },
  nav: {
    logo: { text: "Klarweg", href: "/", dot: true, ariaLabel: "Klarweg home" },
    links: [
      { label: "A1", href: "/a1" },
      { label: "A2", href: "/a2" },
      { label: "B1", href: "/b1" },
      { label: "B2", href: "/b2" },
      { label: "C1", href: "/c1" },
      { label: "C2", href: "/c2", active: true },
      { label: "Method", href: "/method" },
      { label: "Pricing", href: "/pricing" },
    ],
    cta: { label: "Begin free", href: "/c2/chapter-1" },
  },
  skillLabels: {
    audio: "Audio practice",
    speak: "Speaking with AI tutor",
    grammar: "Color-coded grammar",
    quiz: "Mini quiz",
    pdf: "Homework PDF",
  },
  icons: {
    audio:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12C3 8 6 5 9 5V9C9 11 7 12 6 12C4 12 3 13 3 15V18C3 19 4 20 5 20H7V13M21 12C21 8 18 5 15 5V9C15 11 17 12 18 12C20 12 21 13 21 15V18C21 19 20 20 19 20H17V13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    speak:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" stroke-width="1.7"/><path d="M6 11C6 14 8.7 17 12 17C15.3 17 18 14 18 11M12 17V20M9 20H15" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    grammar:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="7" cy="9" r="2.5" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="9" r="2.5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="17" r="2.5" stroke="currentColor" stroke-width="1.6"/></svg>',
    quiz:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 9C9 7 10.5 5.5 12 5.5C13.5 5.5 15 7 15 9C15 11 12 11 12 14M12 18.5V18.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    pdf:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3H14L19 8V20C19 20.5 18.5 21 18 21H7C6.5 21 6 20.5 6 20V4C6 3.5 6.5 3 7 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 3V8H19" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    lock:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6" y="11" width="12" height="8" rx="1.8" stroke="currentColor" stroke-width="1.7"/><path d="M8.5 11V8C8.5 6 10 4 12 4C14 4 15.5 6 15.5 8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    arrow:
      '<svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    clock:
      '<svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="5.3" stroke="currentColor" stroke-width="1.3"/><path d="M7 4V7L9 8.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  },
  levels: {
    c2: {
      code: "C2",
      name: "Großes Sprachdiplom",
      hero: {
        badge: "C2 · Großes Sprachdiplom",
        pills: [
          { label: "Goethe-aligned", dotColor: "var(--g-object)" },
          { label: "29 chapters" },
        ],
        headline: {
          prefix: "From fluent German to ",
          accent: "stilistische Meisterschaft",
          suffix: " — precise, academic, and truly native.",
        },
        lede:
          "C2 is mastery — Goethe C2, academic German, stylistic precision, advanced writing, and near-native command of the language. The full stylistic range: nominal style, dense attribution, idiomatic phrasing, and the written control of a native academic writer. Twenty-nine chapters of color-coded grammar, premium audio, and AI-corrected practice — built for Hindi-speaking learners, aligned to the Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom.",
        ctas: [
          { label: "Begin Chapter 1 — Free", href: "/c2/chapter-1", variant: "primary", arrow: true },
          { label: "See the full path", href: "#roadmap", variant: "secondary", arrow: false },
        ],
      },
      heroStats: [
        { num: "29", label: 'Chapters from <span class="de-italic">Tempusgebrauch</span> to <span class="de-italic">Gro&szlig;es Sprachdiplom</span>' },
        { num: "~17h", label: "Of structured learning, at your own pace" },
        { num: "6", label: "Thematic phases that build on each other" },
        { num: "1", label: "Free chapter — the full premium experience" },
      ],
      pathBand: {
        ariaLabel: "Six phases of C2",
        eyebrow: "The C2 Path",
        title: "Six phases. One clear arc.",
        note: "Each phase builds on the last. By the end, you command the verb system, every mood and modality, complex clauses and the passive, dense attribution, advanced word-formation, and the nominal, idiomatic style of written German — ready for the Goethe-Zertifikat C2.",
      },
      pathStations: [
        { num: "01–05", title: "Das Verbalsystem auf C2-Niveau", meta: "Tempusgebrauch → Goethe Mini 1" },
        { num: "06–09", title: "Modus, Modalität & Indirektheit", meta: "Konjunktiv II → Goethe Mini 2" },
        { num: "10–14", title: "Komplexe Satzverknüpfung & Passiv", meta: "Adverbialsätze → Halbzeit-Test" },
        { num: "15–20", title: "Attribuierung & das Adjektiv", meta: "Partizipialattribute → Goethe Mini 3" },
        { num: "21–24", title: "Wortbildung & Wortschatzpräzision", meta: "Wortbildung → Goethe Mini 4" },
        { num: "25–29", title: "Stil, Nominalstil & Schriftsprache", meta: "Nominalstil → Goethe C2 Final" },
      ],
      roadmapIntro: {
        eyebrow: "The Roadmap",
        title: "The complete C2 journey.",
        body: "Chapter 1 is yours, no payment, no signup wall. The next 28 chapters unlock with the C2 bundle or Lifetime A1–C2.",
      },
      phases: [
        { eyebrow: "Phase 01", title: "Das Verbalsystem auf C2-Niveau", range: [1, 5] },
        { eyebrow: "Phase 02", title: "Modus, Modalität & Indirektheit", range: [6, 9] },
        { eyebrow: "Phase 03", title: "Komplexe Satzverknüpfung & Passiv", range: [10, 14] },
        { eyebrow: "Phase 04", title: "Attribuierung & das Adjektiv", range: [15, 20] },
        { eyebrow: "Phase 05", title: "Wortbildung & Wortschatzpräzision", range: [21, 24] },
        { eyebrow: "Phase 06", title: "Stil, Nominalstil & Schriftsprache", range: [25, 29] },
      ],
      chapters: [
        { id: "c2-1", n: 1, title: "Zeitformen der Verben", goal: "Control tense for style and effect — Präteritum for narration, Perfekt for speech — and switch cleanly inside one text.", duration: "30 min", skills: ["audio", "grammar", "quiz", "pdf"], status: "free", cta: "Begin chapter", route: "/c2/chapter-1" },
        { id: "c2-2", n: 2, title: "Verben mit Präfixen", goal: "Tell trennbar from untrennbar and hear the meaning shift — úmschreiben vs. umschréiben — with C2 confidence.", duration: "30 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-2" },
        { id: "c2-3", n: 3, title: "Verben und ihre Ergänzungen", goal: "Read a verb's valency — which complements and cases it demands — and never drop an obligatory Ergänzung.", duration: "30 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-3" },
        { id: "c2-4", n: 4, title: "Nomen-Verb-Verbindungen", goal: "Use the Funktionsverbgefüge of formal German — in Frage stellen, zur Verfügung stehen, in Betracht ziehen — naturally.", duration: "30 min", skills: ["audio", "grammar", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-4" },
        { id: "c2-5", n: 5, title: "Goethe Mini 1", goal: "A short Goethe-style checkpoint covering every topic in Phase 1.", duration: "40 min", skills: ["audio", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-5" },
        { id: "c2-6", n: 6, title: "Konjunktiv II", goal: "Build the unreal — wenn ich Zeit hätte, würde ich — for hypotheses, politeness, and careful distance.", duration: "35 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-6" },
        { id: "c2-7", n: 7, title: "Konjunktiv I", goal: "Report what others say — er sei, er habe, er komme — the reporting subjunctive of news and academic German.", duration: "35 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-7" },
        { id: "c2-8", n: 8, title: "Modalverben", goal: "Express degrees of certainty — er muss / dürfte / könnte recht haben — the subjective use of modal verbs.", duration: "30 min", skills: ["audio", "grammar", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-8" },
        { id: "c2-9", n: 9, title: "Goethe Mini 2", goal: "A Goethe-style checkpoint across Phase 2 — mood, modality, and reported speech.", duration: "40 min", skills: ["audio", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-9" },
        { id: "c2-10", n: 10, title: "Adverbialsätze & Diskursmarker", goal: "Link ideas with precision — kausal, konzessiv, modal, konsekutiv, adversativ — and the discourse markers C2 writing leans on.", duration: "35 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-10" },
        { id: "c2-11", n: 11, title: "Relativsätze", goal: "Stretch relative clauses — Genitiv dessen/deren, prepositional, and deeply nested — without losing a verb.", duration: "35 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-11" },
        { id: "c2-12", n: 12, title: "Passiv", goal: "Command the Vorgangspassiv in every tense — plus the impersonal passive — and know exactly when to use it.", duration: "30 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-12" },
        { id: "c2-13", n: 13, title: "Passiv-Ersatzformen", goal: "Swap the passive for its alternatives on purpose — sich lassen, sein + zu, -bar, man — for a lighter formal style.", duration: "30 min", skills: ["audio", "grammar", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-13" },
        { id: "c2-14", n: 14, title: "Goethe Halbzeit-Test", goal: "A mid-course Goethe-style mock across Phases 1–3 — Lesen, Hören, Schreiben, and Sprechen.", duration: "60 min", skills: ["audio", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-14" },
        { id: "c2-15", n: 15, title: "Partizipien als Adjektive", goal: "Pack a whole clause before a noun — der im Jahr 2020 verabschiedete Beschluss — the hallmark of written German.", duration: "35 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-15" },
        { id: "c2-16", n: 16, title: "Nominalisierte Adjektive und Partizipien", goal: "Nominalize participles and adjectives — der Reisende, das Wesentliche, ein Bekannter — and decline them right.", duration: "30 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-16" },
        { id: "c2-17", n: 17, title: "Adjektivdeklination auf C2-Niveau", goal: "Master the edge cases — endings after einige, mehrere, sämtliche, folgende, and across parallel adjective strings.", duration: "30 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-17" },
        { id: "c2-18", n: 18, title: "Stilistische Nuancen & Register von Adjektiven", goal: "Pick the precise word — groß, umfangreich, erheblich, beträchtlich, signifikant — and feel the register between them.", duration: "30 min", skills: ["audio", "grammar", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-18" },
        { id: "c2-19", n: 19, title: "Adjektive mit Ergänzungen", goal: "Combine adjectives with their fixed prepositions — stolz auf, fähig zu, abhängig von — and the case each demands.", duration: "30 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-19" },
        { id: "c2-20", n: 20, title: "Goethe Mini 3", goal: "A Goethe-style checkpoint across Phase 4 — attributes, declension, and adjective precision.", duration: "40 min", skills: ["audio", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-20" },
        { id: "c2-21", n: 21, title: "Wortbildung der Adjektive", goal: "Build adjectives from the inside — suffixes -bar, -los, -haft, -reich, and the prefixes that flip the meaning.", duration: "30 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-21" },
        { id: "c2-22", n: 22, title: "Wortbildung der Nomen", goal: "Turn verbs and adjectives into nouns — Nominalisierung, suffixes, and compounds — for the dense, formal C2 style.", duration: "30 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-22" },
        { id: "c2-23", n: 23, title: "Wortbildung der Verben", goal: "Read the prefix and predict the shift — be-, ent-, er-, ver-, zer- — and unlock academic verb vocabulary.", duration: "30 min", skills: ["audio", "grammar", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-23" },
        { id: "c2-24", n: 24, title: "Goethe Mini 4", goal: "A Goethe-style checkpoint across Phase 5 — word-formation and lexical precision.", duration: "40 min", skills: ["audio", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-24" },
        { id: "c2-25", n: 25, title: "Appositionen", goal: "Slot in extra information cleanly — Herr Müller, der Leiter der Abteilung, … — with the right case and commas.", duration: "30 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-25" },
        { id: "c2-26", n: 26, title: "Nominalstil", goal: "Convert between verbal and nominal style — nach der Prüfung der Unterlagen — the dense register of written German.", duration: "35 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-26" },
        { id: "c2-27", n: 27, title: "Kollokationen & Idiomatik", goal: "Reach for the elevated, figurative phrase — etwas in den Vordergrund rücken, außer Acht lassen — that separates C1 from C2.", duration: "30 min", skills: ["audio", "grammar", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-27" },
        { id: "c2-28", n: 28, title: "Präpositionen der Schriftsprache", goal: "Use the prepositions of formal writing — angesichts, hinsichtlich, kraft, mittels, zugunsten — and the case each takes.", duration: "30 min", skills: ["grammar", "quiz", "speak", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-28" },
        { id: "c2-29", n: 29, title: "Goethe C2 Final", goal: "Full Goethe-Zertifikat C2 mock — Lesen, Hören, Schreiben, Sprechen — under real conditions, with review.", duration: "90 min", skills: ["audio", "speak", "quiz", "pdf"], status: "locked", cta: "Unlock to begin", route: "/c2/chapter-29" },
      ],
      learnLoop: {
        ariaLabel: "How a C2 chapter works",
        eyebrow: "Inside every chapter",
        title: "One loop. Repeated until German feels obvious.",
        intro:
          'Klarweg&rsquo;s core method is the same in every chapter — <span class="de-italic">see the color, hear the sound, understand the role, produce the structure, get corrected, move on.</span>',
        steps: [
          { num: "01", title: "Listen", desc: "Premium native-quality audio. Slow and very slow speeds. Word-by-word when you need it.", icon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12C3 7 6 4 9 4V9C9 11 7 12 6 12C4 12 3 13 3 16V19C3 20 4 21 5 21H7V14M21 12C21 7 18 4 15 4V9C15 11 17 12 18 12C20 12 21 13 21 16V19C21 20 20 21 19 21H17V14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
          { num: "02", title: "Understand", desc: "Every sentence is color-coded by grammatical role. Structure becomes visible before you read a rule.", icon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
          { num: "03", title: "Tap words", desc: "Any German word opens a card — pronunciation, Hindi, English, role, and an example in context.", icon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 4V12L13 9L16 16L19 14L16 7L19 5L10 4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>' },
          { num: "04", title: "Practice", desc: "Interactive widgets — drag-drop word order, audio recognition, fill-the-blank. Three to seven rounds.", icon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M4 9H20M8 13H12M8 16H14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>' },
          { num: "05", title: "Speak", desc: "Say the sentence. The Klarweg AI tutor flags grammar, word choice, and pronunciation in seconds.", icon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M6 11V12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12V11M12 18V21M9 21H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>' },
          { num: "06", title: "Revise", desc: "Five-card recap. Structural, not flashcard memorization. The pattern, then the example.", icon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12C21 16.97 16.97 21 12 21C9.5 21 7.2 20 5.5 18.3M3 12C3 7 7 3 12 3C14.5 3 16.8 4 18.5 5.7M3 19V14H8M21 5V10H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
          { num: "07", title: "Unlock", desc: "Finish the mini quiz, download the homework PDF, move to the next chapter. No timers, no streaks.", icon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 11V8C8 6 9.5 4 12 4C14.5 4 16 6 16 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="15" r="1.4" fill="currentColor"/></svg>' },
        ],
      },
      pricing: {
        eyebrow: "Unlock C2",
        title: "One-time. No subscriptions.",
        intro: "Pay once for C2, or unlock the entire CEFR ladder with Lifetime. Chapter 1 stays free either way.",
        cards: [
          {
            tier: "C2 · Großes Sprachdiplom",
            price: "₹699",
            priceStrike: null,
            sub: "One-time. Lifetime access to C2.",
            center: false,
            features: [
              "All 29 C2 chapters unlocked",
              "Color-coded grammar across every sentence",
              "Premium audio: 1×, slow, very slow",
              "AI tutor for speaking & writing",
              "Homework PDFs and mini quizzes",
              "Klarweg C2 certificate on completion",
            ],
            cta: { label: "Unlock C2", href: "/c2/checkout", variant: "secondary", arrow: true },
          },
          {
            tier: "Lifetime · A1 → C2",
            price: "₹1,999",
            priceStrike: "₹30,994",
            sub: "One-time. The complete CEFR ladder, forever.",
            center: true,
            features: [
              "Every chapter of A1, A2, B1, B2, C1, C2",
              "Goethe Prüfungstraining from B1 onward",
              "Full AI tutor — speaking & writing, all levels",
              "Every future chapter included, automatically",
              "Klarweg certificate at every level",
              "Lifetime updates, no recurring fees",
            ],
            cta: { label: "Get Lifetime — ₹1,999", href: "/lifetime/checkout", variant: "primary", arrow: true },
          },
        ],
      },
      finalCta: {
        title: "The first chapter is <em>free</em>. The next twenty-eight are waiting.",
        body: "Pick up where C1 left off — with the full stylistic range, dense attribution, idiomatic precision, and the written control that makes your German read like a native academic.",
        ctas: [
          { label: "Begin Chapter 1 — Free", href: "/c2/chapter-1", variant: "primary", arrow: true },
          { label: "View pricing", href: "#pricing", variant: "secondary", arrow: false },
        ],
      },
    },
  },
  footer: {
    meta: "© Klarweg · German for Hindi-speaking learners",
    links: [
      { label: "Method", href: "/method" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Sign in", href: "/login" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Styles — sourced verbatim from a1.html (Klarweg OS Part 4-7)      */
/* ------------------------------------------------------------------ */
const STYLES = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
/* ============================================================
   KLARWEG TOKENS — sourced from Klarweg OS Part 4–7
   ============================================================ */
:root {
  /* Surfaces */
  --bg-canvas:        #FAFAF7;
  --bg-surface:       #FFFFFF;
  --bg-warm:          #FFF8EC;
  --bg-warm-soft:     #FFFCF4;

  /* Ink */
  --ink-primary:      #0E0E10;
  --ink-secondary:    #3A3A40;
  --ink-tertiary:     #7A7A80;
  --ink-quaternary:   #A5A5AC;

  /* Hairlines */
  --hairline-light:   rgba(14, 14, 16, 0.05);
  --hairline:         rgba(14, 14, 16, 0.09);
  --hairline-strong:  rgba(14, 14, 16, 0.18);

  /* Shadows — warm-tinted, low-alpha */
  --shadow-soft:      0 1px 2px rgba(64, 40, 10, 0.04), 0 4px 12px rgba(64, 40, 10, 0.05);
  --shadow-card:      0 1px 3px rgba(64, 40, 10, 0.05), 0 8px 24px rgba(64, 40, 10, 0.06);
  --shadow-glow:      0 1px 3px rgba(64, 40, 10, 0.05), 0 12px 36px rgba(234, 88, 12, 0.06), 0 0 0 1px rgba(24, 95, 165, 0.08);
  --shadow-modal:     0 2px 8px rgba(64, 40, 10, 0.08), 0 24px 64px rgba(64, 40, 10, 0.12);

  /* Radii */
  --r-xs:             6px;
  --r-sm:             10px;
  --r-md:             14px;
  --r-lg:             20px;
  --r-full:           999px;

  /* Grammar Spine 5 — locked hexes per Klarweg OS Part 5.1 */
  --g-subject:        #185FA5;
  --g-verb:           #DC2626;
  --g-object:         #2E7D32;
  --g-time:           #7C3AED;
  --g-place:          #EA580C;
  --g-akkusativ:      #10B981;
  --g-dativ:          #5C7A1D;

  /* Motion */
  --dur-fast:         150ms;
  --dur-base:         250ms;
  --dur-slow:         400ms;
  --dur-xl:           600ms;
  --ease:             cubic-bezier(0.22, 1, 0.36, 1);
  --ease-soft:        cubic-bezier(0.4, 0, 0.2, 1);

  /* Fonts */
  --font-display:     'Fraunces', Georgia, serif;
  --font-ui:          'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-german:      'Fraunces', Georgia, serif;
  --font-mono:        'JetBrains Mono', 'SF Mono', Menlo, monospace;
}

/* ============================================================
   RESET / BASE
   ============================================================ */
*, *::before, *::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: var(--font-ui);
  font-size: 17px;
  line-height: 1.55;
  letter-spacing: -0.005em;
  color: var(--ink-primary);
  background: var(--bg-canvas);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img, svg { display: block; max-width: 100%; }
button { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; }
a { color: inherit; text-decoration: none; }

/* ============================================================
   LAYOUT
   ============================================================ */
.container { max-width: 1280px; margin: 0 auto; padding: 0 32px; }
.container-narrow { max-width: 820px; margin: 0 auto; padding: 0 32px; }
section { padding: 88px 0; }
@media (max-width: 768px) {
  .container, .container-narrow { padding: 0 20px; }
  section { padding: 64px 0; }
}

/* ============================================================
   TYPOGRAPHY UTILITIES
   ============================================================ */
.eyebrow {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-tertiary);
  font-family: var(--font-ui);
}
.display-xl, .display-lg, .display-md, .display-sm {
  font-family: var(--font-display);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--ink-primary);
  margin: 0;
}
.display-xl { font-size: 88px; letter-spacing: -0.04em; }
.display-lg { font-size: 64px; }
.display-md { font-size: 48px; }
.display-sm { font-size: 32px; letter-spacing: -0.02em; }
.lede {
  font-size: 22px;
  line-height: 1.5;
  color: var(--ink-secondary);
  margin: 0;
  letter-spacing: -0.01em;
}
.de-italic {
  font-family: var(--font-german);
  font-style: italic;
  font-weight: 500;
}
@media (max-width: 768px) {
  .display-xl { font-size: 52px; }
  .display-lg { font-size: 40px; }
  .display-md { font-size: 32px; }
  .display-sm { font-size: 24px; }
  .lede { font-size: 18px; }
}

/* ============================================================
   NAV
   ============================================================ */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(250, 250, 247, 0.82);
  backdrop-filter: saturate(140%) blur(12px);
  -webkit-backdrop-filter: saturate(140%) blur(12px);
  border-bottom: 1px solid var(--hairline-light);
}
.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 14px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}
.nav-logo {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: var(--ink-primary);
}
.nav-logo .dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--g-place);
  margin: 0 2px 2px 0;
  vertical-align: middle;
}
.nav-links { display: flex; gap: 28px; align-items: center; }
.nav-links a {
  font-size: 14px;
  color: var(--ink-secondary);
  font-weight: 500;
  transition: color var(--dur-fast) var(--ease);
}
.nav-links a:hover { color: var(--ink-primary); }
.nav-links a.active { color: var(--ink-primary); }
.nav-cta {
  padding: 8px 16px;
  border-radius: var(--r-full);
  background: var(--ink-primary);
  color: var(--bg-surface);
  font-size: 13px;
  font-weight: 500;
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
}
.nav-cta:hover { transform: translateY(-1px); box-shadow: var(--shadow-soft); }
@media (max-width: 768px) {
  .nav-inner { padding: 12px 20px; }
  .nav-links { display: none; }
}

/* ============================================================
   BUTTONS
   ============================================================ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 22px;
  border-radius: var(--r-full);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.005em;
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-base) var(--ease), border-color var(--dur-fast) var(--ease);
  border: 1px solid transparent;
  min-height: 44px;
  cursor: pointer;
}
.btn-primary {
  background: var(--ink-primary);
  color: var(--bg-surface);
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 12px 28px rgba(234, 88, 12, 0.18);
}
.btn-primary:active { transform: translateY(0); }
.btn-secondary {
  background: var(--bg-surface);
  color: var(--ink-primary);
  border-color: var(--hairline);
}
.btn-secondary:hover {
  transform: translateY(-1px);
  border-color: var(--hairline-strong);
  box-shadow: var(--shadow-soft);
}
.btn-arrow {
  transition: transform var(--dur-base) var(--ease);
}
.btn:hover .btn-arrow { transform: translateX(3px); }

/* ============================================================
   PILLS
   ============================================================ */
.pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 11px;
  border-radius: var(--r-full);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.005em;
  border: 1px solid var(--hairline);
  background: var(--bg-surface);
  color: var(--ink-secondary);
}
.pill-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--ink-tertiary);
}
.pill-free {
  background: rgba(46, 125, 50, 0.08);
  border-color: rgba(46, 125, 50, 0.2);
  color: var(--g-object);
}
.pill-free .pill-dot { background: var(--g-object); }
.pill-locked {
  background: var(--bg-warm-soft);
  border-color: var(--hairline);
  color: var(--ink-tertiary);
}

/* ============================================================
   HERO
   ============================================================ */
.hero {
  position: relative;
  padding: 96px 0 64px;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  inset: -10% -10% auto -10%;
  height: 600px;
  background:
    radial-gradient(ellipse 50% 60% at 30% 0%, rgba(234, 88, 12, 0.06), transparent 65%),
    radial-gradient(ellipse 40% 60% at 80% 10%, rgba(24, 95, 165, 0.045), transparent 60%),
    radial-gradient(ellipse 70% 80% at 50% 0%, rgba(255, 248, 236, 1), transparent 70%);
  pointer-events: none;
  z-index: 0;
}
.hero-inner { position: relative; z-index: 1; }
.hero-eyebrow-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}
.level-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: var(--r-full);
  background: var(--bg-surface);
  border: 1px solid var(--hairline);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.005em;
  color: var(--ink-primary);
}
.level-badge::before {
  content: '';
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--g-subject);
}
.hero h1 {
  font-family: var(--font-display);
  font-size: 76px;
  font-weight: 500;
  line-height: 1.02;
  letter-spacing: -0.035em;
  margin: 0 0 24px;
  max-width: 880px;
}
.hero h1 .accent {
  font-style: italic;
  color: var(--ink-primary);
  background: linear-gradient(115deg, var(--g-subject) 0%, var(--g-place) 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-right: 0.04em;
}
.hero-lede {
  font-size: 22px;
  line-height: 1.55;
  color: var(--ink-secondary);
  max-width: 680px;
  margin: 0 0 40px;
  letter-spacing: -0.01em;
}
.hero-ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 56px;
}
.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 32px 0 0;
  border-top: 1px solid var(--hairline-light);
  max-width: 880px;
}
.stat-num {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1;
  color: var(--ink-primary);
  margin-bottom: 6px;
}
.stat-label {
  font-size: 13px;
  color: var(--ink-tertiary);
  letter-spacing: -0.005em;
  line-height: 1.4;
}
@media (max-width: 768px) {
  .hero { padding: 56px 0 40px; }
  .hero h1 { font-size: 44px; }
  .hero-lede { font-size: 17px; }
  .hero-stats { grid-template-columns: repeat(2, 1fr); gap: 20px; padding-top: 24px; }
  .stat-num { font-size: 24px; }
  .hero-ctas { gap: 10px; }
}

/* ============================================================
   PATH OVERVIEW BAND
   ============================================================ */
.path-band {
  padding: 56px 0;
  border-top: 1px solid var(--hairline-light);
  border-bottom: 1px solid var(--hairline-light);
  background: linear-gradient(180deg, var(--bg-warm-soft) 0%, var(--bg-canvas) 100%);
}
.path-band-head {
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
}
.path-band-head h2 {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 6px 0 0;
}
.path-band-note {
  font-size: 14px;
  color: var(--ink-tertiary);
  max-width: 360px;
  line-height: 1.5;
}
.path-stations {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
  position: relative;
}
.path-stations::before {
  content: '';
  position: absolute;
  top: 11px;
  left: 8%;
  right: 8%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--hairline-strong) 15%, var(--hairline-strong) 85%, transparent);
}
.station {
  position: relative;
  text-align: left;
  padding: 0 8px;
}
.station-dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--bg-canvas);
  border: 1px solid var(--hairline-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  position: relative;
  z-index: 1;
}
.station-dot::after {
  content: '';
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--ink-quaternary);
}
.station:nth-child(1) .station-dot::after { background: var(--g-subject); }
.station:nth-child(2) .station-dot::after { background: var(--g-verb); }
.station:nth-child(3) .station-dot::after { background: var(--g-akkusativ); }
.station:nth-child(4) .station-dot::after { background: var(--g-time); }
.station:nth-child(5) .station-dot::after { background: var(--g-dativ); }
.station:nth-child(6) .station-dot::after { background: var(--g-place); }

.station-num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-tertiary);
  letter-spacing: 0;
  margin-bottom: 4px;
}
.station-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-primary);
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin-bottom: 4px;
}
.station-meta {
  font-size: 12px;
  color: var(--ink-tertiary);
}
@media (max-width: 900px) {
  .path-stations { grid-template-columns: repeat(3, 1fr); row-gap: 32px; }
  .path-stations::before { display: none; }
}
@media (max-width: 480px) {
  .path-stations { grid-template-columns: repeat(2, 1fr); }
}

/* ============================================================
   ROADMAP — phase + chapter cards
   ============================================================ */
.roadmap {
  padding: 80px 0 96px;
}
.roadmap-intro {
  margin-bottom: 56px;
  max-width: 720px;
}
.roadmap-intro h2 {
  font-family: var(--font-display);
  font-size: 44px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin: 12px 0 16px;
}
.roadmap-intro p {
  font-size: 18px;
  line-height: 1.5;
  color: var(--ink-secondary);
  margin: 0;
}

.phase {
  margin-bottom: 64px;
}
.phase:last-child { margin-bottom: 0; }
.phase-head {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding-bottom: 20px;
  margin-bottom: 28px;
  border-bottom: 1px solid var(--hairline-light);
  flex-wrap: wrap;
}
.phase-num {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink-tertiary);
  letter-spacing: 0;
}
.phase-title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.015em;
  margin: 0;
  flex: 1;
  min-width: 200px;
}
.phase-range {
  font-size: 13px;
  color: var(--ink-tertiary);
}

.chapter-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
@media (max-width: 900px) {
  .chapter-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .chapter-grid { grid-template-columns: 1fr; gap: 12px; }
}

/* ===== chapter-card ===== */
.chapter-card {
  position: relative;
  background: var(--bg-surface);
  border: 1px solid var(--hairline);
  border-radius: var(--r-md);
  padding: 22px 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 184px;
  transition:
    transform var(--dur-base) var(--ease),
    border-color var(--dur-fast) var(--ease),
    box-shadow var(--dur-base) var(--ease);
  cursor: pointer;
  overflow: hidden;
  text-align: left;
  width: 100%;
}
.chapter-card:hover {
  transform: translateY(-1px);
  border-color: var(--hairline-strong);
  box-shadow: var(--shadow-soft);
}
.chapter-card:focus-visible {
  outline: 2px solid var(--g-subject);
  outline-offset: 3px;
}

.cc-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.cc-num {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-tertiary);
  letter-spacing: 0;
}
.cc-title {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.015em;
  color: var(--ink-primary);
  margin: 0;
}
.cc-goal {
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink-secondary);
  margin: 0;
  letter-spacing: -0.005em;
  flex: 1;
}
.cc-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  padding-top: 12px;
  border-top: 1px solid var(--hairline-light);
  gap: 10px;
  flex-wrap: wrap;
}
.cc-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: var(--ink-tertiary);
  flex-wrap: wrap;
}
.cc-duration { display: inline-flex; align-items: center; gap: 5px; }
.cc-skills {
  display: flex;
  align-items: center;
  gap: 6px;
}
.cc-skill {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--bg-warm-soft);
  border: 1px solid var(--hairline-light);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-tertiary);
  transition: all var(--dur-fast) var(--ease);
}
.cc-skill svg { width: 11px; height: 11px; }
.cc-cta {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-primary);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap var(--dur-base) var(--ease);
}
.chapter-card:hover .cc-cta { gap: 7px; }

/* ===== FREE (Chapter 1) — same template as locked, quietly differentiated.
   No padding, font-size, or min-height divergence. The only differences are
   the left accent stripe, a slightly warmer hover shadow, and a bolder CTA. */
.chapter-card.free::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--g-subject), var(--g-place));
  border-radius: 3px 0 0 3px;
  pointer-events: none;
}
.chapter-card.free:hover {
  box-shadow:
    0 1px 3px rgba(64, 40, 10, 0.05),
    0 10px 28px rgba(234, 88, 12, 0.07),
    0 0 0 1px rgba(24, 95, 165, 0.10);
}
.chapter-card.free .cc-cta {
  color: var(--ink-primary);
  font-weight: 600;
}

/* ===== LOCKED cards ===== */
.chapter-card.locked {
  background: var(--bg-surface);
}
.chapter-card.locked .cc-title {
  color: var(--ink-primary);
}
.chapter-card.locked .cc-goal {
  color: var(--ink-tertiary);
  opacity: 0.78;
  filter: blur(0.3px);
}
.chapter-card.locked .cc-num { color: var(--ink-quaternary); }
.chapter-card.locked .cc-skill {
  opacity: 0.5;
}
.chapter-card.locked .cc-cta {
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-tertiary);
  gap: 5px;
  transition: color var(--dur-fast) var(--ease);
}
.chapter-card.locked:hover .cc-cta {
  color: var(--ink-primary);
}
.cc-lock {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--bg-warm-soft);
  border: 1px solid var(--hairline);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-tertiary);
  flex-shrink: 0;
}
.cc-lock svg { width: 12px; height: 12px; }
@media (prefers-reduced-motion: reduce) {
  .chapter-card { transition: none; }
  .chapter-card.locked .cc-goal { filter: none; }
}
@media (max-width: 768px) {
  .chapter-card.locked .cc-goal { filter: none; opacity: 0.7; }
}

/* ============================================================
   LEARN LOOP — How A1 works
   ============================================================ */
.learn-loop {
  background: linear-gradient(180deg, var(--bg-canvas) 0%, var(--bg-warm-soft) 100%);
  border-top: 1px solid var(--hairline-light);
  border-bottom: 1px solid var(--hairline-light);
  padding: 96px 0;
}
.loop-head {
  margin-bottom: 56px;
  max-width: 720px;
}
.loop-head h2 {
  font-family: var(--font-display);
  font-size: 44px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin: 12px 0 16px;
}
.loop-head p {
  font-size: 18px;
  color: var(--ink-secondary);
  margin: 0;
  line-height: 1.5;
}
.loop-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 14px;
  position: relative;
}
.loop-step {
  background: var(--bg-surface);
  border: 1px solid var(--hairline);
  border-radius: var(--r-md);
  padding: 20px 16px 18px;
  transition: transform var(--dur-base) var(--ease), border-color var(--dur-fast) var(--ease), box-shadow var(--dur-base) var(--ease);
}
.loop-step:hover {
  transform: translateY(-1px);
  border-color: var(--hairline-strong);
  box-shadow: var(--shadow-soft);
}
.loop-step-num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-quaternary);
  margin-bottom: 12px;
}
.loop-step-icon {
  width: 32px; height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--r-sm);
  background: var(--bg-warm-soft);
  margin-bottom: 14px;
  color: var(--ink-secondary);
}
.loop-step-icon svg { width: 16px; height: 16px; }
.loop-step:nth-child(1) .loop-step-icon { color: var(--g-subject); background: rgba(24, 95, 165, 0.08); }
.loop-step:nth-child(2) .loop-step-icon { color: var(--g-verb); background: rgba(220, 38, 38, 0.07); }
.loop-step:nth-child(3) .loop-step-icon { color: var(--g-object); background: rgba(46, 125, 50, 0.08); }
.loop-step:nth-child(4) .loop-step-icon { color: var(--g-time); background: rgba(124, 58, 237, 0.07); }
.loop-step:nth-child(5) .loop-step-icon { color: var(--g-place); background: rgba(234, 88, 12, 0.08); }
.loop-step:nth-child(6) .loop-step-icon { color: var(--g-akkusativ); background: rgba(16, 185, 129, 0.08); }
.loop-step:nth-child(7) .loop-step-icon { color: var(--g-dativ); background: rgba(92, 122, 29, 0.10); }

.loop-step-title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0 0 4px;
  color: var(--ink-primary);
}
.loop-step-desc {
  font-size: 12px;
  line-height: 1.45;
  color: var(--ink-tertiary);
  margin: 0;
}
@media (max-width: 1100px) {
  .loop-grid { grid-template-columns: repeat(4, 1fr); }
}
@media (max-width: 700px) {
  .loop-grid { grid-template-columns: repeat(2, 1fr); }
  .learn-loop { padding: 64px 0; }
  .loop-head h2 { font-size: 32px; }
}

/* ============================================================
   PRICING
   ============================================================ */
.pricing-sec {
  padding: 96px 0;
}
.pricing-head {
  text-align: center;
  margin-bottom: 56px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
.pricing-head h2 {
  font-family: var(--font-display);
  font-size: 44px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin: 12px 0 16px;
}
.pricing-head p {
  font-size: 18px;
  color: var(--ink-secondary);
  margin: 0;
  line-height: 1.5;
}
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 880px;
  margin: 0 auto;
}
.price-card {
  background: var(--bg-surface);
  border: 1px solid var(--hairline);
  border-radius: var(--r-lg);
  padding: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform var(--dur-base) var(--ease), box-shadow var(--dur-base) var(--ease);
}
.price-card.center {
  background: linear-gradient(160deg, var(--bg-surface) 0%, var(--bg-warm) 100%);
  box-shadow: var(--shadow-card);
  border-color: var(--hairline-strong);
}
.price-card.center::before {
  content: 'Recommended';
  position: absolute;
  top: -1px; right: 24px;
  transform: translateY(-50%);
  padding: 5px 12px;
  background: var(--ink-primary);
  color: var(--bg-surface);
  border-radius: var(--r-full);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.price-tier {
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink-tertiary);
  font-weight: 500;
  margin-bottom: 16px;
}
.price-big {
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--ink-primary);
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
  white-space: nowrap;
}
.price-strike {
  font-family: var(--font-ui);
  font-size: 18px;
  font-weight: 400;
  color: var(--ink-tertiary);
  text-decoration: line-through;
  letter-spacing: -0.005em;
}
.price-sub {
  font-size: 14px;
  color: var(--ink-tertiary);
  margin: 8px 0 24px;
}
.price-list {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}
.price-list li {
  font-size: 14px;
  color: var(--ink-secondary);
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.45;
}
.price-list li::before {
  content: '';
  width: 14px; height: 14px;
  border-radius: 50%;
  background: var(--bg-warm-soft);
  border: 1px solid var(--hairline);
  display: inline-block;
  flex-shrink: 0;
  margin-top: 3px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><path d='M3 6.5L5 8.5L9 4' stroke='%237A7A80' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
}
.price-card.center .price-list li::before {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><path d='M3 6.5L5 8.5L9 4' stroke='%232E7D32' stroke-width='1.7' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  border-color: rgba(46, 125, 50, 0.2);
  background-color: rgba(46, 125, 50, 0.06);
}
@media (max-width: 760px) {
  .pricing-grid { grid-template-columns: 1fr; }
  .price-big { font-size: 44px; }
  .pricing-head h2 { font-size: 32px; }
  .pricing-sec { padding: 64px 0; }
}

/* ============================================================
   FINAL CTA
   ============================================================ */
.final-cta {
  padding: 96px 0;
  border-top: 1px solid var(--hairline-light);
  text-align: center;
  position: relative;
  background: linear-gradient(180deg, var(--bg-canvas) 0%, var(--bg-warm-soft) 100%);
}
.final-cta h2 {
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.05;
  margin: 0 0 20px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.final-cta h2 em {
  font-style: italic;
  background: linear-gradient(115deg, var(--g-subject) 0%, var(--g-place) 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.final-cta p {
  font-size: 18px;
  color: var(--ink-secondary);
  margin: 0 auto 36px;
  max-width: 560px;
  line-height: 1.55;
}
.final-cta-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .final-cta { padding: 64px 0; }
  .final-cta h2 { font-size: 36px; }
  .final-cta p { font-size: 16px; }
}

/* ============================================================
   FOOTER
   ============================================================ */
footer {
  padding: 48px 0;
  border-top: 1px solid var(--hairline-light);
  background: var(--bg-canvas);
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-meta { font-size: 13px; color: var(--ink-tertiary); }
.footer-links { display: flex; gap: 24px; }
.footer-links a {
  font-size: 13px;
  color: var(--ink-tertiary);
  transition: color var(--dur-fast) var(--ease);
}
.footer-links a:hover { color: var(--ink-primary); }

/* ============================================================
   SCROLL-IN ANIMATION
   ============================================================ */
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 600ms var(--ease), transform 600ms var(--ease);
}
.reveal.in {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
`;

/* ------------------------------------------------------------------ */
/*  Small shared bits                                                  */
/* ------------------------------------------------------------------ */
function BtnArrow() {
  return (
    <svg
      className="btn-arrow"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 7H11M11 7L7 3M11 7L7 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CtaLink({
  cta,
  style,
}: {
  cta: CtaButton;
  style?: React.CSSProperties;
}) {
  const cls = "btn " + (cta.variant === "primary" ? "btn-primary" : "btn-secondary");
  return (
    <a href={cta.href} className={cls} style={style}>
      {cta.label}
      {cta.arrow ? <BtnArrow /> : null}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Chapter card — one template, two modifiers (free / locked)        */
/* ------------------------------------------------------------------ */
function ChapterCard({
  chapter,
  code,
  icons,
  skillLabels,
  onLockedClick,
}: {
  chapter: Chapter;
  code: string;
  icons: Record<string, string>;
  skillLabels: Record<string, string>;
  onLockedClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const isLocked = chapter.status === "locked";
  const numPadded = String(chapter.n).padStart(2, "0");
  const modifier = isLocked ? "locked" : "free";
  const ariaLabel = isLocked
    ? "Chapter " + chapter.n + ": " + chapter.title + ". Locked. Unlock with C2 bundle or Lifetime."
    : "Chapter " + chapter.n + ": " + chapter.title + ". Free.";

  const lockAttrs = isLocked
    ? { "data-action": "scroll-pricing", onClick: onLockedClick }
    : {};

  return (
    <a
      className={"chapter-card " + modifier}
      href={chapter.route}
      aria-label={ariaLabel}
      {...lockAttrs}
    >
      <div className="cc-top">
        <span className="cc-num">{code + " \u00B7 " + numPadded}</span>
        {isLocked ? (
          <span
            className="cc-lock"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: icons.lock }}
          />
        ) : (
          <span className="pill pill-free">
            <span className="pill-dot" /> Free chapter
          </span>
        )}
      </div>
      <h3 className="cc-title">{chapter.title}</h3>
      <p className="cc-goal">{chapter.goal}</p>
      <div className="cc-foot">
        <div className="cc-meta">
          <span
            className="cc-duration"
            dangerouslySetInnerHTML={{ __html: icons.clock + " " + chapter.duration }}
          />
          <span className="cc-skills">
            {chapter.skills.slice(0, 5).map((s, i) => (
              <span
                key={i}
                className="cc-skill"
                title={skillLabels[s] || s}
                aria-label={skillLabels[s] || s}
                dangerouslySetInnerHTML={{ __html: icons[s] || "" }}
              />
            ))}
          </span>
        </div>
        <span
          className="cc-cta"
          dangerouslySetInnerHTML={{ __html: chapter.cta + " " + icons.arrow }}
        />
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function C2Roadmap() {
  const level = data.levels.c2;
  const { nav, footer, icons, skillLabels } = data;
  const { hero, heroStats, pathBand, pathStations, roadmapIntro, phases, chapters, learnLoop, pricing, finalCta } = level;

  /* Scroll-in reveal — IntersectionObserver, no parallax, no bounce */
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -60px 0px", threshold: 0.05 }
      );
      reveals.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }
    reveals.forEach((el) => el.classList.add("in"));
  }, []);

  /* Locked-card click -> smooth-scroll to pricing */
  const handleLockedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById("pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* ========== NAV ========== */}
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a href={nav.logo.href} className="nav-logo" aria-label={nav.logo.ariaLabel}>
            {nav.logo.dot ? <span className="dot" aria-hidden="true" /> : null}
            {nav.logo.text}
          </a>
          <div className="nav-links">
            {nav.links.map((l, i) => (
              <a key={i} href={l.href} className={l.active ? "active" : undefined}>
                {l.label}
              </a>
            ))}
          </div>
          <a href={nav.cta.href} className="nav-cta">
            {nav.cta.label}
          </a>
        </div>
      </nav>

      <main>
        {/* ========== HERO ========== */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-eyebrow-row">
              <span className="level-badge">{hero.badge}</span>
              {hero.pills.map((p, i) =>
                p.dotColor ? (
                  <span className="pill" key={i}>
                    <span className="pill-dot" style={{ background: p.dotColor }} /> {p.label}
                  </span>
                ) : (
                  <span className="pill" key={i}>
                    {p.label}
                  </span>
                )
              )}
            </div>
            <h1>
              {hero.headline.prefix}
              <span className="accent">{hero.headline.accent}</span>
              {hero.headline.suffix}
            </h1>
            <p className="hero-lede">{hero.lede}</p>
            <div className="hero-ctas">
              {hero.ctas.map((c, i) => (
                <CtaLink key={i} cta={c} />
              ))}
            </div>
            <div className="hero-stats">
              {heroStats.map((st, i) => (
                <div key={i}>
                  <div className="stat-num">{st.num}</div>
                  <div
                    className="stat-label"
                    dangerouslySetInnerHTML={{ __html: st.label }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PATH OVERVIEW BAND ========== */}
        <section className="path-band" aria-label={pathBand.ariaLabel}>
          <div className="container">
            <div className="path-band-head">
              <div>
                <div className="eyebrow">{pathBand.eyebrow}</div>
                <h2>{pathBand.title}</h2>
              </div>
              <p className="path-band-note">{pathBand.note}</p>
            </div>
            <div className="path-stations" id="path-stations">
              {pathStations.map((s, i) => (
                <div className="station" key={i}>
                  <div className="station-dot" />
                  <div className="station-num">{s.num}</div>
                  <div className="station-title">{s.title}</div>
                  <div className="station-meta">{s.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== ROADMAP ========== */}
        <section className="roadmap" id="roadmap">
          <div className="container">
            <div className="roadmap-intro">
              <div className="eyebrow">{roadmapIntro.eyebrow}</div>
              <h2>{roadmapIntro.title}</h2>
              <p>{roadmapIntro.body}</p>
            </div>

            <div id="phases-mount">
              {phases.map((phase, pi) => {
                const [from, to] = phase.range;
                const phaseChapters = chapters.filter(
                  (c) => c.n >= from && c.n <= to
                );
                return (
                  <div className="phase reveal" key={pi}>
                    <div className="phase-head">
                      <span className="phase-num">{phase.eyebrow}</span>
                      <h3 className="phase-title">{phase.title}</h3>
                      <span className="phase-range">
                        {"Chapters " + from + "\u2013" + to}
                      </span>
                    </div>
                    <div className="chapter-grid">
                      {phaseChapters.map((c) => (
                        <ChapterCard
                          key={c.id}
                          chapter={c}
                          code={level.code}
                          icons={icons}
                          skillLabels={skillLabels}
                          onLockedClick={handleLockedClick}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== LEARN LOOP ========== */}
        <section className="learn-loop" aria-label={learnLoop.ariaLabel}>
          <div className="container">
            <div className="loop-head">
              <div className="eyebrow">{learnLoop.eyebrow}</div>
              <h2>{learnLoop.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: learnLoop.intro }} />
            </div>
            <div className="loop-grid">
              {learnLoop.steps.map((step, i) => (
                <div className="loop-step" key={i}>
                  <div className="loop-step-num">{step.num}</div>
                  <div
                    className="loop-step-icon"
                    dangerouslySetInnerHTML={{ __html: step.icon }}
                  />
                  <h3 className="loop-step-title">{step.title}</h3>
                  <p className="loop-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PRICING ========== */}
        <section className="pricing-sec" id="pricing">
          <div className="container">
            <div className="pricing-head">
              <div className="eyebrow">{pricing.eyebrow}</div>
              <h2>{pricing.title}</h2>
              <p>{pricing.intro}</p>
            </div>
            <div className="pricing-grid">
              {pricing.cards.map((card, i) => (
                <div
                  className={"price-card" + (card.center ? " center" : "")}
                  key={i}
                >
                  <div className="price-tier">{card.tier}</div>
                  <div className="price-big">
                    {card.price}
                    {card.priceStrike ? (
                      <span className="price-strike">{card.priceStrike}</span>
                    ) : null}
                  </div>
                  <div className="price-sub">{card.sub}</div>
                  <ul className="price-list">
                    {card.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>
                  <CtaLink cta={card.cta} style={{ alignSelf: "flex-start" }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section className="final-cta">
          <div className="container-narrow">
            <h2 dangerouslySetInnerHTML={{ __html: finalCta.title }} />
            <p>{finalCta.body}</p>
            <div className="final-cta-row">
              {finalCta.ctas.map((c, i) => (
                <CtaLink key={i} cta={c} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-meta">{footer.meta}</div>
            <div className="footer-links">
              {footer.links.map((l, i) => (
                <a key={i} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
