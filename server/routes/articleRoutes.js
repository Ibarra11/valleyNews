const express = require("express");
const router = express.Router();

const {
  getArticles,
  getArticleById,
  getArticleDetails,
  getArticlesByCategory,
  getArticlesBySubcategory,
  getArticleUrls,
  createArticles,
  createNewArticles,
  articleClicked,
  getArticleClickCount,
  getArticlesByBusiness,
  deleteArticle,
  editArticle,
} = require("../controllers/articleControllers");

router.post("/", createArticles);
router.get("/", getArticles);
router.get("/business/:businessId", getArticlesByBusiness);
router.get("/article_id/:id", getArticleById);
router.get("/clicked/:articleId", articleClicked);
router.get("/click_amount/:id", getArticleClickCount);
router.get("/urls", getArticleUrls);
router.get("/details", getArticleDetails);
router.get("/:category", getArticlesByCategory);
router.get("/:category/:subcategory", getArticlesBySubcategory);
router.get("/:category/:subcategory/:id", getArticleById);
router.delete("/delete/:articleId", deleteArticle);
router.put("/edit/:articleId", editArticle);

module.exports = router;
