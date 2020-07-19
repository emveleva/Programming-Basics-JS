function solve(input) {
    let count = Number(input.shift());
    let balance = 0;

    for (let i = 0; i < count; i++){
        let amount = Number(input.shift());
        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        } 
        balance = balance + amount;
        console.log(`Increase: ${amount.toFixed(2)}`)
        
           
        
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}

solve(['3', '5.51', '69.42', '100'])