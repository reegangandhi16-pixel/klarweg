# Beginner German · A1 — live course delivery kit

The teaching and delivery system for the first live A1 group batch (`live-a1`). It is for the teacher, Reegan Gandhi.

**Status:** course design only. The course is approved (D3, [decision sheet](live-classes-owner-decisions.md)), but the **launch is on hold**:
- no start date is set;
- `live-a1` and the teacher profile stay drafts;
- the legal and accounting reviews are pending.

Nothing here opens enrolment or promises an exam result.

**Companion file:** [`live-classes-a1-worksheets.md`](live-classes-a1-worksheets.md). It holds the practice templates, original exercises, answer keys, the 12 weekly quizzes and Goethe-style practice sets.

**Contents**
1. [Course frame](#1-course-frame)
2. [How this kit reuses Klarweg A1](#2-how-this-kit-reuses-klarweg-a1)
3. [The 90-minute lesson template](#3-the-90-minute-lesson-template)
4. [Teacher preparation checklist](#4-teacher-preparation-checklist)
5. [The 36 sessions](#5-the-36-sessions)
6. [Assessment calendar](#6-assessment-calendar)
7. [Progress workflow and records](#7-progress-workflow-and-records)
8. [Communication templates](#8-communication-templates)

---

## 1. Course frame

| Item | Approved value (`live-classes-data.js`) |
|---|---|
| Course | Beginner German · A1 (`live-a1`) |
| Teacher | Reegan Gandhi; explanations in Hindi and English |
| Format | Group batch: at least 4 learners, at most 8 |
| Timetable | Monday, Wednesday and Friday, 7:30–9:00 pm IST, on Google Meet |
| Session length | 90 minutes |
| Length | 12 weeks × 3 sessions = **36 sessions**; 36 × 1.5 h = **54 live hours** |
| Fee | ₹7,999 in full, or ₹4,000 before the start and ₹3,999 before week 7 |
| Materials | the teacher's class notes, PDF worksheets, homework with written feedback |
| Exam | prepares for Goethe-Zertifikat A1: Start Deutsch 1; the exam fee is not included |
| Recording | classes are not recorded (D6) |
| Self-paced access | **not included** (D6) |

**Cadence check:**
- Weeks 1–12 each hold sessions Mon (a), Wed (b) and Fri (c). Session *n* falls in week ⌈n/3⌉.
- The schedule has 12 Mondays, 12 Wednesdays and 12 Fridays: 36 sessions in total.
- Session 36 is the Friday of week 12.

**Public holidays:** if a session falls on one, the scheduling policy applies: at least 24 hours' notice and a replacement class. Check the calendar when the start date is set and list the replacement dates in the course-information email (§8, template 3).

### What the exam looks like

Verified on 2026-10-20 against the Goethe-Institut's official pages:
- the written exam is **65 minutes** with no break:
  - Hören, about 20 minutes, 3 parts;
  - Lesen, 25 minutes, 3 parts;
  - Schreiben, 20 minutes, 2 parts: a simple form, then a short personal message;
- Sprechen is a **group exam** of at most 4 candidates, **15 minutes** with no preparation time, in 3 parts:
  - introduce yourself;
  - ask and answer questions on everyday topics;
  - make requests and respond to them;
- the recommended written order is Hören, Lesen, Schreiben, but test centres may change it.

Sources:
- the [Durchführungsbestimmungen](https://www.goethe.de/pro/relaunch/prf/en/Durchfuehrungsbestimmungen_A1_Start_Deutsch_1.pdf);
- the [Modellsatz](https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_modellsatz.pdf);
- [Goethe-Institut Max Mueller Bhavan](https://www.goethe.de/ins/in/en/spr/prf/gzsd1.cfm).

**Re-check these pages before week 10**, because formats can change. This kit's worksheets are "Goethe-style" practice that follows the format above. They are not official material, and they do not claim to match the exam's difficulty or marking. Session 35 uses the official free Modellsatz for the timed mock.

---

## 2. How this kit reuses Klarweg A1

**The A1 sequence is the website's.** The course follows the 47 chapters of `a1.html` / `chapter/_curriculum-a1.json` in order, grouped into the site's five phases:

| Phase | Chapters | Sessions |
|---|---|---|
| 01 German Foundations | 1–8 | S1–S6 |
| 02 Everyday Communication | 9–17 | S7–S14 |
| 03 Daily Life & Routines | 18–26 | S15–S23 |
| 04 Stories, Messages & Experiences | 27–35 | S24–S29 |
| 05 Goethe A1 Mastery | 36–47 | S30–S36 |

Forty-seven chapters fit into 36 sessions by pairing short, related chapters (for example Ch 28 + 29, or Ch 40–42). Nothing is skipped, and no topic is taught out of the site's order.

**What each chapter gives the teacher** (`chapter/chapter-a1-N-*-data.js`):
- outcomes, a grammar explanation and a vocabulary list with English and Hindi glosses;
- a story and reading texts;
- **listening dialogues** with existing audio: IDs `A1_0NN_L001`, … in each chapter's `listening` section;
- speaking prompts, a writing task, exercises and a quiz.

How to use it:
- **Prepare from the chapter:** grammar, vocabulary, example sentences and the Hindi glosses.
- **In class,** the teacher may screen-share the chapter's listening dialogues and audio, or its grammar visuals. These are Klarweg's own materials. Do not regenerate or edit any audio.
- **Learners get no account access.** A live course does not include self-paced access (D6), so learner homework never depends on a paid chapter. Learner material is the teacher's notes plus the original worksheets in the companion file.
- Chapter 1 of A1 is free for everyone, so it may be set as optional homework.

**Goethe checkpoints:** Ch 8, 17, 26 and 35 are the site's Goethe Mini checkpoints, and Ch 47 is the final. The course uses them for S6, S14, S23, S29 and S34–S36.

**Copyright:** the kit uses no textbook chapters, scans or answer keys. Exercises are original, apart from the official Modellsatz, which learners download free from goethe.de and which is never copied into Klarweg files.

---

## 3. The 90-minute lesson template

Every session uses the same shape, so learners know what comes next.

| Min | Block | What happens | Who talks |
|---|---|---|---|
| 0–10 | **Retrieval warm-up** | 5–6 quick items: 2 from the last session, 2 from a week ago, 1–2 from a month ago. Answered in the chat or by cold call, never "who knows?" | every learner answers at least once |
| 10–25 | **Explanation** | One grammar or communication point, in English with Hindi contrasts. A board or slide shows the pattern, three examples and the one trap. | teacher, with comprehension questions |
| 25–35 | **Modelling** | The teacher performs the target language: a mini-dialogue, a think-aloud sentence build, or a listening dialogue from the chapter. Learners notice and say the pattern back. | teacher, then the whole group chorally |
| 35–55 | **Guided practice** | Controlled to semi-controlled: gap-fill out loud, question chains, pair drills, a listening task. | pairs or round-robin |
| 55–70 | **Independent production** | Learners create language: a role play, a short talk or a 3–4 sentence text in a shared doc or the chat. | learners |
| 70–82 | **Correction and feedback** | 4–6 anonymised errors from the production go on screen. The group corrects them, then the teacher names the rule. Praise one specific success per learner. | group, then teacher |
| 82–90 | **Check and homework** | Check for understanding (exit ticket: 3–5 items in the chat), the homework brief, and preview the next session. | everyone |

### Keeping all 4–8 learners talking

- **Name rota.** Keep the class list in a fixed order and cold-call around it. Call the name *after* the question ("Was isst du gern … Priya?"), so everyone prepares an answer.
- **Pairs every session.** If your Google Meet plan offers breakout rooms, use them. If not, run pair practice in the main room: pairs speak in turn while the others listen for one named thing, such as "Did she put the verb second?"
- **Chat answers first.** For closed questions, everyone types the answer and presses Enter together on "drei, zwei, eins, los!". Quiet learners answer without being exposed, and dominant learners can't answer for everyone.
- **Turn limits.** In open discussion, give each learner one turn before anyone gets a second. Thank a dominant learner and redirect: "Danke, Arjun — und Meera, was denkst du?"
- **Wait time.** Wait 3–5 seconds after a question before calling a name. Allow "Moment, bitte" as a valid answer, then come back to that learner.
- **A talk-time target.** Learners should speak for at least half of each session. Count each learner's turns roughly on the register, and give extra turns next session to anyone below 3.
- **Camera and microphone.** Agree the class norms in S1. Never require a learner to show their home, family or real personal data.

### Hindi and English in class

- Explain in English, and add Hindi contrasts where they help.
- Model and practise in German.
- Reduce English and Hindi gradually: about half of explanation time in weeks 1–3, mostly German instructions from week 6, and German-only exam simulations in weeks 11–12.
- Classroom phrases are taught in S5 (Wie bitte? Noch einmal, bitte. Was bedeutet …?), and learners use them from then on.

---

## 4. Teacher preparation checklist

**Before each session (about 45 minutes)**
- [ ] Re-read the session plan (§5) and the Klarweg chapter(s): grammar, vocabulary and the listening IDs to play.
- [ ] Prepare the slides or board: the pattern, 3 examples, the trap, and the retrieval items (last session, last week, last month).
- [ ] Prepare the worksheet and the exit-ticket items from the companion file. Check that the answer key matches.
- [ ] Look at the homework tracker: who hasn't submitted, and which common errors to address.
- [ ] Check Google Meet: the link, screen share and audio playback. Close other tabs.
- [ ] Open the attendance register and the name rota.

**During**
- [ ] Mark attendance by 7:35 pm. Message absent learners after class (§8, template 7), not during it.
- [ ] Keep to the template timings, and protect the production and correction blocks first if time runs short.
- [ ] Note 4–6 errors anonymously for the correction block.
- [ ] Tally each learner's speaking turns.

**After (about 30 minutes)**
- [ ] Send the class notes PDF and the homework within 24 hours.
- [ ] Update the register: attendance, homework set, catch-up sent.
- [ ] Mark homework within 48 hours of the deadline and give written feedback (§7.3).
- [ ] Flag anyone who meets a "falling behind" trigger (§7.4).
- [ ] Note what to recycle in the next three warm-ups.

---

## 5. The 36 sessions

Each session block lists:
- the Klarweg chapter(s) used;
- measurable outcomes ("by the end, each learner can …");
- the focus;
- a Hindi bridge (a contrast worth naming);
- practice in the four skills: L = listening, S = speaking, R = reading, W = writing;
- the guided and independent tasks;
- the check for understanding, with answers;
- homework, and the feedback the teacher gives.

Worksheet codes such as **WS-T2** refer to the companion file.

### Week 1

#### S1 · Week 1 · Mon — Das Alphabet & Laute · Ch 1–2
- **Outcomes:**
  - spell your own name and city aloud;
  - write down a spelled name correctly;
  - pronounce ä, ö, ü, ß, ei, ie, sch, w, z and v in known words.
- **Focus:**
  - letter names;
  - sound rules: ei = "ai", ie = long "ee", w = "v", z = "ts", sch = "sh", v often = "f";
  - long and short vowels;
  - Ch 1 words (Apfel, Buch, Hund, Käse, Mädchen, Straße, Wasser, Zeit).
- **Hindi bridge:**
  - like Devanagari, German spelling is close to phonetic, so letters mostly keep their sound;
  - German w = Hindi व;
  - ö and ü have no Hindi equivalent: say "ee" (ü) or "e" (ö) with rounded lips.
- **Skills:**
  - L: Ch 1–2 listening audio;
  - S: spelling names;
  - R: reading the word list aloud;
  - W: name dictation.
- **Guided:** a spelling chain. One learner spells a German city (Berlin, Köln, München) and the next writes it in the chat.
- **Independent:** each learner spells their first name and an Indian city; the group writes both.
- **Course setup** (first 10 minutes instead of retrieval):
  - welcome and introductions;
  - class norms (camera, microphone, chat, punctuality);
  - how homework and feedback work;
  - the course map, and the fact that classes are not recorded.
- **Check** (dictation): Wasser, Zeit, Straße, Mädchen, Käse.
- **Homework:** WS-T1 Week 1 sound sorting, and spell 5 names as a voice note or in writing.
- **Feedback:** one personal pronunciation target per learner (e.g. "z = ts").

#### S2 · Week 1 · Wed — Zahlen 0–100 · Ch 3
- **Outcomes:**
  - say and write 0–100;
  - understand numbers in dictation;
  - give a (made-up) phone number, an age and a price.
- **Focus:**
  - 0–12 by heart;
  - -zehn and -zig;
  - **units before tens** (einundzwanzig);
  - dreißig with ß, and sechzehn / siebzehn;
  - Wie alt bist du? Wie ist deine Telefonnummer?
- **Hindi bridge:** English says tens first (twenty-one); German says the unit first, joined with "und".
- **Skills:**
  - L: number dictation from the Ch 3 audio;
  - S: Wie alt…? / Wie ist die Nummer…?;
  - W: numbers in words.
- **Guided:** number ping-pong. The teacher says 34 and the learner says the reverse number (43).
- **Independent:** in pairs, exchange invented phone numbers and ages (never real ones) and write them down.
- **Check:** write in words: 47 (siebenundvierzig), 73 (dreiundsiebzig), 99 (neunundneunzig), 16 (sechzehn), 60 (sechzig).
- **Homework:** WS-T1 numbers; write 5 prices and 5 ages in words.
- **Feedback:** mark reversed numbers specifically, since they are the commonest error.

#### S3 · Week 1 · Fri — Hallo! Wer bist du? · Ch 4–5
- **Outcomes:**
  - greet and say goodbye by time of day;
  - choose du or Sie;
  - introduce yourself in 5 sentences: name, country, city, languages, one more fact;
  - use sein and the personal pronouns.
- **Focus:**
  - Guten Morgen / Tag / Abend; Tschüs / Auf Wiedersehen;
  - Ich heiße … / Mein Name ist …; Ich komme aus …; Ich wohne in …; Ich spreche …;
  - sein: bin, bist, ist, sind, seid, sind;
  - Wie geht's? / Wie geht es Ihnen?
- **Hindi bridge:** Sie/du works like आप/तुम. Use Sie with strangers, officials and the examiner.
- **Skills:**
  - L: the Ch 4 greeting dialogues;
  - S: introductions;
  - R: a short profile;
  - W: a self-introduction.
- **Guided:** a mingle chain: greet, ask the name and origin, and pass to the next person, formal then informal.
- **Independent:** a 30-second self-introduction to the group. It previews Sprechen Teil 1.
- **Check:**
  - Ich ___ Ravi. → bin
  - Woher ___ du? → kommst
  - ___ Sie Frau Meyer? → Sind
  - Formal "How are you?" → Wie geht es Ihnen?
- **Homework:** write a 5-sentence self-introduction (WS-T6, prompt W1), and optionally a voice note.
- **Feedback:** use the correction codes on the writing (WS-T6), plus one pronunciation tip.

### Week 2

#### S4 · Week 2 · Mon — W-Fragen · Ch 6
- **Outcomes:**
  - ask and answer questions with wer, was, wie, wo, woher, wohin, wann, warum and wie viel(e);
  - keep the verb in position 2.
- **Focus:** the W-word in position 1 and the verb in position 2 (Wo wohnst du?).
- **Hindi bridge:** in Hindi the question word can sit mid-sentence (तुम कहाँ रहते हो?). German puts it first and the verb second.
- **Skills:**
  - L: the Ch 6 interview audio;
  - S: an interview grid;
  - R: matching questions to answers;
  - W: writing questions.
- **Guided:** answer → question. The teacher gives "In Pune" and learners produce "Wo wohnst du?".
- **Independent:** interview a partner with 6 questions and report back in the third person ("Sie wohnt in Pune").
- **Check:**
  - kommst / woher / du → Woher kommst du?
  - ___ alt bist du? → Wie
  - ___ heißt das auf Deutsch? → Wie
- **Homework:** write 6 questions and answers about a classmate from the interview notes (first names only).
- **Feedback:** verb position and second-person endings (-st).

#### S5 · Week 2 · Wed — Ja oder Nein? · Ch 7
- **Outcomes:**
  - form yes/no questions with the verb first;
  - give short and full answers;
  - negate a simple statement with nicht;
  - use 5 classroom phrases.
- **Focus:**
  - Wohnst du in Delhi? — Ja. / Nein, ich wohne nicht in Delhi.;
  - classroom phrases: Wie bitte? Noch einmal, bitte. Langsam, bitte. Was bedeutet …? Wie schreibt man das?
- **Hindi bridge:** Hindi adds क्या to make a yes/no question. German moves the verb to the front instead.
- **Skills:**
  - L: the Ch 7 dialogues;
  - S: a yes/no guessing game ("Bist du Lehrerin?");
  - R: a short dialogue;
  - W: question transformation.
- **Guided:** statement → question in a round-robin.
- **Independent:** "Wer bin ich?" Each learner chooses a famous person, and the group asks only yes/no questions.
- **Check:**
  - Du wohnst in Pune. → Wohnst du in Pune?
  - Nein-Antwort: Lernst du Spanisch? → Nein, ich lerne nicht Spanisch. (or: Nein, ich lerne Deutsch.)
- **Homework:** WS-T2 question transformation; learn the classroom phrases.
- **Feedback:** verb-first order and the position of nicht.

#### S6 · Week 2 · Fri — Checkpoint 1 · Ch 8 (Goethe Mini 1)
- **Outcomes:**
  - show progress on Ch 1–7 in a short Goethe-style check;
  - get a first skills profile.
- **Plan:**
  - 10 min retrieval;
  - 15 min Hören: a numbers, names and times dictation, read aloud (WS-T5 script 1), or the Ch 8 audio;
  - 15 min Lesen: a short notice with richtig/falsch (WS-T4, text A);
  - 25 min Sprechen: self-introductions with spelling and a number;
  - 15 min feedback;
  - 10 min weekly quiz.
- **Check:** the weekly quiz for weeks 1–2 (WS-T7, Q1 and Q2).
- **Homework:** correct your checkpoint errors, then write 3 personal goals for the course.
- **Feedback:** the first entry in the progress record (§7.2), and a short written note to each learner.

### Week 3

#### S7 · Week 3 · Mon — Verben im Alltag · Ch 9
- **Outcomes:** conjugate regular verbs in the present tense for every person, and describe your week in 4 sentences.
- **Focus:**
  - endings -e, -st, -t, -en, -t, -en;
  - the -t/-d rule: du arbeitest, er arbeitet;
  - arbeiten, lernen, machen, kochen, spielen, brauchen, wohnen.
- **Hindi bridge:** Hindi puts the verb last (मैं जर्मन सीखता हूँ). A German statement has the verb second (Ich lerne Deutsch).
- **Skills:**
  - L: the Ch 9 dialogue;
  - S: a person chain ("ich lerne – du lernst – er lernt …");
  - W: a weekly routine.
- **Guided:** a conjugation chain with a ball-pass (name the next learner).
- **Independent:** "Was machst du am Wochenende?" Each learner gives 3 sentences.
- **Check:** du (lernen) → lernst; er (arbeiten) → arbeitet; wir (spielen) → spielen; ihr (machen) → macht.
- **Homework:** WS-T2 conjugation set; write 5 sentences about your week.
- **Feedback:** endings and the -t/-d rule.

#### S8 · Week 3 · Wed — Der, die, das · Ch 10
- **Outcomes:**
  - learn nouns with their article;
  - use ein and eine;
  - make the plural with die;
  - apply the reliable gender endings.
- **Focus:**
  - der/die/das; ein/eine;
  - plural die;
  - -ung, -heit, -keit and -ion are die; -chen is das;
  - classroom and home objects.
- **Hindi bridge:**
  - Hindi has two genders and German three;
  - the genders **don't match**: किताब is feminine but das Buch is neuter, so never transfer them;
  - colour-code as in Klarweg Ch 10: der = blue, die = green, das = orange.
- **Skills:**
  - R: the Ch 10 reading;
  - S: "Was ist das? — Das ist ein Stift.";
  - W: article sorting.
- **Guided:** an object hunt. Learners show something at home and name it with its article (optional).
- **Independent:** describe your desk: "Hier ist ein Tisch, eine Lampe und ein Buch."
- **Check:** ___ Tisch → der; ___ Lampe → die; ___ Buch → das; ___ Zeitung → die; ___ Mädchen → das.
- **Homework:** WS-T1 article sort for 20 nouns; make article flashcards.
- **Feedback:** articles learned as part of each word.

#### S9 · Week 3 · Fri — Kein & nicht · Ch 11
- **Outcomes:**
  - choose kein or nicht correctly;
  - place nicht at the end of a simple sentence or before an adjective;
  - use nicht mehr and kein … mehr.
- **Focus:**
  - kein replaces ein or no article (Ich habe kein Auto);
  - nicht negates the rest (Ich komme heute nicht. Das ist nicht teuer.).
- **Hindi bridge:** नहीं covers both meanings. German splits them: nouns take kein, everything else takes nicht.
- **Skills:**
  - L: the Ch 11 audio;
  - S: "Hast du …? — Nein, ich habe kein(e/en) …";
  - W: negation.
- **Guided:** the teacher shows a picture or word, and learners answer in the negative.
- **Independent:** a two-truths-and-a-lie game using negation.
- **Check:** Das ist ___ Auto → kein; Ich komme heute ___ → nicht; Ich habe ___ Zeit → keine.
- **Homework:** WS-T2 kein/nicht; the weekly quiz for week 3 (WS-T7, Q3).
- **Feedback:** kein vs nicht, and the position of nicht.

### Week 4

#### S10 · Week 4 · Mon — Akkusativ · Ch 12
- **Outcomes:**
  - identify the direct object;
  - change der→den, ein→einen and kein→keinen;
  - ask Wen? and Was?
- **Focus:**
  - only the masculine article changes;
  - haben, brauchen, suchen, finden, kaufen, möchten;
  - es gibt + Akkusativ (preview).
- **Hindi bridge:** Hindi sometimes marks the object with को. German marks it only on masculine articles.
- **Skills:**
  - L: the Ch 12 audio;
  - S: a shopping list game;
  - R: the Ch 12 story;
  - W: gap-fill.
- **Guided:** a chain: "Ich brauche einen Stift" → the next learner adds an item with the right article.
- **Independent:** plan a party in pairs: "Wir brauchen einen Kuchen, eine Pizza, ein Getränk …"
- **Check:** Ich habe ___ (ein) Hund → einen; Ich suche ___ (der) Schlüssel → den; Ich kaufe ___ (eine) Lampe → eine.
- **Homework:** WS-T2 Akkusativ (the worked sample in the companion file).
- **Feedback:** the masculine -en ending.

#### S11 · Week 4 · Wed — Beschreiben, Essen & Trinken · Ch 13–14
- **Outcomes:**
  - describe things with sein + an adjective;
  - name 20 foods and drinks with their articles;
  - say what you like with mögen and gern;
  - use ich möchte.
- **Focus:**
  - adjectives after sein take no ending (Der Kaffee ist heiß);
  - opposites (groß/klein, teuer/billig);
  - essen (du isst, er isst), trinken, mögen (ich mag, du magst).
- **Hindi bridge:** Indian staples are useful vocabulary: der Reis, das Brot, die Linsen, der Tee.
- **Skills:**
  - L: the Ch 14 dialogue;
  - S: "Was isst du zum Frühstück?";
  - R: a menu;
  - W: food preferences.
- **Guided:** a like/dislike survey: "Magst du Fisch? — Ja, ich esse gern Fisch. / Nein, ich mag keinen Fisch."
- **Independent:** describe your favourite meal in 4 sentences with 2 adjectives.
- **Check:** er (essen) → isst; ich (mögen) → mag; Der Tee ist ___ (hot) → heiß.
- **Homework:** WS-T1 food vocabulary (sample set); write your daily meals (WS-T6, prompt W2).
- **Feedback:** irregular forms and articles of food nouns.

#### S12 · Week 4 · Fri — Im Café · Ch 15
- **Outcomes:**
  - order politely;
  - ask the price;
  - understand prices in euros and cents;
  - pay.
- **Focus:**
  - Ich möchte … / Ich hätte gern … / Ich nehme …;
  - Können Sie … bringen?; Was kostet …?;
  - Zusammen oder getrennt? Das macht … Stimmt so.
- **Hindi bridge:** "Ich will" is too blunt for ordering (like "मुझे चाहिए!"). Use möchte or hätte gern.
- **Skills:**
  - L: the Ch 15 café audio and WS-T5 script 3;
  - S: a café role play;
  - R: a menu with prices;
  - W: an order note.
- **Guided:** a chain of orders and prices from a menu on screen.
- **Independent:** the café role play (WS-T3, card A), in rotating roles of guest and waiter.
- **Check:** "Ich will einen Tee" → Ich möchte einen Tee / Ich hätte gern einen Tee; 4,50 € → vier Euro fünfzig.
- **Homework:** the weekly quiz for week 4 (WS-T7, Q4); write a café dialogue of 6 lines.
- **Feedback:** register and politeness, and the Akkusativ in orders.

### Week 5

#### S13 · Week 5 · Mon — Hobbys & Freizeit · Ch 16
- **Outcomes:**
  - talk about hobbies;
  - rank preferences with gern, lieber and am liebsten;
  - ask and answer on the topic of free time, which previews Sprechen Teil 2.
- **Focus:** spielen, hören, lesen (du liest), gehen, schwimmen, tanzen; gern / lieber / am liebsten.
- **Hindi bridge:** gern works like पसंद से …. It goes after the verb: Ich lese gern.
- **Skills:**
  - L: the Ch 16 audio;
  - S: topic cards on Freizeit (WS-T8, Sprechen Teil 2);
  - R: an event advert;
  - W: a hobby profile.
- **Guided:** a preference ladder: "Ich spiele gern Cricket, ich schwimme lieber, am liebsten tanze ich."
- **Independent:** topic-card practice. Learner A draws a card such as "Wochenende" and asks a question; learner B answers.
- **Check:** Ich spiele gern Tennis, aber ich schwimme ___ → lieber; Am ___ lese ich → liebsten; du (lesen) → liest.
- **Homework:** WS-T6 prompt W3 (my free time).
- **Feedback:** the position of gern and the comparison words.

#### S14 · Week 5 · Wed — Checkpoint 2: Formulare · Ch 17 (Goethe Mini 2)
- **Outcomes:**
  - fill in a registration form from a short text, as in Schreiben Teil 1;
  - consolidate Ch 1–16.
- **Focus:** form vocabulary: Familienname, Vorname, Straße, Hausnummer, Postleitzahl, Wohnort, Geburtsdatum, Beruf.
- **Privacy:** always use **invented personas**, never the learners' real addresses or dates.
- **Plan:**
  - 10 min retrieval;
  - 20 min form vocabulary and model;
  - 20 min Schreiben Teil 1-style form (WS-T8, form task);
  - 20 min Lesen (WS-T4, text B);
  - 10 min feedback;
  - 10 min quiz for week 5 (WS-T7, Q5).
- **Check:** PLZ = Postleitzahl; "weiblich" means female.
- **Homework:** correct the form task; review Ch 9–16 vocabulary.
- **Feedback:** the second progress-record entry.

#### S15 · Week 5 · Fri — Unregelmäßige Verben · Ch 18
- **Outcomes:** use sein, haben and werden, and the stem-changing verbs, in du and er/sie/es forms.
- **Focus:**
  - a→ä: fahren → fährst/fährt, schlafen → schläfst;
  - e→i: essen, geben, sprechen, treffen;
  - e→ie: sehen, lesen;
  - only du and er/sie/es change.
- **Hindi bridge:** treat the vowel change as a "you and he" rule. Learn the du form with each verb.
- **Skills:**
  - L: the Ch 18 audio;
  - S: "Was macht dein Freund am Wochenende?";
  - W: a third-person report.
- **Guided:** drill the du and er forms with mixed regular and irregular verbs.
- **Independent:** describe a friend's day in the third person with 4 irregular verbs.
- **Check:** du (fahren) → fährst; er (lesen) → liest; sie (essen) → isst; du (sehen) → siehst.
- **Homework:** WS-T2 irregular verbs.
- **Feedback:** stem changes in the du and er forms only.

### Week 6

#### S16 · Week 6 · Mon — Satzposition · Ch 19
- **Outcomes:**
  - keep the verb second when a time word starts the sentence;
  - describe a daily routine with adverbs of frequency.
- **Focus:**
  - V2 with inversion (Morgens trinke ich Tee);
  - morgens, mittags, abends, immer, oft, manchmal, nie;
  - W-questions vs yes/no questions;
  - the position of nicht (review).
- **Hindi bridge:** Hindi allows flexible order with the verb last. German has one fixed rule: the verb is the second element.
- **Skills:**
  - L: the Ch 19 audio;
  - S: "Mein Tag";
  - R: a routine text;
  - W: sentence building.
- **Guided:** sentence-card reorder, starting the sentence with the time word.
- **Independent:** a timeline of your day in 6 sentences, each starting differently.
- **Check:** Am Wochenende / ich / koche → Am Wochenende koche ich.; Abends / ich / lese → Abends lese ich.
- **Homework:** WS-T6 prompt W4 (my day, 6 sentences).
- **Feedback:** inversion errors such as "Morgens ich trinke".

#### S17 · Week 6 · Wed — Modalverben 1 · Ch 20
- **Outcomes:** express ability, obligation, wish and polite wish with können, müssen, wollen and möchten, using the sentence bracket.
- **Focus:**
  - the modal verb in position 2 and the infinitive at the end;
  - the forms ich kann, du kannst, er kann; ich muss; ich will.
- **Hindi bridge:** like Hindi सकना ("I can go"), the main verb stays in the infinitive. In German it moves to the very end.
- **Skills:**
  - L: the Ch 20 audio;
  - S: "Was kannst du gut?";
  - W: plans for the week.
- **Guided:** transform sentences: "Ich lerne." → "Ich muss lernen."
- **Independent:** arrange a weekend meeting with a partner: what you must, can and want to do.
- **Check:** Ich ___ heute lernen (müssen) → muss; fix "Ich kann sprechen Deutsch" → Ich kann Deutsch sprechen.
- **Homework:** WS-T2 modal verbs; the weekly quiz for week 6 (WS-T7, Q6, after S18).
- **Feedback:** the infinitive at the end.

#### S18 · Week 6 · Fri — Uhrzeit & Wochentage · Ch 21
- **Outcomes:**
  - tell the time informally and officially;
  - give days and times with am, um and von … bis;
  - understand times in listening.
- **Focus:**
  - halb acht = 7:30;
  - Viertel nach and Viertel vor;
  - 24-hour official time;
  - Montag–Sonntag;
  - Wann? Um wie viel Uhr?
- **Hindi bridge:**
  - साढ़े सात = 7:30 = **halb acht**: German counts towards the *next* hour;
  - English speakers sometimes say "half eight" for 8:30, which is the trap.
- **Skills:**
  - L: times in an announcement (WS-T5, script 2);
  - S: making an appointment;
  - R: a timetable;
  - W: a weekly schedule.
- **Guided:** the teacher shows a clock and learners say the informal and official time.
- **Independent:** find a common free slot with a partner: "Hast du am Dienstag um 18 Uhr Zeit?"
- **Check:** 7:30 → halb acht; 9:45 → Viertel vor zehn; 14:15 → vierzehn Uhr fünfzehn; ___ Montag ___ 9 Uhr → am, um.
- **Homework:** the weekly quiz for week 6 (WS-T7, Q6), and write your weekly schedule.
- **Feedback:** halb errors and prepositions of time.

### Week 7

#### S19 · Week 7 · Mon — Berufe & Arbeit · Ch 22
- **Outcomes:**
  - name professions in masculine and feminine forms;
  - say what you do and where you work;
  - ask about someone's job.
- **Focus:**
  - Ich bin Lehrer/Lehrerin, with **no article**;
  - Ich arbeite als … / bei … / im Büro;
  - the feminine ending -in, and Arzt → Ärztin.
- **Hindi bridge:** English says "a teacher", but German drops the article: Ich bin Ingenieurin.
- **Skills:**
  - L: the Ch 22 audio;
  - S: a job interview game;
  - R: job ads;
  - W: a work profile.
- **Guided:** guess the profession from a 3-sentence description.
- **Independent:** a Sprechen Teil 2-style exchange on the topic Arbeit (Beruf? Arbeitszeit? Kollegen?).
- **Check:** "I am a teacher (female)" → Ich bin Lehrerin.; Er arbeitet ___ Arzt → als.
- **Homework:** WS-T1 profession vocabulary; write 4 sentences about a job (real or invented).
- **Feedback:** no article before a profession, and feminine forms.

#### S20 · Week 7 · Wed — Familie & Possessivartikel · Ch 23
- **Outcomes:** talk about family with mein, dein, sein, ihr, unser, euer and Ihr, with the right ending.
- **Focus:**
  - the ending follows the noun: mein Bruder, meine Schwester, meine Eltern;
  - sein (his) vs ihr (her);
  - Akkusativ: Ich habe einen Bruder → Ich besuche meinen Bruder.
- **Hindi bridge:**
  - Hindi उसका/उसकी agrees with the thing owned;
  - German chooses sein or ihr by the **owner**, then puts the ending on the thing owned.
- **Privacy:** learners may describe an **invented** family; real details are never required.
- **Skills:**
  - L: the Ch 23 audio;
  - S: a family tree;
  - R: a family text;
  - W: a family description.
- **Guided:** questions on a family tree shown on screen ("Wer ist Annas Bruder?").
- **Independent:** present a family (real or invented) in 5 sentences.
- **Check:** Das ist ___ (my) Bruder → mein; ___ (my) Schwester → meine; Anna und ___ (her) Vater → ihr.
- **Homework:** WS-T2 possessives; WS-T6 prompt W5.
- **Feedback:** sein vs ihr, and endings.

#### S21 · Week 7 · Fri — Datum & Ordinalzahlen · Ch 24
- **Outcomes:**
  - say dates with am + an ordinal;
  - name the months;
  - ask about birthdays and course dates.
- **Focus:**
  - der erste, zweite, dritte, siebte, achte;
  - -te for 1–19, -ste from 20;
  - am 1. Mai = am ersten Mai;
  - Wann hast du Geburtstag?
- **Hindi bridge:** written as a number with a dot (1.), and said with an ending (ersten).
- **Skills:**
  - L: dates in announcements;
  - S: a calendar interview with **invented dates**;
  - R: an invitation;
  - W: a date list.
- **Guided:** say the dates on screen in sequence.
- **Independent:** plan 3 events with a partner and agree the dates.
- **Check:** 3. Oktober → am dritten Oktober; 20. Juli → am zwanzigsten Juli; 1. Mai → am ersten Mai.
- **Homework:** the weekly quiz for week 7 (WS-T7, Q7).
- **Feedback:** ordinal endings.

### Week 8

#### S22 · Week 8 · Mon — Trennbare Verben · Ch 25
- **Outcomes:** use separable verbs in present-tense sentences and with modal verbs, and describe a routine with them.
- **Focus:**
  - aufstehen, anrufen, einkaufen, mitkommen, fernsehen, anfangen;
  - the prefix goes to the end (Ich stehe um 6 Uhr auf);
  - with a modal verb, the prefix stays joined (Ich muss früh aufstehen).
- **Hindi bridge:** the verb frame is like a sandwich: verb in position 2, prefix at the end.
- **Skills:**
  - L: the Ch 25 audio;
  - S: "Wann stehst du auf?";
  - W: a routine with 5 separable verbs.
- **Guided:** split the verb in a round-robin.
- **Independent:** invite a partner: "Kommst du mit? Wir kaufen am Samstag ein."
- **Check:** Ich ___ um 6 Uhr ___ (aufstehen) → stehe … auf; Ich muss meine Mutter ___ (anrufen) → anrufen.
- **Homework:** WS-T2 separable verbs.
- **Feedback:** where the prefix goes, with and without a modal.

#### S23 · Week 8 · Wed — Checkpoint 3: Termine & Pünktlichkeit · Ch 26 (Goethe Mini 3)
- **Outcomes:**
  - make, move and cancel an appointment;
  - apologise and accept an apology;
  - write a 3-point message of about 30 words, as in Schreiben Teil 2.
- **Focus:**
  - Ich habe einen Termin. Ich habe leider keine Zeit. Geht es am …?;
  - Entschuldigung, ich habe Verspätung. — Das macht nichts.
- **Plan:**
  - 10 min retrieval;
  - 15 min Hören (WS-T5, script 1, an appointment phone message);
  - 20 min appointment role plays (WS-T3, card B);
  - 25 min Schreiben (WS-T6, prompt P1);
  - 10 min feedback;
  - 10 min quiz for week 8 (part 1).
- **Check:** a reply to "Entschuldigung, ich bin zu spät." → Das macht nichts. / Kein Problem.
- **Homework:** rewrite P1 using the feedback.
- **Feedback:** the third progress-record entry and the midpoint review (§7.5).

#### S24 · Week 8 · Fri — Präteritum: war & hatte · Ch 27
- **Outcomes:** talk about the past with war, hatte and es gab.
- **Focus:**
  - war: ich war, du warst, er war, wir waren;
  - hatte: ich hatte, du hattest;
  - gestern, vorgestern, früher, letzte Woche.
- **Hindi bridge:** था/थी covers war; हमारे पास … था covers hatte.
- **Skills:**
  - L: the Ch 27 audio;
  - S: "Wo warst du gestern?";
  - R: a "früher und heute" text;
  - W: my weekend.
- **Guided:** answer "Wo warst du …?" chains.
- **Independent:** "Früher und heute" with 3 contrasts each.
- **Check:** Gestern ___ ich müde → war; Wir ___ keine Zeit → hatten; Früher ___ es hier ein Kino → gab.
- **Homework:** the weekly quiz for week 8 (WS-T7, Q8).
- **Feedback:** war/hatte forms.

### Week 9

#### S25 · Week 9 · Mon — Perfekt mit haben · Ch 28–29
- **Outcomes:** tell what you did yesterday with haben + Partizip II, using regular and common irregular participles.
- **Focus:**
  - haben in position 2 and the participle at the end;
  - ge-…-t: gemacht, gelernt, gekauft, gearbeitet;
  - common -en participles: gegessen, getrunken, gesehen, gelesen, geschrieben.
- **Hindi bridge:** like मैंने खाया है, a helper verb plus a main verb, but German sends the participle to the end.
- **Skills:**
  - L: the Ch 28–29 audio;
  - S: "Was hast du gestern gemacht?";
  - R: a diary entry;
  - W: yesterday.
- **Guided:** infinitive → participle sorting, then a sentence frame.
- **Independent:** report yesterday in 5 sentences, with one question from each listener.
- **Check:** Ich ___ gestern Deutsch ___ (lernen) → habe … gelernt; trinken → getrunken; arbeiten → gearbeitet.
- **Homework:** WS-T2 Perfekt (haben).
- **Feedback:** the position of the participle and ge-forms.

#### S26 · Week 9 · Wed — Perfekt mit sein & Partizip mit Präfix · Ch 30–31
- **Outcomes:**
  - choose sein for movement and change of state;
  - form participles of separable and inseparable verbs.
- **Focus:**
  - sein: gegangen, gefahren, geflogen, gekommen, geblieben, aufgestanden;
  - separable verbs put ge- in the middle: eingekauft, angerufen;
  - inseparable verbs (be-, er-, ver-, ent-, emp-) take no ge-: bekommen, besucht, erzählt, vergessen, verkauft.
- **Hindi bridge:** a movement from A to B, or a change, takes sein.
- **Skills:**
  - L: the Ch 30 audio;
  - S: a travel story;
  - W: a holiday postcard.
- **Guided:** a haben-or-sein decision game, then participle building.
- **Independent:** "Meine Reise" in 5 sentences, using at least 2 sein verbs.
- **Check:** Wir ___ nach Goa ___ (fahren) → sind … gefahren; einkaufen → eingekauft; besuchen → besucht.
- **Homework:** WS-T6 prompt W6 (holiday message).
- **Feedback:** the choice between haben and sein, and prefixes.

#### S27 · Week 9 · Fri — Akkusativpronomen & Sätze verbinden · Ch 32–33
- **Outcomes:**
  - replace object nouns with mich, dich, ihn, sie, es, uns, euch or Sie;
  - connect sentences with und, aber, oder, denn, deshalb and weil.
- **Focus:**
  - den Mann → ihn;
  - und/aber/oder/denn do not change word order;
  - deshalb puts the verb next to it;
  - weil sends the verb to the end.
- **Hindi bridge:** weil is like क्योंकि, but the German verb jumps to the very end.
- **Skills:**
  - L: the Ch 33 audio;
  - S: "Warum lernst du Deutsch?";
  - W: connecting sentences.
- **Guided:** join two cards with a connector, then fix the verb.
- **Independent:** give 3 reasons for learning German, with weil, denn and deshalb.
- **Check:** Ich sehe den Mann → Ich sehe ihn.; Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte → weil.
- **Homework:** the weekly quiz for week 9 (WS-T7, Q9).
- **Feedback:** the verb at the end after weil.

### Week 10

#### S28 · Week 10 · Mon — Schreiben: Nachrichten & Einladungen · Ch 34
- **Outcomes:**
  - write informal and formal messages of about 30 words that cover 3 given points;
  - invite, accept and decline.
- **Focus:**
  - Liebe/Lieber … / Liebe Grüße;
  - Sehr geehrte Frau … / Sehr geehrter Herr … / Mit freundlichen Grüßen;
  - plan with Stichpunkte, write, then check all 3 points.
- **Hindi bridge:** the formal register is like a formal Hindi letter (आदरणीय …), and it needs the same consistency: Sie throughout.
- **Skills:**
  - R: model messages;
  - W: prompts P2 and P3;
  - S: read your message aloud.
- **Guided:** improve a weak model answer together (WS-T6 worked example).
- **Independent:** a timed 15-minute message (WS-T6, prompt P2, formal).
- **Check:** a formal greeting to Frau Schmidt → Sehr geehrte Frau Schmidt,; an informal closing → Liebe Grüße.
- **Homework:** WS-T6 prompt P3 (informal invitation).
- **Feedback:** the rubric (3 points, register, accuracy, range).

#### S29 · Week 10 · Wed — Checkpoint 4: Erlebnisse · Ch 35 (Goethe Mini 4)
- **Outcomes:**
  - tell a short holiday story in the Perfekt with war and hatte;
  - use pronouns and connectors;
  - write a message.
- **Plan:**
  - 10 min retrieval;
  - 20 min speaking (a holiday story, 2 minutes each);
  - 25 min writing (an unseen 3-point message);
  - 15 min reading (WS-T4, text C);
  - 10 min feedback;
  - 10 min quiz for week 10 (part 1).
- **Check:** retell one classmate's story in 2 sentences.
- **Homework:** a revision plan of the 3 weakest topics from the progress record.
- **Feedback:** the fourth progress-record entry.

#### S30 · Week 10 · Fri — Dativ & Präpositionen mit Dativ · Ch 36–37
- **Outcomes:**
  - use dem, der, dem and den (+n) after aus, bei, mit, nach, seit, von and zu;
  - talk about transport and origin.
- **Focus:**
  - mit dem Bus, mit der Bahn;
  - zum Bahnhof, zur Arbeit, nach Hause, bei meiner Freundin;
  - aus Indien;
  - seit zwei Jahren.
- **Hindi bridge:** like Hindi postpositions (से, के साथ, तक), these always take a fixed case.
- **Skills:**
  - L: the Ch 37 audio;
  - S: "Wie kommst du zur Arbeit?";
  - W: my journey.
- **Guided:** a transport survey with mit + dative.
- **Independent:** describe your route to work or college in 4 sentences.
- **Check:** Ich fahre mit ___ Zug → dem; Ich wohne bei ___ Eltern → meinen; Ich gehe zu ___ Ärztin → der / zur.
- **Homework:** the weekly quiz for week 10 (WS-T7, Q10).
- **Feedback:** dative endings after these prepositions.

### Week 11

#### S31 · Week 11 · Mon — Wechselpräpositionen & Wege · Ch 38–39
- **Outcomes:**
  - say where things are (dative) and where they go (accusative);
  - give and follow simple directions.
- **Focus:**
  - Wo? + Dativ (auf dem Tisch); Wohin? + Akkusativ (auf den Tisch);
  - links, rechts, geradeaus, die erste Straße links;
  - im, am, ins, zum, zur.
- **Hindi bridge:** Wo? is like "कहाँ है?" and Wohin? is like "कहाँ जा रहा है?". Motion changes the case.
- **Skills:**
  - L: directions;
  - S: a directions role play on a simple map;
  - R: a room description;
  - W: my room.
- **Guided:** the teacher moves objects on screen, and learners say wo or wohin.
- **Independent:** a directions role play (WS-T3, card C).
- **Check:** Wo ist das Buch? — Auf ___ Tisch → dem; Ich lege das Buch auf ___ Tisch → den.
- **Homework:** WS-T2 Wo/Wohin.
- **Feedback:** movement versus location.

#### S32 · Week 11 · Wed — Verben & Pronomen mit Dativ, welcher & dieser · Ch 40–42
- **Outcomes:**
  - use helfen, danken, gefallen, gehören, passen and schmecken with dative pronouns;
  - ask "Welcher …?" and point with "dieser".
- **Focus:**
  - Der Pullover gefällt mir;
  - Kannst du mir helfen?;
  - mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen;
  - Welche Jacke? — Diese hier.;
  - clothes.
- **Hindi bridge:** मुझे पसंद है maps neatly onto **Es gefällt mir**: the thing liked is the subject.
- **Skills:**
  - L: the Ch 40 audio;
  - S: a clothes-shopping role play;
  - R: a shop advert;
  - W: a short review.
- **Guided:** transform "Ich mag den Pullover" → "Der Pullover gefällt mir."
- **Independent:** the shopping role play, with welcher, dieser, passen and gefallen.
- **Check:** Der Pullover gefällt ___ (me) → mir; Kannst du ___ helfen? (me) → mir; ___ Hose? — Diese → Welche.
- **Homework:** WS-T2 dative pronouns.
- **Feedback:** subject and object with gefallen.

#### S33 · Week 11 · Fri — Small Talk, man, Imperativ, dürfen & sollen · Ch 43–44
- **Outcomes:**
  - make small talk about the weather;
  - use man;
  - make and answer requests with the imperative and "Kannst du / Können Sie …?";
  - use dürfen and sollen.
- **Focus:**
  - man + the er-form (Hier darf man nicht parken);
  - imperative: Komm! Kommt! Kommen Sie!; lesen → Lies!;
  - body and health words.
- **Hindi bridge:** the du-imperative is like तुम-commands, and "Kommen Sie bitte" is like आइए.
- **Skills:**
  - L: the Ch 44 doctor dialogue;
  - S: request cards in the style of Sprechen Teil 3 (WS-T8);
  - R: signs and rules;
  - W: advice.
- **Guided:** request chains: "Kannst du bitte das Fenster aufmachen? — Ja, gern."
- **Independent:** a doctor role play: describe what hurts, get advice, use sollen.
- **Check:** (du) kommen → Komm!; (Sie) warten → Warten Sie!; (du) lesen → Lies!; Hier ___ man nicht rauchen → darf.
- **Homework:** the weekly quiz for week 11 (WS-T7, Q11).
- **Feedback:** imperative forms and polite requests.

### Week 12

#### S34 · Week 12 · Mon — Telefonieren, Zeitangaben & Prüfungsstrategien · Ch 45–47
- **Outcomes:**
  - make a simple phone call and ask someone to repeat;
  - use am, im, um, seit, ab, vor and nach for time;
  - apply one strategy per exam module.
- **Focus:**
  - Hallo, hier ist …; Können Sie das bitte wiederholen?;
  - am Montag, im Mai, seit drei Monaten, nach dem Kurs.
- **Strategies:**
  - Hören: read the questions first, and note times and numbers;
  - Lesen: read the heading first;
  - Schreiben: cover all 3 points, then check;
  - Sprechen: ask simple questions and answer in full sentences.
- **Skills:**
  - L: a phone message (WS-T5, script 1, replayed as a timed task);
  - S: phone role plays;
  - W: a note from a call.
- **Guided:** a time-preposition sort.
- **Independent:** call a school to ask about course times (WS-T3, card D).
- **Check:** ___ Mai → im; ___ Wochenende → am; Ich lerne ___ drei Monaten Deutsch → seit.
- **Homework:** the weekly quiz for week 12 (WS-T7, Q12); download the official Modellsatz from goethe.de, but don't open it yet.
- **Feedback:** strategies, and a final list of time prepositions.

#### S35 · Week 12 · Wed — Written mock exam
- **Outcome:** each learner completes the written exam format under time: Hören about 20 minutes, Lesen 25 and Schreiben 20, **65 minutes** in total with no break.
- **Material:** the official **Goethe-Institut Modellsatz** for Start Deutsch 1, which learners download free from goethe.de, with its audio played by the teacher. Do not copy it into Klarweg files.
- **Plan:**
  - 5 min setup and rules;
  - 65 min exam, in the recommended order Hören, Lesen, Schreiben;
  - 20 min marking of Hören and Lesen against the official key; the teacher marks Schreiben afterwards with WS-T6.
- **Check:** each learner notes their two weakest parts.
- **Homework:** review the errors, and prepare Teil 1 of Sprechen (your introduction).
- **Feedback:** written Schreiben feedback before S36, entered on the progress record as practice results. **These are not predictions of an exam result.**

#### S36 · Week 12 · Fri — Speaking mock, readiness review & course close
- **Outcome:** each learner completes a group speaking practice in the 3-part format and receives an individual readiness review.
- **Plan:**
  - 5 min setup;
  - about 30 min speaking mocks: groups of up to 4, about 15 minutes per group, using WS-T8 cards; the other group observes with a peer checklist;
  - 15 min group feedback;
  - 25 min individual readiness reviews of about 3 minutes each (§7.6), or by email afterwards if the batch has 8 learners;
  - 10 min course close, leaving a 5-minute buffer: next steps, how to book the exam (the learner books directly with a Goethe-Institut or exam centre, and the fee is not included), and A2 options. No promise of a further course unless one has been announced.
- **Feedback:** the final readiness review (§7.6), and the completion email (§8, template 9).

**Count check:** the plan has S1–S36, 3 sessions in each of weeks 1–12, giving 36 × 90 min = 3,240 min = **54 h**. All 47 chapters are used, in the site's order.

---

## 6. Assessment calendar

| When | What | Purpose |
|---|---|---|
| Every session | Exit ticket of 3–5 items | Was today's point understood? |
| Every week | Weekly quiz of 6 items (WS-T7), set as homework at the end of the week | Spaced review |
| S6, S14, S23, S29 | Klarweg Goethe Mini checkpoints (Ch 8, 17, 26, 35) | A skills profile at the end of each phase |
| S23 (week 8) | Midpoint review | Catch learners who are falling behind early |
| S35 | Written mock with the official Modellsatz | Practice under time |
| S36 | Speaking mock and readiness review | Next-step advice per learner |

Practice scores are **for feedback only**. Never report them as a prediction of an exam result.

---

## 7. Progress workflow and records

**Keep personal data minimal:**
- Use first names or initials only. Keep the records in the teacher's private spreadsheet: **not in this repository, not on the website, not in a new database**.
- Record no phone numbers, addresses or dates of birth. Personal-data examples in class always use invented personas.
- How long learner records are kept after the course is not yet decided; it is part of the pending legal review. Until then, keep them only for the duration of the course plus any follow-up the learner asks for.

### 7.1 Attendance register (one tab)

Mark each learner P (present), L (late), A (absent) or C (catch-up sent).

| Learner | S1 | S2 | S3 | S4 | … | S36 | Attended | Catch-ups sent |
|---|---|---|---|---|---|---|---|---|
| Learner A | P | P | L | A/C | … | | 3/4 | 1 |
| Learner B | | | | | | | | |

### 7.2 Progress record across the four skills (one row per learner and checkpoint)

**Scale:**
- **1:** not yet; needs support with this phase's tasks.
- **2:** developing; the task is completed with frequent errors or prompts.
- **3:** secure for this stage; the task is completed with minor errors.
- **4:** beyond this stage.

| Learner | Checkpoint | Hören | Lesen | Schreiben | Sprechen | Grammar to work on | Strength | Action agreed |
|---|---|---|---|---|---|---|---|---|
| Learner A | S6 | 3 | 3 | 2 | 2 | verb position | numbers | 5 min daily speaking aloud |
| Learner A | S14 | | | | | | | |

Descriptors at A1, by skill:
- **Hören:** catches numbers, times, names and the main point of slow, clear speech.
- **Lesen:** finds specific information in short notices, ads and messages.
- **Schreiben:** fills in forms and writes 3-point messages in the right register.
- **Sprechen:** introduces themselves, asks and answers everyday questions, and makes requests.

### 7.3 Homework and feedback tracker

| Week | Homework set | Due | Learner A | Learner B | … | Common errors (anonymised, for the next warm-up) |
|---|---|---|---|---|---|---|
| 1 | WS-T1 sounds, self-intro W1 | S3, 7:30 pm | ✓ fb sent | late | | z pronounced as "z"; "Ich bin heiße" |

**Feedback rules:**
- Return feedback within 48 hours of the due date.
- Use the correction codes (WS-T6) so learners correct their own errors.
- Give each learner one specific strength and **one** priority to work on, not a full list.
- Reply on the same email thread so the history stays together.

### 7.4 Spotting learners who are falling behind

A learner is **at risk** if any of these happen:
- 2 missed sessions in a row, or 4 in total;
- 2 pieces of homework not submitted in a row;
- a score of 1 in any skill at a checkpoint, or a score of 2 in the same skill at two checkpoints in a row;
- exit tickets below half correct in 3 sessions within a fortnight.

**What to do** (all within the existing course):
1. Send a private, friendly email within 48 hours. Name one concrete step; no blame.
2. Give a targeted catch-up pack (§7.5) and two extra speaking turns in each of the next sessions.
3. Pair the learner with a stronger, patient partner for guided practice.
4. Review at the next checkpoint and record the action on the progress record.

The course offers no extra paid sessions or individual lessons unless the owner decides to.

### 7.5 Revision and catch-up

- **Missed session:** within 24 hours, send the class notes PDF, the worksheet with its answer key, and the homework (§8, template 7). Classes are not recorded. The learner can bring questions to the next session's warm-up.
- **Weekly spacing:** every warm-up recycles material from the last session, the last week and the last month, drawn from the tracker's common errors.
- **Midpoint review** (S23): each learner gets a one-paragraph written summary with their 2 strengths and 2 priorities, and a revision plan for weeks 9–12.
- **Revision week** (week 12): S34 consolidates all of A1; the error banks from the four checkpoints become the S34 warm-up.

### 7.6 Final readiness review (S36)

For each learner, fill in this table and send it with the completion email:

| Area | Evidence (S35/S36 practice, homework) | Rating (1–4) | Practise next |
|---|---|---|---|
| Hören | | | e.g. numbers and times in announcements |
| Lesen | | | |
| Schreiben (form + message) | | | |
| Sprechen (Teile 1–3) | | | |
| Grammar | | | e.g. Perfekt with sein |

End with a recommendation:
- **"practise these areas before booking"**, or
- **"ready to book when you feel confident"**.

Never state a pass probability. The learner decides whether and when to book the exam, and books it directly.

---

## 8. Communication templates

**Usage rules:**
- Placeholders in [brackets] are filled in only with facts that exist.
- Templates 3–9 are **for use after the launch** (D8), once the legal review is complete, a start date is approved and the course is published. Until then, only templates 1 and 2 may be sent.
- Templates 5 and 6 are sent **only after** the real payment has been verified on the bank statement.
- Never write a start date, joining link, receipt or confirmation that does not exist yet.
- Receipts and invoices depend on the accountant's advice (see the [accounting handoff](live-classes-accounting-handoff.md)). Don't promise a document format before then.

### Template 1 — reply to a first enquiry about the A1 course

> **Subject:** Re: Beginner German · A1 live course
>
> Hallo [first name],
>
> Thank you for your interest in Klarweg's live Beginner German · A1 course.
>
> The course is in preparation and **enrolment is not open yet**. There is no start date yet. Here is what is planned:
> - a small group of 4–8 learners, taught by Reegan Gandhi with explanations in Hindi and English;
> - Monday, Wednesday and Friday, 7:30–9:00 pm IST on Google Meet, for 12 weeks (36 classes, 54 hours);
> - class notes, PDF worksheets and homework with written feedback;
> - preparation for Goethe-Zertifikat A1: Start Deutsch 1 (the exam fee is not included).
>
> If you would like, I can add you to the waitlist and email you when a start date is confirmed. Joining the waitlist is free and commits you to nothing.
>
> Viele Grüße
> Reegan Gandhi · Klarweg
> klarwegofficial@gmail.com

### Template 2 — waitlist acknowledgement

> **Subject:** You're on the waitlist: Beginner German · A1
>
> Hallo [first name],
>
> Thanks, you are on the waitlist for the live Beginner German · A1 course. **This is not a booking, and nothing is payable.** Enrolment is not open yet, and there is no start date.
>
> When a start date is confirmed, I'll email you the full course details. You can then decide whether to join. If you'd rather leave the waitlist, just reply "remove me".
>
> We use your email only to answer your request, and delete it by hand 12 months after our last contact.
>
> Viele Grüße
> Reegan Gandhi · Klarweg

### Template 3 — course information (only after a start date is approved and the course is published)

> **Subject:** Beginner German · A1 starts on [approved start date]: course details
>
> Hallo [first name],
>
> The next live A1 batch has a confirmed start date. These are the full course terms:
> - **Teacher:** Reegan Gandhi (explanations in Hindi and English)
> - **Level and format:** A1 group batch, 4–8 learners. The batch runs only if at least 4 learners enrol.
> - **Dates:** [first class date] to [last class date]: Mon, Wed and Fri, 7:30–9:00 pm IST, 36 classes of 90 minutes (54 hours). [Replacement dates for public holidays, if any.]
> - **Platform:** Google Meet. Classes are not recorded.
> - **Materials:** class notes, PDF worksheets, homework with written feedback.
> - **Exam:** preparation for Goethe-Zertifikat A1: Start Deutsch 1. The exam fee is not included, and you book the exam yourself.
> - **Fee:** ₹7,999. Pay the full amount before the first class, or in two instalments: ₹4,000 before the start and ₹3,999 before week 7. [If a consultation adjustment applies: apply it as the published terms set out.]
> - **Policies:** missed classes, cancellations and refunds, scheduling, and what the fee includes are set out in [link to the published terms].
>
> To take a place, reply "I'd like to join" and tell me whether you'll pay in full or in instalments. I'll then send a payment request. Your place is confirmed once your payment is received.
>
> Viele Grüße
> Reegan Gandhi · Klarweg

### Template 4 — payment request (manual UPI or bank transfer)

> **Subject:** Payment request: Beginner German · A1, [batch start date]
>
> Hallo [first name],
>
> Thank you for choosing to join. To take your place, please pay:
> - **Amount:** ₹[amount due]. This is [the full fee of ₹7,999 / the first instalment of ₹4,000 / the second instalment of ₹3,999] [less any consultation adjustment that applies under the published terms].
> - **Due by:** [date: before the first class, or before week 7].
> - **UPI ID:** [Klarweg's UPI ID] — **or bank transfer:** [account name, account number, IFSC]
> - **Reference:** please write "A1 [batch] [your first name]" in the payment note.
>
> Your place is confirmed only once the payment shows in our account. I'll email you then. Please don't send screenshots of your UPI PIN or bank login. A payment reference is all I need.
>
> Viele Grüße
> Reegan Gandhi · Klarweg

### Template 5 — place confirmation (only after the payment is verified on the bank or UPI statement)

> **Subject:** Your place is confirmed: Beginner German · A1, [batch start date]
>
> Hallo [first name],
>
> I've received your payment of ₹[amount received] (reference [transaction reference]) on [date]. **Your place in the A1 batch starting [start date] is confirmed.**
>
> [If paying in instalments: the second instalment of ₹3,999 is due by [date]. I'll send a reminder.]
> [Receipt or invoice, as the accountant advises.]
>
> I'll send the joining details and a short preparation note a few days before the first class.
>
> Viele Grüße
> Reegan Gandhi · Klarweg

### Template 6 — joining and preparation (2–3 days before S1, to confirmed learners only)

> **Subject:** Ready for Monday? Joining details for Beginner German · A1
>
> Hallo [first name],
>
> Our first class is on **[day, date] at 7:30 pm IST**.
> - **Join:** [Google Meet link: insert the real link only when sending]
> - **Please have:** a notebook, a pen, and headphones with a microphone.
> - **Before class (optional, 10 minutes):** listen to the German alphabet in Chapter 1 of the Klarweg A1 course, which is free to try.
> - **How classes run:** they are not recorded. You'll get class notes and homework after each class, and written feedback on your homework.
> - **If you can't come:** reply to this email. You'll get the notes and homework so you can catch up.
>
> Bis Montag!
> Reegan Gandhi · Klarweg

### Template 7 — missed-class catch-up

> **Subject:** Catch-up for [session title], [date]
>
> Hallo [first name],
>
> We missed you today. Attached are the class notes and the worksheet with answers. Today's points:
> 1. [main point]
> 2. [main point]
> 3. [main point]
>
> **Homework:** [task], due [day, time]. Bring any questions to the start of the next class on [day].
>
> Viele Grüße
> Reegan Gandhi

### Template 8 — homework feedback

> **Subject:** Feedback: [homework title]
>
> Hallo [first name],
>
> Thank you for your homework. Here is my feedback:
> - **What went well:** [one specific strength, with an example from their text].
> - **One thing to work on:** [one priority, with the rule in one line].
> - **Please correct:** I've marked [n] places with codes (V = verb, WO = word order, A = article or case, Sp = spelling, Vo = word choice). Try to correct them yourself and send the corrected version back if you like.
> - **Score (practice only):** [rubric points]/8.
>
> Weiter so!
> Reegan Gandhi

### Template 9 — course completion

> **Subject:** Herzlichen Glückwunsch: you've completed Beginner German · A1
>
> Hallo [first name],
>
> You've completed the Klarweg live A1 course: [n] of 36 classes attended. Attached is your readiness review across Hören, Lesen, Schreiben and Sprechen, with what to practise next.
>
> **About the exam:** if you'd like to take Goethe-Zertifikat A1: Start Deutsch 1, you book it directly with a Goethe-Institut or exam centre (the fee isn't included in the course). My recommendation, based on our practice tests, is: [practise these areas before booking / ready to book when you feel confident]. This is advice, not a prediction of a result.
>
> Thank you for learning with Klarweg. Viel Erfolg!
> Reegan Gandhi · Klarweg
