module.exports = function parseStringAsArray(arrayAsString) {
  console.log(arrayAsString);
  return arrayAsString.split(",").map(item => arrayAsString.trim());
};
