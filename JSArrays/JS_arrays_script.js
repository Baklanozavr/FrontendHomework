function getArrayOfRandomNumbers(howMany) {
    var array = [];
    for (var i = 0; i < howMany; ++i) {
        array.push(Math.round(Math.random() * 100))
    }
    return array;
}

function getArrayOfGrowingNumbers(firstElement, totalNumberOfElements) {
    var arrayOfGrowingNumbers = [];
    for (var i = firstElement; i < totalNumberOfElements + firstElement; ++i) {
        arrayOfGrowingNumbers.push(i);
    }
    return arrayOfGrowingNumbers;
}

var arrayOfRandomNumbers = getArrayOfRandomNumbers(9);
console.log(arrayOfRandomNumbers);

arrayOfRandomNumbers.sort(function (a, b) {
    return b - a;
});
console.log(arrayOfRandomNumbers);

var firstFiveElements = arrayOfRandomNumbers.slice(0, 5);
console.log(firstFiveElements);

var lastFiveElements = arrayOfRandomNumbers.slice(arrayOfRandomNumbers.length - 5);
console.log(lastFiveElements);

var sum = arrayOfRandomNumbers.reduce(function (sum, element) {
    if (element % 2 === 0) {
        sum += element;
    }
    return sum;
}, 0);
console.log(sum);

var hundredNumbersArray = getArrayOfGrowingNumbers(1, 100);
console.log(hundredNumbersArray);

squaresOfEvensArray = hundredNumbersArray.reduce(function (squaresOfEvensArray, element) {
    if (element % 2 === 0) {
        squaresOfEvensArray.push(element * element);
    }
    return squaresOfEvensArray;
}, []);
console.log(squaresOfEvensArray);