const Router = require("express/lib/router");
const router = Router();

// Service
const countryService = require("../services/country.service");

router.get("/getCountryList", (req, res) => {
  try {
    const countryList = countryService.getCountryList();
    res.status(200).json(countryList);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
