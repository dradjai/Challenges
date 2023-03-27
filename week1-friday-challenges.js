// 1) convertTempature
// Create a function that can converts fahrenheit to celcius.

// Sample output will says "Today is 80F (26.7C)." 
// This should work given any number.
// To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9). 


const convertFarenToCelcius = param => {
  //logic
  const celciusRes = (param - 32) * .5556;
  const roundedRes = celciusRes.toFixed(1);
  return `Today is ${param}F (${roundedRes}C).`;

} 
const res = convertFarenToCelcius(75);
console.log(res);


// 2) convertCurrency
// Write a function that convert Japanese Yen to Dollars.

// The output will says "100 Yen is 0.77 US Dollars". 
// This should work given any number.

const yenToDollars = param => {
  //logic
  //param/129.87012987
  const usdRes = param / 129.87;
  const roundedRes = usdRes.toFixed(2);
  return `${param} Yen is ${roundedRes} US Dollars`;

}

const res2 = yenToDollars(100);
console.log(res2);



// 3) getLargestNumber
// Given the array of numbers, write funtion returning largest number in array.

const largestInt = [2,5,7,1337,13,21,22,55,66,13,14551,41];

const maxNumFunc = arr => {
  
  let maxNum = 0;
  for(let i = 0; i < arr.length; i++){
      maxNum = arr[i] > maxNum ? arr[i] : maxNum;
  }
  return maxNum;
}
const maxNumResult = maxNumFunc(largestInt);
console.log(maxNumResult);


// 4) sumTotal
// Calculate the sum of all the numbers in the following array

const sumInt = [6,1,643,234,123,4,7,9];
//const sumInt2 = [2, 3, 5];

const calcTotalSum = arr => {

  let totalSum = 0;
  for(let i = 0; i < arr.length; i++){
    totalSum = totalSum + arr[i];
  }
  return totalSum;

}

const sumResult = calcTotalSum(sumInt);
console.log(sumResult);





// 5) getOddNumber
// Given any array of numbers (all will be > 0), write a function that returns the number of odd numbers in the array.

const countNumber = [1,3,7,6,13,20,2,5,33,9,14];

const oddCountFunc = arr => {
  let counter = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      counter++;
    }
  }
  return counter;
}

const totalOdds = oddCountFunc(countNumber);
console.log(totalOdds);

// 6) Multiplication Table
// Create a multiplication table for numbers up to 10.


//process.stdout.write(`${j}`);
//123
//246
//369

const totalProduct = arr => {

  let product = 1;
  for(let i = 0; i < arr.length; i++){
    let subArray = arr[i];
    for(let j = 0; j < subArray.length; j++){
      product *= subArray[j];
    }
  }
  return product;

}

const multArr = [
  [3, 5, 2],
  [6, 2]
]

const multArrRes = totalProduct(multArr);
console.log(multArrRes);




// 7) isPalinadrome
// Check if a string s a palinadrome.

const isPalindrum = strArr => {

  const palCheckArr = [];
  for(let i = 0; i < strArr.length; i++){

      const charArr = [];
      const strLowerCase = strArr[i].toLowerCase();
      const strRemoveSpace = strLowerCase.replace(/[" "]/g, "");
      for(let j = strRemoveSpace.length-1; j >= 0; j--){
          charArr.push(strRemoveSpace.charAt(j));
      }
      let reverseStr = "";
      for(let j = 0; j < charArr.length; j++){
          reverseStr = reverseStr + charArr[j];
      }
      const res = (strRemoveSpace === reverseStr) ? strArr[i] + " : " + true : strArr[i] + " : " + false;
      palCheckArr.push(res);
    }
    return palCheckArr
    
  }

const palArr = ['mom', 'hello', 'noon', 'RacEcaR', 'javascript'];

const strRes = isPalindrum(palArr);
console.log(strRes);
