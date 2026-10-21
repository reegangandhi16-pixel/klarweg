/* ============================================================
   SAMPLE DATA · NOT GENUINE REVIEWS
   ------------------------------------------------------------
   Placeholder ratings for previewing the Live Classes design
   locally. These numbers were supplied for layout only (owner,
   2026-10-21). No learner gave them.

   · Loaded only when live-classes-data.js sets
     previewSampleRatings: true AND the page runs on localhost
     (kw-live.js, SAMPLE_PREVIEW). Every rating shown from here is
     flagged "Sample data · preview only".
   · Never published: this file is NOT in .github/pages-allowlist.txt,
     and a static test keeps it out. The live site shows genuine,
     permission-backed reviews (live-classes-data.js reviews[]) or
     "No reviews yet".
   · Counts for the listed teachers are configurable from 20 to 40
     (checked by a test).
   ============================================================ */
window.KWLiveSample = {
  isSampleData: true,
  ratings: {
    'reegan-gandhi': { stars: 4.8, countLabel: '100+' },
    'geetika-dhawan': { stars: 4.8, countLabel: '100+' },
    'priyanshi-verma': { stars: 3.5, count: 24 },
    'sunidhi-jain': { stars: 3.5, count: 31 },
    'mansi-kapoor': { stars: 3.5, count: 27 },
    'gaurav-singhal': { stars: 3.5, count: 36 },
    'kanika-taneja': { stars: 3.5, count: 22 },
    'trisha-khanna': { stars: 3.5, count: 33 },
    'rashi-gupta': { stars: 3.5, count: 29 },
    'deepika-agarwal': { stars: 3.5, count: 38 },
    'sahil-arora': { stars: 3.5, count: 25 }
  }
};
