var express = require("express");
var router = express.Router();
var multer = require("multer");

var storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

/* GET users listing. */
router.post("/file", upload.any(), function(req, res, next) {
  res.send("Files updated!");
});

module.exports = router;
