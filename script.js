const groceryContainer = document.querySelector(".grocery-container div");
const eraser = document.getElementById("eraser");
const items = document.querySelector(".items");
const userInput = document.getElementById("user-input");
const btnAdd = document.getElementById("add");

const addItem = function () {
  if (userInput.value.length == 0) alert("Please Type Something...");
  const newItem = document.createElement("h2");
  newItem.innerHTML = `-${userInput.value}`;
  newItem.addEventListener(
    "click",
    () => (newItem.style.textDecoration = "line-through")
  );

  items.insertAdjacentElement("beforeend", newItem);
  userInput.value = "";
};

btnAdd.addEventListener("click", function () {
  addItem();
});

eraser.addEventListener("click", function () {
  items.innerHTML = "";
});
