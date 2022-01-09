const cheerio = require("cheerio");
const { cleanString } = require("./general");

/**
 *
 * @param {*} htmlData - HTML data from scraping
 * @returns {Array<*>} - Parsed vaccine data
 */

const parseData = (htmlData) => {
  const $ = cheerio.load(htmlData);
  const allData = $("tr");

  const parsedData = [];
  allData.map((i, el) => {
    if (i !== 0) {
      const parsed = el.children
        .filter((col) => col.type === "tag")
        .map(
          (col) =>
            col.children && col.children[0] && cleanString(col.children[0].data)
        );
      // console.log(parsed)
      parsedData.push(parsed.join());
    }
  });

  return parsedData;
};

/**
 *
 * @param {*} htmlData - HTML data from scraping
 * @returns {Array<String>} - Parsed date options
 */
const parseOptions = (htmlData) => {
  const $ = cheerio.load(htmlData);
  const allData = $("option");

  const parsedData = [];
  allData.map((i, el) => {
    parsedData.push(el.children.length > 0 && el.children[0].data);
  });

  return parsedData.filter((item) => item);
};

const parseSwabData = (htmlData) => {
  const $ = cheerio.load(htmlData);

  const allData = $("div.card-body");

  return allData;
};

export { parseData, parseOptions, parseSwabData };
