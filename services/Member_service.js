const MEMBERS = require("../data/Member_data");

let members = MEMBERS;

const getAllMembers = () => {
  return members;
};
const getMember = (id) => {
  return members.find((element) => element.id === id);
};
const addMember = (
  nic,
  firstName,
  middleName,
  lastName,
  contactNumber,
  address,
  userType
) => {
  const member = {
    id: Math.random().toString(16).slice(2),
    nic,
    firstName,
    middleName,
    lastName,
    contactNumber,
    address,
    userType,
  };
  members.push(member);
  return member;
};
const editMember = (
  id,
  nic,
  firstName,
  middleName,
  lastName,
  contactNumber,
  address,
  userType
) => {
  const memberIndex = members.findIndex((element) => element.id === id);
  members[memberIndex] = {
    ...members[memberIndex],

    nic,
    firstName,
    middleName,
    lastName,
    contactNumber,
    address,
    userType,
  };
  return members[memberIndex];
};

const deleteMember = (id) => {
  members = members.filter((element) => element.id !== id);
  return members;
};

module.exports = {
  getAllMembers,
  getMember,
  addMember,
  editMember,
  deleteMember,
};
