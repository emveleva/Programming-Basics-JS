function solve(input) {
    let firstName = input.shift();
    let secondName = input.shift();
    let currentLine = input.shift();
    let result1 = 0;
    let result2 = 0;
    let number1 = 0;
    let number2 = 0;
    let wars = false;
    let counter = 0;

    while (currentLine != "End of game" || counter <= 36){
        number1 = Number(currentLine);
        counter++;
        number2 = Number(input.shift());
        counter++;
        if (number1 > number2){
            result1 = result1 + (number1-number2);
        } else if (number1 < number2){
            result2 = result2 + (number2-number1);
        } else if (number1 == number2){
            console.log("Number wars!");
            number1 = Number(input.shift());
            number2 = Number(input.shift());
            
            if (number1 > number2){
                console.log(`${firstName} is winner with ${result1} points`);
            } else {
                console.log(`${secondName} is winner with ${result2} points`)
            }
            break;
        } else if (counter == 36 || currentLine == "End of game"){
            console.log(`${firstName} has ${result1} points`);
            console.log(`${secondName} has ${result2} points`);
            break;

        }
        currentLine = input.shift();
        
        }
      

    }


solve([
    'Desi', 'Niki', '7',
    '5',    '3',    '4',
    '3',    '3',    '5',
    '3',    '',     ''
  ]
  )