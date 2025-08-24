const express = require("express");
const router = express.Router();
const { findPartner, getPartnerInfo } = require("../controllers/partnerController");

// 匹配学习伙伴
router.post("/match", findPartner);

// 获取当前伙伴信息
router.get("/current", getPartnerInfo);

module.exports = router;