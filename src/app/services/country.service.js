const { countryList } = require("../utils/countryList");

const getCountryList = () => {
  try {
    return countryList;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  getCountryList,
};
