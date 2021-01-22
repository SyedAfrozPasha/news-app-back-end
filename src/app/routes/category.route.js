const Router = require("express/lib/router");
const router = Router();

// Service
const categoryService = require("../services/category.service");

router.get("/getCategoryList", (req, res) => {
  try {
    const categoryList = categoryService.getCategoryList();
    res.status(200).json(categoryList);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
