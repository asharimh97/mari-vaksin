const rp = require("request-promise");

const { VICTORI_URL } = require("../../lib/constants");
const { parseData, parseOptions } = require("../../utils/parser");

const API_URL = `${VICTORI_URL}/info`;

const requestData = async (date) => {
  const dateParams = date ? `?tanggal=${date}` : "";
  const data = await rp(`${API_URL}${dateParams}`);

  return data || null;
};

export default async function handler(req, res) {
  // get today's data
  let initialData = await requestData("04-01-2022");

  // successfully scrape the data
  if (initialData) {
    let data = parseData(initialData);
    const options = parseOptions(initialData);
    const response = {
      data,
      available_dates: options,
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
