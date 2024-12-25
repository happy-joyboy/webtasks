const initialFruits = ["Apples", "Banana"];
window.onload = function() {
  const fruitsList = document.getElementById("fruits-list");
  initialFruits.forEach(fruit => {
    const listItem = document.createElement("li");
    listItem.textContent = fruit;
    fruitsList.appendChild(listItem);
  });
}
function addFruit() {
  const fruitInput = document.getElementById("fruit-input");
  const fruitName = fruitInput.value.trim();

  if (fruitName !== "" && isNaN(fruitName)) {
    const listItem = document.createElement("li");
    listItem.textContent = fruitName;
    listItem.style.color = "darkolivegreen"; 
    document.getElementById("fruits-list").appendChild(listItem);
    fruitInput.value = ""; }
  
}