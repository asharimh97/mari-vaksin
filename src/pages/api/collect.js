const rp = require("request-promise");
const cheerio = require("cheerio");

const { VICTORI_URL } = require("../../lib/constants");

const API_URL = `${VICTORI_URL}/info`;

const cleanString = (str) => {
  return String(str)
    .trim()
    .replace(/[\r\n]+/g, " ");
};

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

const parseOptions = (htmlData) => {
  const $ = cheerio.load(htmlData);
  const allData = $("option");

  const parsedData = [];
  allData.map((i, el) => {
    parsedData.push(el.children.length > 0 && el.children[0].data);
  });

  return parsedData.filter((item) => item);
};

const requestData = async (date) => {
  const dateParams = date ? `?tanggal=${date}` : "";
  const data = await rp(`${API_URL}${dateParams}`);

  return data || null;
};

export default async function handler(req, res) {
  // get today's data
  let initialData = await requestData();

  // successfully scrape the data
  if (initialData) {
    let data = parseData(initialData);
    const options = parseOptions(initialData);
    const response = {
      data,
    };

    // if there's no schedule today
    // get the first available schedule data
    if (data.length === 0 && options.length > 0) {
      initialData = await requestData(options[0]);
      data = parseData(initialData);

      response.data = data;
      response.date = options[0];
    }

    response.data = response.data.map((item) => {
      const [location, vaccine, dose, start, end, capacity, filled, note] =
        item.split(",");

      return {
        location,
        vaccine,
        dose,
        start,
        end,
        capacity,
        filled,
        note,
      };
    });

    return res.status(200).json(response);
  }

  return res.status(400).json({
    error: "An Error occurred",
  });
}
