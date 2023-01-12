const isEmpty = require("./isEmpty");
const validator = require("validator"); //model validator npm i validator

module.exports = function ValiderUser(data) {
  let errors = {};
  data.Email = !isEmpty(data.Email) ? data.Email : ""; //si email si non return ""
  data.Prenom = !isEmpty(data.Prenom) ? data.Prenom : "";//si prenom si non return ""
  data.Nom = !isEmpty(data.Nom) ? data.Nom : ""; //si nom si non return ""
  data.Age = !isEmpty(data.Age) ? data.Age : ""; //si age si non return ""
 
  if (!validator.isEmail(data.Email)) { //if n'est pas email 
    errors.Email = "Format Email required";
  }
  if (validator.isEmpty(data.Email)) {
    errors.Email = "Required Email";
  }
  if (validator.isEmpty(data.Prenom)) {
    errors.Lastname = "Required Prenom ";
  }
  if (validator.isEmpty(data.Nom)) {
    errors.Firstname = "Required Nom";
  }
  if (validator.isEmpty(data.Age)) {
    errors.Age = "Required Email";
  }

  return {
      errors,
      isValid: isEmpty(errors) //if n'est pas d'error isValid=true
  }
};
