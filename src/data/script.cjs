const fs = require("fs");
const path = require("path");


// ============================================================
// FILE CONFIGURATION
// ============================================================

const FILE = path.join(__dirname, "productsData.js");

const BACKUP = path.join(
  __dirname,
  "productsData.before-switch-fix.js"
);


// ============================================================
// CHECK FILE
// ============================================================

if (!fs.existsSync(FILE)) {
  console.error("\n❌ productsData.js was not found.");
  console.error(`Expected location:\n${FILE}\n`);
  process.exit(1);
}

let content = fs.readFileSync(FILE, "utf8");

console.log("\n==========================================");
console.log(" OTTOCLICK PRODUCT DATA UPDATER");
console.log("==========================================");
console.log("\nTarget file:");
console.log(FILE);


// ============================================================
// CREATE BACKUP
// ============================================================

if (!fs.existsSync(BACKUP)) {
  fs.writeFileSync(BACKUP, content, "utf8");

  console.log(
    `\n✅ Backup created: ${path.basename(BACKUP)}`
  );
} else {
  console.log(
    `\nℹ️ Backup already exists: ${path.basename(BACKUP)}`
  );
}


// ============================================================
// CATALOGUE CORRECTIONS
// ============================================================

const corrections = {

  // ==========================================================
  // LUXE SERIES
  // ==========================================================

  "LSW/Z-2M-2S": {
    title: "Luxe Series : 2 Gang Switch",
    description: "Luxe Series 2 Gang Switch.",

    specs: {
      "Plate Size": "2 Module",
      "Touch Gangs": "2",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "2 Module",
      "2 Touch Gangs",
      "Tempered Glass"
    ]
  },


  "LSW/Z-4M-4S": {
    title: "Luxe Series : 4 Gang Switch",
    description: "Luxe Series 4 Gang Switch.",

    specs: {
      "Plate Size": "4 Module",
      "Touch Gangs": "4",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "4 Module",
      "4 Touch Gangs",
      "Tempered Glass"
    ]
  },


  "LSW/Z-4M-2S1U": {
    title: "Luxe Series : 2 Gang + 1 Socket",
    description: "Luxe Series 2 Gang + 1 Socket.",

    specs: {
      "Plate Size": "4 Module",
      "Touch Gangs": "2",
      "Sockets": "1 Universal Socket",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "4 Module",
      "2 Touch Gangs",
      "1 Universal Socket"
    ]
  },


  // ----------------------------------------------------------
  // VERY IMPORTANT:
  // 6M-8S = 6 GANG
  // ----------------------------------------------------------

  "LSW/Z-6M-8S": {
    title: "Luxe Series : 6 Gang Switch",
    description: "Luxe Series 6 Gang Switch.",

    specs: {
      "Plate Size": "6 Module",
      "Touch Gangs": "6",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "6 Module",
      "6 Touch Gangs",
      "Tempered Glass"
    ]
  },


  "LSW/Z-8M-8S": {
    title: "Luxe Series : 8 Gang Switch",
    description: "Luxe Series 8 Gang Switch.",

    specs: {
      "Plate Size": "8 Module",
      "Touch Gangs": "8",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "8 Module",
      "8 Touch Gangs",
      "Tempered Glass"
    ]
  },


  "LSW/Z-6M-2S2U": {
    title: "Luxe Series : 2 Gang + 2 Socket",
    description: "Luxe Series 2 Gang + 2 Socket.",

    specs: {
      "Plate Size": "6 Module",
      "Touch Gangs": "2",
      "Sockets": "2 Universal Sockets",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "6 Module",
      "2 Touch Gangs",
      "2 Universal Sockets"
    ]
  },


  "LSW/Z-12M-12S2F": {
    title: "Luxe Series : 12 Gang + 2 Fan",
    description: "Luxe Series 12 Gang + 2 Fan.",

    specs: {
      "Plate Size": "12 Module",
      "Touch Gangs": "12",
      "Fan Controls": "2",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "12 Module",
      "12 Touch Gangs",
      "2 Fan Controls"
    ]
  },


  "LSW/Z-12M-8S1F2U": {
    title: "Luxe Series : 8 Gang + 1 Fan + 2 Socket",
    description: "Luxe Series 8 Gang + 1 Fan + 2 Socket.",

    specs: {
      "Plate Size": "12 Module",
      "Touch Gangs": "8",
      "Fan Controls": "1",
      "Sockets": "2 Universal Sockets",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "12 Module",
      "8 Touch Gangs",
      "1 Fan + 2 Universal Sockets"
    ]
  },


  // ==========================================================
  // AURA SERIES
  // ==========================================================

  "ASW/Z-2M-2S": {
    title: "Aura Series : 2 Gang Switch",
    description: "Aura Series 2 Gang Switch.",

    specs: {
      "Plate Size": "2 Module",
      "Touch Gangs": "2",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "2 Module",
      "2 Touch Gangs",
      "Tempered Glass"
    ]
  },


  "ASW/Z-4M-4S": {
    title: "Aura Series : 4 Gang Switch",
    description: "Aura Series 4 Gang Switch.",

    specs: {
      "Plate Size": "4 Module",
      "Touch Gangs": "4",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "4 Module",
      "4 Touch Gangs",
      "Tempered Glass"
    ]
  },


  "ASW/Z-4M-2S1U": {
    title: "Aura Series : 2 Gang + 1 Socket",
    description: "Aura Series 2 Gang + 1 Socket.",

    specs: {
      "Plate Size": "4 Module",
      "Touch Gangs": "2",
      "Sockets": "1 Universal Socket",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "4 Module",
      "2 Touch Gangs",
      "1 Universal Socket"
    ]
  },


  // ----------------------------------------------------------
  // VERY IMPORTANT:
  // 6M-8S = 6 GANG
  // ----------------------------------------------------------

  "ASW/Z-6M-8S": {
    title: "Aura Series : 6 Gang Switch",
    description: "Aura Series 6 Gang Switch.",

    specs: {
      "Plate Size": "6 Module",
      "Touch Gangs": "6",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "6 Module",
      "6 Touch Gangs",
      "Tempered Glass"
    ]
  },


  "ASW/Z-8M-8S": {
    title: "Aura Series : 8 Gang Switch",
    description: "Aura Series 8 Gang Switch.",

    specs: {
      "Plate Size": "8 Module",
      "Touch Gangs": "8",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "8 Module",
      "8 Touch Gangs",
      "Tempered Glass"
    ]
  },


  "ASW/Z-6M-2S2U": {
    title: "Aura Series : 2 Gang + 2 Socket",
    description: "Aura Series 2 Gang + 2 Socket.",

    specs: {
      "Plate Size": "6 Module",
      "Touch Gangs": "2",
      "Sockets": "2 Universal Sockets",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "6 Module",
      "2 Touch Gangs",
      "2 Universal Sockets"
    ]
  },


  "ASW/Z-12M-12S2F": {
    title: "Aura Series : 12 Gang + 2 Fan",
    description: "Aura Series 12 Gang + 2 Fan.",

    specs: {
      "Plate Size": "12 Module",
      "Touch Gangs": "12",
      "Fan Controls": "2",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "12 Module",
      "12 Touch Gangs",
      "2 Fan Controls"
    ]
  },


  "ASW/Z-12M-8S1F2U": {
    title: "Aura Series : 8 Gang + 1 Fan + 2 Socket",
    description: "Aura Series 8 Gang + 1 Fan + 2 Socket.",

    specs: {
      "Plate Size": "12 Module",
      "Touch Gangs": "8",
      "Fan Controls": "1",
      "Sockets": "2 Universal Sockets",
      "Panel Material": "Tempered Glass"
    },

    quickSpecs: [
      "12 Module",
      "8 Touch Gangs",
      "1 Fan + 2 Universal Sockets"
    ]
  }
};


