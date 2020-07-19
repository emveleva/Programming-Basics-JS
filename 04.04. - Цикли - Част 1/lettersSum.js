function solve(text, num1, num2) {
    let controlNumber = Number(num1);
    let budget = Number(num2);
    let sum = 0;
    
    

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char == "a" || 
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u" ||
            char == "y") {
                sum += 3;
            } else {
                sum += 1;
            }
        
        }
        let productValue = sum * controlNumber;
        if (productValue > budget) {
            console.log(`Cannot buy ${text}. Product value: ${productValue.toFixed(2)}`)
        } else {
            let neededMoney = budget - productValue;
            console.log(`${text} bought. Money left: ${neededMoney.toFixed(2)}`)
        }
        
    }


solve("milk", 1.4, 8)
