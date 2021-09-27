// 1a
let randomNum=Math.floor(Math.random()*5)+1;
console.log(randomNum);

// 1b 
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum == 2 || randomNum == 3) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c 
if (randomNum != 3) { // <-- can also be !==
    console.log("Not equal to 3");
}

// 1d
if (randomNum != 3 && randomNum != 5) { // <-- can also be !== 
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e 
if (randomNum == 2 || randomNum == 4) {
    console.log("Equal to 2 OR equal to 4");
}

// 2
console.log(randomNum >= 4 ? 'Greater than or equal to 4' : 'Less than 4');

// 3
switch (randomNum) {
    case 1:
      console.log('One');
      break;
    case 2:
      console.log('Two');
      break
    case 3:
      console.log('Three');
      break;
    case 4:
      console.log('Four');
      break;
    case 5:
      console.log('Five');
      break;
}

// Switch Statement takes in a parameter/argument and returns something based on the CASE (Or the match) that the parameter/argument goes with
// In this example if randomNum is 1 it will run the console.log("One"); code, if randomNum is 2 it will run the console.log("Two"); code, etc.

  // Default works like ELSE in a Conditional Statement (If the value does not match any of the cases,. then it will run what is in the default)
  // default:
  //   console.log("Five");
  // There is no need for a BREAK at the end of the Switch Statement since there are no other cases/possibilities

