const { categoryList } = require("../utils/constant");

const getCategoryList = () => {
  try {
    return categoryList;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  getCategoryList,
};
