// Get references to the # element
var generateBtn = document.querySelector("#generate");
var generatePW = document.querySelector("#Submit");

//checkboxs
var upperCase = document.querySelector("#upperCase");
var lowerCase = document.querySelector("#lowerCase");
var numbers = document.querySelector("#numbers");
var specialChar = document.querySelector("#specialChar");

//self explanitory
function open_popup() {
 document.querySelector("#popup").style.display = "block";
};

function close_popup() {
  document.querySelector("#popup").style.display = "none";
};



// Write password to the #password input
function RUN() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};



//how the selected characters are added to the possible password characters
function Characters () {

const UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LC = "abcdefghijklmnopqrstuvwxyz";
const NUM = "1234567890";
const SC = "!@#$%^&*_-+=";

//checks sekected boxes
var characters = [];
if (upperCase.checked) {
  characters.push(UC)
};
if (lowerCase.checked) {
  characters.push(LC)
};
if (numbers.checked) {
  characters.push(NUM)
};
if (specialChar.checked) {
  characters.push(SC)
};
//if nothing is selected
if(characters.length == 0) {
  alert("please select some characters");
}

//join all pushed strings to one
characters = characters.join('');

console.log(characters)
return characters;
};



//generate password
function generatePassword() { 
  //characters that can be used
  var chars = Characters();

  //password length that was inputed
  var PW = document.querySelector('[name="PW-Char"]').value;
  if (PW > 128 || PW <8) {
  
    var error = "Please select a number between 8-128\ntry again"
    return error;
  }



  var password=""; 
  for (var i = 0; i <= PW-1; i++) {
    var randomnumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomnumber, randomnumber +1);
  }
return password;
};

//watches checkboxes

//checks generate button
generateBtn.addEventListener("click", open_popup);
//checks submit button
generatePW.addEventListener("click", ()=> {
  //just find this way easier to see what is happening then chaining the functions inside each other
  console.log("ran")
  event.preventDefault();
  RUN();
  close_popup();
});
