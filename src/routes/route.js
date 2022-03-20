const express = require('express');
const router = express.Router();
const authorContoller = require("../controllers/authorController");
const blogControllers = require("../controllers/blogController");
const authentication = require("../middleware/auth");
const authorization = require("../middleware/auth");


router.post("/authors", authorContoller.createAuthor);

router.post("/authorLogIn", blogControllers.authorLogIn);

router.post("/blogs", authentication.authentication, blogControllers.createBlog);

router.get("/getblog", authentication.authentication, blogControllers.getBlogs);

router.put("/updateBlogs/:blogId", authentication.authentication, authorization.authorization, blogControllers.updateBlogs);

router.delete("/deleteBlogs/:blogId", authentication.authentication, authorization.authorization, blogControllers.deleteBlogs);

router.delete("/deleteByQuery", authentication.authentication, authorization.authorization, blogControllers.deleteByQuery);

module.exports = router;