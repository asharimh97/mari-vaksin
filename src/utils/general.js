const cleanString = (str) => {
  return String(str)
    .trim()
    .replace(/[\r\n]+/g, " ");
};

/**
 * Return filtered data by key and parameter
 * @param {Array} listData
 * @param {string} key
 * @param {any} parameter
 * @returns
 */
const filterListData = (listData, key, parameter) => {
  return listData.filter((item) => item[key] === parameter);
};

export { cleanString, filterListData };
