const { countryList } = require("./countryList");
const { categoryList, sortList } = require("./constant");

module.exports.isValidCountry = (countryCode) => {
  if (countryCode) {
    return countryList.some(
      (val) => val.code.toLowerCase() === countryCode.toLowerCase()
    );
  }
  return false;
};

module.exports.isValidCategory = (category) => {
  if (category) {
    return categoryList.includes(category.toLowerCase());
  }
  return false;
};

module.exports.isValidSort = (category) => {
  if (category) {
    return sortList.includes(category.toLowerCase());
  }
  return false;
};
