// 伙伴配对逻辑示例
exports.findPartner = async (req, res) => {
  // 假设：根据兴趣领域/专业方向进行简单随机配对
  const { userId, interests } = req.body;
  // ...查询数据库，找到合适伙伴
  // 返回伙伴信息
  res.json({ partnerId: "user123", name: "小李", interests: ["暖通", "CFD"] });
};

exports.getPartnerInfo = async (req, res) => {
  // 返回当前用户的已配对伙伴信息
  res.json({ partnerId: "user123", name: "小李", interests: ["暖通", "CFD"] });
};