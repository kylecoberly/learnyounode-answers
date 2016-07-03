function sumNumbers(numbers){
    return numbers.reduce(function(currentNumber, nextNumber){
        return parseInt(currentNumber) + parseInt(nextNumber);
    }, 0);
}

process.argv.shift();
process.argv.shift();
console.log(sumNumbers(process.argv));
