const rp = require("request-promise");

const { SIAGA_CORONA_URL } = require("../../lib/constants");
const { parseSwabData } = require("../../utils/parser");

const API_URL = `${SIAGA_CORONA_URL}/kelompokumur`;

const requestData = async () => {
  const data = await rp(API_URL);

  return data || null;
};

export default async function (req, res) {
  let initialData = requestData();

  if (initialData) {
    const data = parseSwabData(initialData);

    console.log(data);

    return res.status(200).json({
      data,
    });
  }

  return res.status(400).json({
    error: "An unexpected error occurred",
  });
}
