let currentNumber = '';  // Track the current number being typed
  let total = 0;  // Track the total value (sum, difference, product, quotient)
  let operation = '';  // Track the current operation ('+', '-', '*', '/')

  // Get reference to the display input
  const display = document.getElementById('display');
  
  // Get all buttons with the class 'btn'
  const buttons = document.querySelectorAll('.btn');

  // Add a click event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const value = this.textContent;

      if (value === 'C') {
        // Clear the display and reset variables
        display.value = '';
        currentNumber = '';
        total = 0;
        operation = '';
      } else if (value === '+') {
        // Perform addition
        if (currentNumber !== '') {
          total += parseFloat(currentNumber);
        }
        operation = '+';
        currentNumber = '';
        display.value = '';
      } else if (value === '-') {
        // Perform subtraction
        if (currentNumber !== '') {
          total = total === 0 ? parseFloat(currentNumber) : total - parseFloat(currentNumber);
        }
        operation = '-';
        currentNumber = '';
        display.value = '';
      } else if (value === '*') {
        // Perform multiplication
        if (currentNumber !== '') {
          total = total === 0 ? parseFloat(currentNumber) : total * parseFloat(currentNumber);
        }
        operation = '*';
        currentNumber = '';
        display.value = '';
      } else if (value === '/') {
        // Perform division
        if (currentNumber !== '') {
          total = total === 0 ? parseFloat(currentNumber) : total / parseFloat(currentNumber);
        }
        operation = '/';
        currentNumber = '';
        display.value = '';
      } else if (value === '=') {
        // Perform the final calculation based on the operation
        if (operation === '+') {
          total += parseFloat(currentNumber);
        } else if (operation === '-') {
          total -= parseFloat(currentNumber);
        } else if (operation === '*') {
          total *= parseFloat(currentNumber);
        } else if (operation === '/') {
          total /= parseFloat(currentNumber);
        }
        display.value = total;  // Display the result
        currentNumber = '';  // Reset the current number
        operation = '';  // Reset the operation
      } else {
        // For numbers, append the value to currentNumber
        currentNumber += value;
        display.value = currentNumber;  // Update the display
      }
    });
  });

