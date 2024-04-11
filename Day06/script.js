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
  copyimg.className = "copyBtn";
  copyimg.src = "copy.png";
  delimg.src = "delete.png";
  container.appendChild(inputBox1);
  inputBox1.appendChild(copyimg);
  inputBox1.appendChild(delimg);
});

//added confirm delete pop/window whenever clicked on delete icon
container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("delBtn") &&
    confirm("Do You Want to delete!") == true
  ) {
    e.target.parentElement.remove();
  }
});

// trying to add copy text functionalities

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("copyBtn") == true) {
    var textToCopy = Array.from(container.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent.trim())
      .join(" ");
    const clipBoard = navigator.clipboard;
    clipBoard.writeText(textToCopy);
  }
});
