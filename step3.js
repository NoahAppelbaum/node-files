"use strict";
const fsP = require("fs/promises");
let SCRIPT_VARIABLE = process.argv[2];
let FILENAME_VARIABLE;

/** cat: reads file from path and prints contents */
async function cat(path) {
  let contents;
  try {
    contents = await fsP.readFile(path, "utf8");
    // console.log(contents);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  return contents;
}

/** reads contents in response from URL request and prints */
async function webCat(url) {
  let response;
  try{
  response = await fetch(url);

  // console.log(urlData);
} catch (err) {
  console.error(err);
  process.exit(1);
}
  const urlData = await response.text();
  return urlData;
}

function checkArgs() {
  if (process.argv.includes('--out')) {
    FILENAME_VARIABLE = process.argv[3];
    SCRIPT_VARIABLE = process.argv[4];
    return true;
  }
  return false;
}

async function writeToFile(SCRIPT_VARIABLE, FILENAME_VARIABLE) {
  await fsP.writeFile(webCat(SCRIPT_VARIABLE), FILENAME_VARIABLE);
}





// call webCat on URL or cat if not

const willWriteToFile = checkArgs();


if (URL.canParse(SCRIPT_VARIABLE)) {
  if (willWriteToFile) {
    fsP.writeFile(webCat(SCRIPT_VARIABLE), FILENAME_VARIABLE);
  } else {
    console.log(webCat(SCRIPT_VARIABLE));
  }
} else {
  if (willWriteToFile) {
    fsP.writeFile(cat(SCRIPT_VARIABLE), FILENAME_VARIABLE);
  } else {
    console.log(cat(SCRIPT_VARIABLE));
  }
}