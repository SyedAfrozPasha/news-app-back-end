const axios = require("axios");

const getTopHeadlines = async ({ q, country, sources, category }) => {
  try {
    let url = `${process.env.NEWS_BASE_URL}/top-headlines?apiKey=${process.env.NEWS_API_KEY}`;

    if (q) {
      url += `&q=${q}`;
    }

    if (country) {
      url += `&country=${country}`;
    }

    if (sources) {
      url += `&sources=${sources}`;
    }

    if (category) {
      url += `&category=${category}`;
    }

    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

const getAllNewsContent = async ({ q, toDate, fromDate, sortBy }) => {
  try {
    let url = `${process.env.NEWS_BASE_URL}/everything?apiKey=${process.env.NEWS_API_KEY}`;

    if (q) {
      url += `&q=${q}`;
    }

    if (toDate) {
      url += `&to=${toDate}`;
    }

    if (fromDate) {
      url += `&from=${fromDate}`;
    }

    if (sortBy) {
      url += `&sortBy=${sortBy}`;
    }

    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getTopHeadlines,
  getAllNewsContent,
};
