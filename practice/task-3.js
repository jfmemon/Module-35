// 3.1
const exampleArrowFunction = () => {
    console.log(89);
};
exampleArrowFunction();

// 3.2
const exampleArrayFunction2 = number => {
    return console.log(number/17);
}
exampleArrayFunction2(20);

// 3.3
const thirdExampleArrowFunction = (num1, num2) => {
    const sum = ((num1 + 7) + (num2 + 5));
    if(sum % 2 === 0) {
        return console.log(true);
    }else{
        return console.log(false);
    }
}

thirdExampleArrowFunction(12, 24);

// 3.4
const fourthExampleArrowFunction = array => {
    let sum = 0;
    for(const element of array) {
        sum = sum + element;
    }
    return Math.pow(sum, 2);
}

const array = [10, 3, 52, 41, 97, 44];
const squareResult =  fourthExampleArrowFunction(array);
console.log(squareResult);