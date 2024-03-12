// date.addEventListener("click", function (e) {
//   e.target.type = "date";
//   e.focus();
// });
const Userdate = document.querySelector("#date");
const ageCal = document.querySelector(".Age");
const calculate = document.querySelector("#calculateBtn");

// this line is allowing to oluy selecting the today and past dates
Userdate.max = new Date().toISOString().split("T")[0];

function ageCalculator() {
  const userBirthday = new Date(Userdate.value);
  console.log(userBirthday); //
  let bDay = userBirthday.getDate();
  let bMonth = userBirthday.getMonth() + 1;
  let bYear = userBirthday.getFullYear();

  const currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();

  //using ternery operator
  // let mDiff = bMonth > cMonth ? bMonth - cMonth : cMonth - bMonth;
  // console.log(mDiff);

  let yDiff = cYear - bYear;
  let mDiff = cMonth - bMonth;
  if (bMonth > cMonth) {
    yDiff--;
    mDiff = 12 - (bMonth - cMonth);
  }

  ageCal.innerText = `Your Age: ${yDiff} years And ${mDiff} Months`;
}

calculate.addEventListener("click", function (e) {
  if (Userdate.value) {
    ageCal.style.display = "block";
    ageCalculator();
  } else {
    alert("Please Enter A valid Date");
  }
});
