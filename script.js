const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const productResult = document.querySelector('#product-result');
const calculateButton = document.querySelector('#calculate-button');

function calculateProduct() {
  let num1 = parseFloat(number1.value);
  let num2 = parseFloat(number2.value);

  // Check if both inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    let product = num1 * num2;
    productResult.textContent = product.toFixed(2);
  } else {
    productResult.textContent = "Invalid input";
  }
}

// Event listener for the calculate button
calculateButton.addEventListener('click', calculateProduct);
