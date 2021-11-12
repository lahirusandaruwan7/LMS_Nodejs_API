const router = require("express").Router();
const memberService = require("../services/Member_service");

router.get("", (req, res) => {
    res.send(memberService.getAllMembers());
  });

module.exports = router;