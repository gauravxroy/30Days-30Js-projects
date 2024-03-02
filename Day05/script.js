const password = document.querySelector("#password");
const button = document.querySelector(".btn");
const copy = document.querySelector(".copy");

// const passwordVerify =
//   /^(?=.(a-z))(?=.(A-Z))(?=.\d)(?=. (@$!%?&))(A-Za-z\d@$!%?&)(8,)$/;

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "@$!%?&#";
const allChar =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%?&#";

function randomPassword() {
  let passwordStr = "";
  passwordStr += upperCase[Math.floor(Math.random() * upperCase.length)];
  passwordStr += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  passwordStr += numbers[Math.floor(Math.random() * numbers.length)];
  passwordStr += specialChar[Math.floor(Math.random() * specialChar.length)];
  //   console.log("len: ", passwordStr.length); //4
  // till now password length is 4
  // after that need to add more characters to password  length to be equal to'length', using
  //while loop which is generating random passwords from  'allChar' until the length of password becomes 12 and while loops gets false
  while (length > passwordStr.length) {
    passwordStr += allChar[Math.floor(Math.random() * allChar.length)];
    // console.log(passwordStr.length);
  }
  password.value = passwordStr;
}

//this works same as above and more  efficient and clean than above
// function randomPassword() {
//   let passwordStr = "";
//   //while loop which is generating random passwords from  'allChar' until the length of password becomes 12 and while loops gets false
//   while (length > passwordStr.length) {
//     passwordStr += allChar[Math.floor(Math.random() * allChar.length)];
//     console.log(passwordStr.length);
//   }
//   password.value = passwordStr;
// }

// function a() {}

// a test event which is generating 4 digit numbers

function copyPass() {
  //old way to copy text
  //   password.select();
  //   document.execCommand("copy");
  //   alert("Password Copied");

  //new method to copy text by clipboard API

  const clipboard = navigator.clipboard;

  clipboard.writeText(password.value);
  alert("Password Is Copied");
}

button.addEventListener("click", (e) => {
  randomPassword();
});
