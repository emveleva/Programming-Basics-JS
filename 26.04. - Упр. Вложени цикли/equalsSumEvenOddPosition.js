function solve(input){
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let printLine = '';

    for (let i = firstNumber; i <= secondNumber; i++) {
        let oddSum = 0;
        let evenSum = 0;
        let currentNumber = i.toString();
        for (let j = 0; j < currentNumber.length; j++){
            let currentDigit = Number(currentNumber[j]);
            if (j % 2 == 0){
                evenSum += currentDigit;
        }   else {
            oddSum += currentDigit;
        }

        }
        if (oddSum === evenSum){
            printLine += i + ' ';
            
        }
    }
    console.log(printLine)
    }


solve(['100000', '100050'])