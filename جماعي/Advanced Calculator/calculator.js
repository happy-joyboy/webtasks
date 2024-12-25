// Get all necessary elements
const input = document.getElementById('input');
const buttons = document.querySelectorAll('.button');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const erase = document.getElementById('erase');
const percent = document.getElementById('percent');
const pi = document.getElementById('pi');
const pow = document.getElementById('pow');
const mod = document.getElementById('mod');
const scientificButtons = document.querySelectorAll('#sin, #cos, #tan, #log, #e');

let currentInput = '';

// Button click event
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim();

    // Skip buttons like AC, Erase, %, or Equals
    if (button.id === 'clear') {
      currentInput = ''; // Reset input
      input.value = '';
    } else if (button.id === 'erase') {
      currentInput = currentInput.slice(0, -1); // Remove last character
      input.value = currentInput;
    } else if (button.id === 'percent') {
      currentInput += '/100'; // Percent logic
      input.value = currentInput;
    } else if (button.id === 'equal') {
      try {
        // Evaluate the current expression and limit to 2 decimal places
        currentInput = evaluateExpression(currentInput);
        input.value = currentInput;
      } catch (err) {
        input.value = 'Error';
      }
    } else if (button.id === 'mod') {
      currentInput += '%'; 
      input.value = currentInput;
    } else if (button.id === 'pi') {
      currentInput += Math.PI.toFixed(2);
      input.value = currentInput;
    } else if (button.id === 'pow') {
      currentInput += '**';
      input.value = currentInput;
    }else if(button.id==='abs'){
      currentInput +='abs(';
      input.value = currentInput;
    } 
    else {
      currentInput += value;
      input.value = currentInput;
    }
  });
});

// Scientific function button handling
scientificButtons.forEach(button => {
  button.addEventListener('click', () => {
    const func = button.textContent.trim();
    currentInput += "("; // Add function to input (e.g., sin(, cos(, etc.)
    input.value = currentInput;
  });
});

// Function to evaluate the expression and limit to 2 decimal places
function evaluateExpression(expression) {
  // Handling scientific functions like sin, cos, log, etc.
  expression = expression.replace(/sin\(([^)]+)\)/g, (match, p1) => `Math.sin(${p1} * Math.PI / 180)`); // Convert sin to radians
  expression = expression.replace(/cos\(([^)]+)\)/g, (match, p1) => `Math.cos(${p1} * Math.PI / 180)`); // Convert cos to radians
  expression = expression.replace(/tan\(([^)]+)\)/g, (match, p1) => `Math.tan(${p1} * Math.PI / 180)`); // Convert tan to radians
  expression = expression.replace(/log\(([^)]+)\)/g, (match, p1) => `Math.log(${p1})`); // Logarithm
  expression = expression.replace(/abs\(([^)]+)\)/g, (match, p1) => `Math.abs(${p1})`); // Absolute value  expression = expression.replace(/e/g, 'Math.E'); // Euler's number (e)
  expression = expression.replace(/π/g, 'Math.PI'); // Pi constant

  // Use eval to evaluate the expression
  const result = eval(expression);

  // Limit result to 2 decimal places
  if (Number.isInteger(result)) {
    return result; // Return as integer if no decimal component
  } else {
    return result.toFixed(2); // Return as 2 decimal places if it's not an integer
  }
}
