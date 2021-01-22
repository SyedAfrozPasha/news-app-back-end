const {
  isValidCountry,
  isValidCategory,
  isValidSort,
} = require("../utils/helper");

module.exports.topHeadlineValidation = {
  q: {
    in: ["params", "query"],
  },
  country: {
    in: ["params", "query"],
    custom: {
      options: (value) => {
        if (value && !isValidCountry(value)) {
          throw new Error("Not a valid country");
        }
        return true;
      },
    },
  },
  sources: {
    in: ["params", "query"],
  },
  category: {
    in: ["params", "query"],
    custom: {
      options: (value) => {
        if (value && !isValidCategory(value)) {
          throw new Error("Not a valid country");
        }
        return true;
      },
    },
  },
};

module.exports.allNewsValidation = {
  q: {
    in: ["params", "query"],
  },
  // toDate: {
  //   in: ["params", "query"],
  //   isDate: {
  //     errorMessage: "Not a valid date",
  //   },
  // },
  // fromDate: {
  //   in: ["params", "query"],
  //   isDate: {
  //     errorMessage: "Not a valid date",
  //   },
  // },
  sortBy: {
    in: ["params", "query"],
    custom: {
      options: (value) => {
        if (value && !isValidSort(value)) {
          throw new Error("Not a valid sort option");
        }
        return true;
      },
    },
  },
};
