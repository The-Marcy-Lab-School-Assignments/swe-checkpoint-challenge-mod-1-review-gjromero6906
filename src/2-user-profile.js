// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
  return{username : username,
  email : email,
  isActive : true,
  loginCount : 0}
};

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
  user.loginCount++;
};

// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
  user.isActive = false;
  delete user.email;
  return user;
};

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
  let keys =Object.keys(user);
  for(let i = 0;i < keys.length;i++){
    console.log(`${keys[i]}: ${user[keys[i]]}`);
  }

};

// BONUS: Return a true copy of the user object (not a reference)
const cloneUser = (user) => {
  let copy ={...user}
  return copy;

};
module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
