const cleanString = (str) => {
  return String(str)
    .trim()
    .replace(/[\r\n]+/g, " ");
};

export { cleanString };
