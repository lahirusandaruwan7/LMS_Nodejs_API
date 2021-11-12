const MEMBERS = require('../data/Member_data');

let members = MEMBERS;

const getAllMembers = () => {
    return members;
};

module.exports = {getAllMembers};