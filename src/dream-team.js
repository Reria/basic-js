const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let nameTeam = '';
  let arr = [];

  for (let member of members) {
    if (typeof member === 'string') {
      members.sort();
      nameTeam.trim();
      nameTeam = nameTeam + member[0].toUpperCase(); 
      arr.push(nameTeam )
    }
  }
  if (typeof member === 'object') {
    for (let elem of member) {
      if (typeof member === 'string') {
        nameTeam.trim();
        nameTeam = nameTeam + member[0].toUpperCase();  
        arr.push(nameTeam )
      }
    }
  }
  return nameTeam
}

module.exports = {
  createDreamTeam
};