// ============================================================
// PARSE JAVASCRIPT OBJECTS SAFELY
// ============================================================

function findObjectContainingModel(text, model, fromIndex) {

  const modelIndex = text.indexOf(model, fromIndex);

  if (modelIndex === -1) {
    return null;
  }

  // Search backwards for an opening {
  let start = modelIndex;

  while (start >= 0 && text[start] !== "{") {
    start--;
  }

  if (start < 0) {
    return null;
  }

  let depth = 0;
  let inString = false;
  let quote = null;
  let escaped = false;

  for (let i = start; i < text.length; i++) {

    const ch = text[i];

    // -------------------------
    // Inside string
    // -------------------------

    if (inString) {

      if (escaped) {
        escaped = false;
        continue;
      }

      if (ch === "\\") {
        escaped = true;
        continue;
      }

      if (ch === quote) {
        inString = false;
        quote = null;
      }

      continue;
    }


    // -------------------------
    // Start of string
    // -------------------------

    if (
      ch === '"' ||
      ch === "'" ||
      ch === "`"
    ) {
      inString = true;
      quote = ch;
      continue;
    }


    // -------------------------
    // Braces
    // -------------------------

    if (ch === "{") {
      depth++;
    }

    if (ch === "}") {

      depth--;

      if (depth === 0) {

        const object = text.slice(
          start,
          i + 1
        );

        return {
          start,
          end: i + 1,
          object
        };
      }
    }
  }

  return null;
}


