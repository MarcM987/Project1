const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let countries = [];
try {
  const data = fs.readFileSync("./countries.html", { encoding: "utf-8" });
  const dom = new JSDOM(data);
  countries = Array.from(dom.window.document.querySelectorAll("li")).map(
    ({ textContent }) => textContent
  );
  console.dir(countries, { maxArrayLength: null });
} catch (error) {
    console.warn('Error: ', error.toString);
}
module.exports = { countries };