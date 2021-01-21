const Router = require("express/lib/router");
const { checkSchema, validationResult } = require("express-validator");
const router = Router();

const {
  topHeadlineValidation,
  allNewsValidation,
} = require("../utils/validationSchema");

// Service
const newsService = require("../services/news.service");

router.get(
  "/top-headlines",
  checkSchema(topHeadlineValidation),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const news = await newsService.getTopHeadlines(req.query);
      if (news && news.data && news.data.status === "ok") {
        res.status(200).json(news.data);
      } else {
        res.status(200).json({});
      }
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
);

router.get("/getAllNews", checkSchema(allNewsValidation), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const news = await newsService.getAllNewsContent(req.query);
    if (news && news.data && news.data.status === "ok") {
      res.status(200).json(news.data);
    } else {
      res.status(200).json({});
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
