"use strict";
const fsP = require("fs/promises");
SCRIPT_VARIABLE = process.argv[2];

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

/** reads contents in response from URL request and prints */
async function webCat(url) {
  try{
  response = await fetch(url);
  urlData = await response.text();

  console.log(urlData);
  } catch (err) {
    console.error(err);
    process.exit(1);
    }
}


// call webCat on URL or cat if not
if (URL.canParse(SCRIPT_VARIABLE)) {
  webCat(SCRIPT_VARIABLE);
} else {
  cat(SCRIPT_VARIABLE);
}
