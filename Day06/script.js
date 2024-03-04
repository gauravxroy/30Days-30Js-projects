const button = document.querySelector(".btn");
const inputBox = document.querySelector(".input-box");
const container = document.querySelector(".notesContainer");

button.addEventListener("click", function (e) {
  const inputBox1 = document.createElement("p");
  const delimg = document.createElement("img");
  const copyimg = document.createElement("img");
  inputBox1.className = "input-box";
  inputBox1.setAttribute("contenteditable", "true");
  delimg.className = "delBtn";
  delimg.src = "delete.png";
  //copy Img icon
  copyimg.className = "copyBtn";
  copyimg.src = "copy.png";
  container.appendChild(inputBox1);
  inputBox1.appendChild(copyimg);
  inputBox1.appendChild(delimg);
});

//added confirm delete pop/window whenever clicked on delete icon
container.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG" && confirm("Do You Want to delete!") == true) {
    e.target.parentElement.remove();
  }
});

// trying to add copy text functionalities

// container.addEventListener("click", function (e) {
//   if (e.target.classList === "copyBtn") {
//     const clipBoard = navigator.clipboard;
//     clipBoard.writeText(inputBox.innerText);
//   }
// });
