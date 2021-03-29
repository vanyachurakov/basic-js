const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let teamName = [];
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      teamName.push(members[i].trim().substr(0, 1));
    }
  }
  if (teamName.length > 0) {
    return teamName.sort().join('').toUpperCase();
  } else {
    return false;
  }
};

//createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']);
