const inputBox = document.querySelector("#input-text");
const listItems = document.querySelector("#list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listItems.appendChild(li); // appendin li in listcontainer class
    let span = document.createElement("span"); //create a <span> element
    span.innerHTML = "\u00d7";
    li.appendChild(span); //add the span to li
  }

  inputBox.value = "";
  saveData();
}

// adding li on pressing enter key
inputBox.addEventListener("keypress", (e) => {
  //if key=enter then call addTask()
  if (e.key == "Enter") {
    addTask();
  }
});

listItems.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // Toggle between adding and removing a class name from an element with JavaScript.
      saveData();
      // e.target.classList.add("checked"); // ny this it will be only checked when li is targeted/ not unchecked
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listItems.innerHTML);
}

// showData is  called when the page loads and after any data has been added or removed
function showData() {
  listItems.innerHTML = localStorage.getItem("data");
}
showData();