// ============================================================
// FIND PROPERTY
// ============================================================

function findPropertyRange(object, property) {

  const regex = new RegExp(
    `(^|[\\n,])([ \\t]*)${property}\\s*:`,
    "m"
  );

  const match = regex.exec(object);

  if (!match) {
    return null;
  }

  const propertyStart =
    match.index +
    match[1].length;

  let valueStart =
    match.index +
    match[0].length;

  while (
    valueStart < object.length &&
    /\s/.test(object[valueStart])
  ) {
    valueStart++;
  }

  const firstChar =
    object[valueStart];


  // ==========================================================
  // STRING
  // ==========================================================

  if (
    firstChar === '"' ||
    firstChar === "'" ||
    firstChar === "`"
  ) {

    const quote = firstChar;

    let escaped = false;

    for (
      let i = valueStart + 1;
      i < object.length;
      i++
    ) {

      const ch = object[i];

      if (escaped) {
        escaped = false;
        continue;
      }

      if (ch === "\\") {
        escaped = true;
        continue;
      }

      if (ch === quote) {

        return {
          start: propertyStart,
          end: i + 1
        };
      }
    }
  }


  // ==========================================================
  // OBJECT OR ARRAY
  // ==========================================================

  if (
    firstChar === "{" ||
    firstChar === "["
  ) {

    const open =
      firstChar;

    const close =
      firstChar === "{"
        ? "}"
        : "]";

    let depth = 0;
    let inString = false;
    let quote = null;
    let escaped = false;

    for (
      let i = valueStart;
      i < object.length;
      i++
    ) {

      const ch = object[i];

      if (inString) {

        if (escaped) {
          escaped = false;
          continue;
        }

        if (ch === "\\") {
          escaped = true;
          continue;
        }

        if (ch === quote) {
          inString = false;
          quote = null;
        }

        continue;
      }

      if (
        ch === '"' ||
        ch === "'" ||
        ch === "`"
      ) {

        inString = true;
        quote = ch;
        continue;
      }

      if (ch === open) {
        depth++;
      }

      if (ch === close) {

        depth--;

        if (depth === 0) {

          return {
            start: propertyStart,
            end: i + 1
          };
        }
      }
    }
  }


  // ==========================================================
  // NUMBER / BOOLEAN / SIMPLE VALUE
  // ==========================================================

  let end = valueStart;

  while (
    end < object.length &&
    object[end] !== "," &&
    object[end] !== "\n"
  ) {
    end++;
  }

  return {
    start: propertyStart,
    end
  };
}


// ============================================================
// REPLACE EXISTING PROPERTY
// ============================================================

function replaceProperty(
  object,
  property,
  value
) {

  const range =
    findPropertyRange(
      object,
      property
    );

  if (!range) {
    return null;
  }

  const before =
    object.slice(
      0,
      range.start
    );

  const after =
    object.slice(
      range.end
    );

  return (
    before +
    `${property}: ${JSON.stringify(value, null, 2)}` +
    after
  );
}


// ============================================================
// INSERT PROPERTY
// ============================================================

function insertProperty(
  object,
  property,
  value
) {

  const close =
    object.lastIndexOf("}");

  if (close === -1) {
    return object;
  }

  let before =
    object.slice(
      0,
      close
    ).trimEnd();

  if (!before.endsWith(",")) {
    before += ",";
  }

  const after =
    object.slice(
      close
    );

  return (
    before +
    `\n  ${property}: ${JSON.stringify(value, null, 2)}\n` +
    after
  );
}


// ============================================================
// SET PROPERTY
// ============================================================

