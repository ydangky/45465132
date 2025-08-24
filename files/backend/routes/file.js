const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// 上传文件
router.post("/upload", upload.single("file"), (req, res) => {
  // 保存上传的文件信息到数据库
  res.json({ url: `/uploads/${req.file.filename}`, filename: req.file.originalname });
});

// 下载文件（静态目录即可）
module.exports = router;