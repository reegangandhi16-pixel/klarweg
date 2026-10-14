/* Registry of the SYNTHETIC B1 PRACTICE library (original Klarweg practice, not official exam content). P1 and P2 are
   hand-built (make-practice-form.mjs, make-practice-form-p2.mjs); P3 onwards use buildPracticeForm (practice-lib.mjs).
   make-synthetic-form.mjs registers every entry in SYNTHETIC_FORMS, so check-public-boundary.mjs byte-checks it. */
import { PRACTICE_FORM } from './make-practice-form.mjs';
import { PRACTICE_FORM_P2 } from './make-practice-form-p2.mjs';
import { PRACTICE_FORM_P3 } from './make-practice-form-p3.mjs';
import { PRACTICE_FORM_P4 } from './make-practice-form-p4.mjs';
import { PRACTICE_FORM_P5 } from './make-practice-form-p5.mjs';
import { PRACTICE_FORM_P6 } from './make-practice-form-p6.mjs';
import { PRACTICE_FORM_P7 } from './make-practice-form-p7.mjs';
import { PRACTICE_FORM_P8 } from './make-practice-form-p8.mjs';
import { PRACTICE_FORM_P9 } from './make-practice-form-p9.mjs';
import { PRACTICE_FORM_P10 } from './make-practice-form-p10.mjs';

export const PRACTICE_FORMS = [
  ['P1', PRACTICE_FORM], ['P2', PRACTICE_FORM_P2], ['P3', PRACTICE_FORM_P3], ['P4', PRACTICE_FORM_P4], ['P5', PRACTICE_FORM_P5],
  ['P6', PRACTICE_FORM_P6], ['P7', PRACTICE_FORM_P7], ['P8', PRACTICE_FORM_P8], ['P9', PRACTICE_FORM_P9],
  ['P10', PRACTICE_FORM_P10]
].map(([name, f]) => ({ name, ...f }));