function setProperty(
  object,
  property,
  value
) {

  const replaced =
    replaceProperty(
      object,
      property,
      value
    );

  if (replaced !== null) {
    return replaced;
  }

  return insertProperty(
    object,
    property,
    value
  );
}


// ============================================================
// UPDATE PRODUCT
// ============================================================

function updateProduct(
  object,
  data
) {

  let updated =
    object;


  // TITLE
  updated =
    setProperty(
      updated,
      "title",
      data.title
    );


  // NAME
  // Some product files may use "name"
  if (
    /\bname\s*:/.test(updated)
  ) {

    updated =
      setProperty(
        updated,
        "name",
        data.title
      );
  }


  // DESCRIPTION
  updated =
    setProperty(
      updated,
      "description",
      data.description
    );


  // SHORT DESCRIPTION
  // Keep it synchronized when present.
  if (
    /\bshortDesc\s*:/.test(updated)
  ) {

    updated =
      setProperty(
        updated,
        "shortDesc",
        data.description
      );
  }


  // SPECS
  updated =
    setProperty(
      updated,
      "specs",
      data.specs
    );


  // QUICK SPECS
  updated =
    setProperty(
      updated,
      "quickSpecs",
      data.quickSpecs
    );


  return updated;
}


// ============================================================
// UPDATE EVERY OCCURRENCE
// ============================================================

let totalUpdated = 0;

const results = [];

for (
  const [model, data]
  of Object.entries(corrections)
) {

  let searchFrom = 0;
  let occurrences = 0;

  while (true) {

    const found =
      findObjectContainingModel(
        content,
        model,
        searchFrom
      );

    if (!found) {
      break;
    }


    // Safety check:
    // make sure this really is an object
    // containing the exact model.
    if (
      !found.object.includes(model)
    ) {

      searchFrom =
        found.end;

      continue;
    }


    const oldObject =
      found.object;


    const newObject =
      updateProduct(
        oldObject,
        data
      );


    content =
      content.slice(
        0,
        found.start
      ) +
      newObject +
      content.slice(
        found.end
      );


    occurrences++;
    totalUpdated++;


    searchFrom =
      found.start +
      newObject.length;
  }


  results.push({
    model,
    title: data.title,
    occurrences
  });
}


// ============================================================
// SAVE FILE
// ============================================================

if (totalUpdated === 0) {

  console.log(
    "\n❌ No products were updated."
  );

} else {

  fs.writeFileSync(
    FILE,
    content,
    "utf8"
  );


  console.log(
    "\n=========================================="
  );

  console.log(
    "✅ productsData.js UPDATED SUCCESSFULLY"
  );

  console.log(
    "=========================================="
  );

  console.log(
    `Total objects updated: ${totalUpdated}`
  );

  console.log(
    `Backup: ${path.basename(BACKUP)}`
  );
}


// ============================================================
// REPORT
// ============================================================

console.log(
  "\n------------------------------------------"
);

console.log(
  "UPDATE REPORT"
);

console.log(
  "------------------------------------------\n"
);


for (const result of results) {

  if (result.occurrences > 0) {

    console.log(
      `✅ ${result.model}`
    );

    console.log(
      `   ${result.title}`
    );

    console.log(
      `   Occurrences updated: ${result.occurrences}\n`
    );

  } else {

    console.log(
      `❌ NOT FOUND: ${result.model}\n`
    );
  }
}


// ============================================================
// FINAL SANITY CHECK
// ============================================================

console.log(
  "------------------------------------------"
);

console.log(
  "SANITY CHECK"
);

console.log(
  "------------------------------------------\n"
);


for (
  const [model, data]
  of Object.entries(corrections)
) {

  const index =
    content.indexOf(model);

  if (index === -1) {
    continue;
  }

  const found =
    findObjectContainingModel(
      content,
      model,
      index
    );

  if (!found) {
    continue;
  }


  const titleCorrect =
    found.object.includes(
      data.title
    );

  const quickSpecCorrect =
    found.object.includes(
      JSON.stringify(
        data.quickSpecs,
        null,
        2
      )
    );


  if (
    titleCorrect &&
    quickSpecCorrect
  ) {

    console.log(
      `✅ ${model} verified`
    );

  } else {

    console.log(
      `⚠️ ${model} needs inspection`
    );
  }
}


console.log(
  "\n✅ Script finished."
);