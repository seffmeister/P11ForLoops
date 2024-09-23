//1  Print 13 different random numbers between 1 and 6.
//for (let  i = 0; i < 13; i++) {
//  console.log(getRandomInt(6) +1);
//}
//function getRandomInt(max) {
//  return Math.floor(Math.random() * max);
//}

//2 Start at 1 and multiply the number of each iteration
//for (let i = 1; i <= 1024; i *=2) {
//  console.log(i);
//}

//3
//for (let i = 10; i > -1; i--) {
//  console.log(i);
//}

//4
function power(firstNumber, exponent) {
  //Here we chache the result
  let result = firstNumber;
  for (let i = 1; i <= exponent; i++) {
    //Here we multiply the result by the first number
    return result ** firstNumber;
  }
  //Once the loop is over, we return to result
  return result;
}
console.log(power(firstNumber:4, exponent:2));
