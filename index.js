//1.Write a function named ‘calculateSum’ that takes two arguments and returns their sum
function calculateSum(a, b) {
  return a + b;
}
function displaySum() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const sum = calculateSum(number1, number2);
  document.getElementById("sum").innerText = `The sum is: ${sum}`;
}
//2.Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(num) {
  if (num % 2) return "False";
  return "True";
}
function displayEvenOrNot() {
  const result = isEven(parseInt(document.getElementById("iseven").value));
  document.getElementById("even").innerHTML = `Result : ${result}`;
}
//3.Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
function findMax(array) {
  return Math.max(...array);
}
function displayMaxElement() {
  const array = document.getElementById("array").value;
  const arr = array.split(",").map(Number);
  const result = findMax(arr);
  document.getElementById("max").innerHTML = `Max Element is : ${result}`;
}
//4.Write a function named ‘reverseString’ that takes a string and returns the string reversed.
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
function displayReverseString() {
  const str = document.getElementById("str").value;
  const revStr = reverseString(str);
  document.getElementById("reverse").innerHTML = `Reverse : ${revStr}`;
}
//5.Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
function filterOddNumbers(nums) {
  const oddNums = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2) oddNums.push(nums[i]);
  }
  return oddNums;
}
function displayOddNums() {
  const array = document.getElementById("nums").value;
  const arr = array.split(",").map(Number);
  const result = filterOddNumbers(arr);
  document.getElementById("oddNums").innerHTML = `Odd numbers: ${result.join(
    ", "
  )}`;
}
//6. Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
function sumArray(numbersArray) {
  return numbersArray.reduce((sum, num) => sum + num, 0);
}
function displaySumArray() {
  const numbersString = document.getElementById("numbers").value;
  const numbersArray = numbersString.split(",").map(Number);
  const sum = sumArray(numbersArray);
  document.getElementById("sumResult").innerText = `The sum is: ${sum}`;
}

//7.Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
const compareFn = (a, b) => (a > b ? 1 : 0);
function sortArray(numbersArray) {
  const result = numbersArray.sort(compareFn);
  return result;
}
function displaySortArray() {
  const numbersString = document.getElementById("numbers1").value;
  const numbersArray = numbersString.split(",").map(Number);
  const result = sortArray(numbersArray);
  document.getElementById("sortArray").innerHTML = `Sort numbers: ${result.join(
    ", "
  )}`;
}

//8.Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
function displayCapitalize() {
  const str = document.getElementById("strIn").value;
  const strCp = capitalizeFirstLetter(str);
  document.getElementById("strCp").innerText = `Capitalize String : ${strCp}`;
}
