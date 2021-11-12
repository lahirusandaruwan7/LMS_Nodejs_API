const router = require("express").Router();
const memberService = require("../services/Member_service");

// View all Members
router.get("", (req, res) => {
  res.send(memberService.getAllMembers());
});
// View single member
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(memberService.getMember(id));
});
// Add Member
router.post("",(req,res)=>{
  const nic = req.body.nic;
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const contactNumber = req.body.contactNumber;
  const address = req.body.address;
  const userType = req.body.userType;
  res.send(memberService.addMember(nic,firstName,middleName,lastName,contactNumber,address,userType));
});
// Edit Member
router.put("/:id",(req,res)=>{
  const id = req.params.id;
  const nic = req.body.nic;
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const contactNumber = req.body.contactNumber;
  const address = req.body.address;
  const userType = req.body.userType;
  res.send(memberService.editMember(id,nic,firstName,middleName,lastName,contactNumber,address,userType));
});

//Delete Member
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(memberService.deleteMember(id));
});

module.exports = router;
