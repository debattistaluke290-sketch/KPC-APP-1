/* =========================================================================
   Server-side copy of the topic → KPC notes page map + subject collection URLs.
   Keyed by report.subject (the module SUBJECT value — note O-Level Maths is
   "Mathematics", not "Maths"). Used by the Mailgun results email (_mailgun.js).

   ⚠️  The BROWSER keeps its own copy in public/index.html (NOTES_PAGES /
   KPC_CONFIG.subjectCollections, keyed by the home-button name). If you
   re-paginate a note pack / workbook or change a collection URL, update BOTH.
   ========================================================================= */
export const NOTES_PAGES = {
  "Physics": {
    "Motion & Forces":"pp. 19–31", "Forces, Moments & Pressure":"pp. 38–44", "Energy, Work & Power":"pp. 45–48",
    "Thermal Physics":"pp. 49–61", "Waves & Sound":"pp. 72–82", "Light & Optics":"pp. 85–97",
    "Electricity & Circuits":"pp. 98–120", "Magnetism & Electromagnetism":"pp. 121–140",
    "Radioactivity":"pp. 141–154", "Earth & Space":"pp. 62–71"
  },
  "Mathematics": {
    "The Number System":"pp. 6–28", "Numerical Calculations":"pp. 29–52", "Fundamentals of Algebra":"pp. 63–97",
    "Graphs":"pp. 98–119", "Measurement":"pp. 162–188", "Lines, Angles & Shapes":"pp. 120–143 & 189–207",
    "Constructions & Loci":"pp. 208–224", "Transformations":"pp. 225–242", "Statistics":"pp. 243–266",
    "Probability":"pp. 267–281"
  },
  "Chemistry": {
    "Atomic Structure & Periodic Table":"pp. 13–22", "Bonding & Structure":"pp. 23–36",
    "The Mole & Stoichiometry":"pp. 117–127", "Acids, Bases & Salts":"pp. 67–78", "Rates of Reaction":"pp. 128–134",
    "Energetics":"pp. 142–148", "Redox & Electrolysis":"pp. 79–86", "Metals & Reactivity":"pp. 87–107",
    "Organic Chemistry":"pp. 154–167", "Air, Water, Earth & Analysis":"pp. 37–46, 56–66 & 108–116"
  },
  "Biology": {
    "Cells & Transport":"pp. 3–5 & 9–13", "Nutrition, Molecules & Enzymes":"pp. 6–8 & 45–50",
    "Photosynthesis & Plant Transport":"pp. 51–60", "Respiration & Gas Exchange":"pp. 14–23",
    "Circulation in Animals":"pp. 24–30", "Homeostasis & Coordination":"pp. 67–78 & 86–91",
    "Reproduction":"pp. 39–44 & 79–85", "Genetics & Inheritance":"pp. 92–98",
    "Ecology & Human Impact":"pp. 31–38 & 61–66", "Classification, Variation & Evolution":"pp. 99–107"
  },
  "Year 6 Maths": {
    "Place Value & Rounding":"pp. 4–22", "Addition & Subtraction":"pp. 23–42",
    "Multiplication & Division":"pp. 43–71", "Fractions":"pp. 72–99",
    "Ratio & Proportion":"pp. 100–106", "Measures: Length, Weight & Capacity":"pp. 107–121",
    "Perimeter & Area":"pp. 122–132", "Time & Calendar":"pp. 133–148",
    "Shape & Angles":"pp. 149–182", "Statistics & Averages":"pp. 183–193"
  },
  "Year 7 Maths": {
    "Number & Place Value":"pp. 4–7, 27–32 & 72–73", "Factors, Multiples, Primes & Powers":"pp. 8–26",
    "Fractions":"pp. 33–41", "Decimals, Percentages & FDP":"pp. 42–49",
    "Angles":"pp. 50–67", "Symmetry, Polygons & Shapes":"pp. 68–71 & 84–88",
    "Algebra":"pp. 74–83", "Coordinate Geometry & The Circle":"pp. 89–95",
    "Measurement, Area & Volume":"pp. 96–122", "Ratio, Statistics & Probability":"pp. 123–129 & 145–157"
  },
  "Year 8 Maths": {
    "Indices, Powers, Primes & Multiples":"pp. 4–34", "Fractions, Decimals & Percentages":"pp. 35–102",
    "Ratio & Proportion":"pp. 103–134", "Sequences & the nth Term":"pp. 135–152",
    "Algebra":"pp. 153–185", "Straight-Line Graphs":"pp. 186–220",
    "Circles & Angles":"pp. 221–242", "Area, Surface Area & Nets":"pp. 243–278",
    "Transformations":"pp. 279–292", "Statistics & Probability":"pp. 293–323"
  }
};

export const SUBJECT_COLLECTIONS = {
  "Physics":     "https://kpcnotesmt.com/collections/physics-o-level",
  "Mathematics": "https://kpcnotesmt.com/collections/maths-o-level",
  "Chemistry":   "https://kpcnotesmt.com/collections/chemistry-o-level",
  "Biology":     "https://kpcnotesmt.com/collections/biology-o-level",
  "Year 6 Maths":"https://kpcnotesmt.com/collections/year-6",
  "Year 7 Maths":"https://kpcnotesmt.com/collections/year-7",
  "Year 8 Maths":"https://kpcnotesmt.com/collections/year-8"
};

export const pagesFor = (subject, topic) => (NOTES_PAGES[subject] || {})[topic] || "";
export const collectionFor = (subject) =>
  SUBJECT_COLLECTIONS[subject] || "https://kpcnotesmt.com/collections/sec-subjects";
