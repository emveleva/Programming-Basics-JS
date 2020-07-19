function solve(num1, num2, op) {
    let N1 = Number(num1);
    let N2 = Number(num2);
    let result = 0;
    let type = ""
    let plusMinusMult = op == "+" || op == "-" || op == "*";

switch (op) {
    case "+":
        result = N1 + N2;        
        break;
    case "-":
    result = N1 - N2;        
    break;
    case "*":
        result = N1 * N2;        
        break;
    case "/":
        if (N2 == 0) {
            console.log(`Cannot divide ${N1} by zero`)
        } else  {
        result = N1 / N2;
        result = result.toFixed(2); }       
        break;
    case "%":
        if (N2 == 0) {
            console.log(`Cannot divide ${N1} by zero`)
        } else  {
            result = N1 % N2;  
        }   
              
        break;
    default:
        break;
}

if (result % 2 === 0 && plusMinusMult){
    type = "even"
} else {
    type = "odd"
}
    if (plusMinusMult) {
        console.log(`${N1} ${op} ${N2} = ${result} - ${type}`)
    } else if (op == "/" && N2 != 0) {
        console.log(`${N1} ${op} ${N2} = ${result}`)
    } else if (op == "%" && N2!= 0) {
        console.log(`${N1} ${op} ${N2} = ${result}`)
    }
}

// solve(10, 12, "+");
// solve(123, 12, "/");
solve(112, 0, "/");
// solve(10, 1, "-");
// solve(10, 3, "%");
// solve(10, 0, "%");
// solve(7, 3, "*");