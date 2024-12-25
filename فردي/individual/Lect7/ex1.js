function updateContent() {
    document.getElementById("text-content").textContent = "New Text Content.";
  }
  
  function updateContentAndStyles() {
    const styledText = document.getElementById("styled-text");
    styledText.textContent = "New Styles Added!";
    styledText.style.color = "red";
    styledText.style.border = "2px solid red";
    styledText.style.backgroundColor = "yellow";
  }
  
  function removeElement() {
    const removableElement = document.getElementById("removable-element");
    removableElement.remove();
  }