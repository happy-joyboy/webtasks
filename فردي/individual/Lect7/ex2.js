
function convertToFahrenheit() {
    const input = document.getElementById("temperature-input").value;
    const result = document.getElementById("result");
  
    if (isNaN(input) || input === "") {
      result.textContent = "Please enter a number!";
      result.style.color = "red";
    } else {
      const fahrenheit = (parseFloat(input) * 9/5) + 32;
      result.textContent =  `${input} Celsius is equivalent to ${fahrenheit} Fahrenheit. `;
      result.style.color = "black";
    }
  }
  
  function convertToCelsius() {
    const input = document.getElementById("temperature-input").value;
    const result = document.getElementById("result");
  
    if (isNaN(input) || input === "") {
      result.textContent = "Please enter a number!";
      result.style.color = "red";
    } else {
      const celsius = (parseFloat(input) - 32) * 5/9;
      result.textContent =  `${input} Fahrenheit is equivalent to ${celsius} Celsius.`;
      result.style.color = "black";
    }
  }