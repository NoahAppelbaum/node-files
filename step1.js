"use strict";
const fsP = require("fs/promises");

/** cat: reads file from path and prints contents */
async function cat(path) {
  try {
    const contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

cat(process.argv[2]);
