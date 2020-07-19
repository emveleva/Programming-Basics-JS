function solve(input){
    let desiredIncome = Number(input.shift());
    let income = 0;
    let currentLine = input.shift();

    while (currentLine != "Party!"){
        let name = currentLine;
        let count = Number(input.shift());
        let price = name.length*count;
        if (price % 2 != 0){
            price = price - price * 0.25;
        }
        income += price;
        if (income >= desiredIncome){
            console.log(`Target acquired.`)
            break;
        }
        currentLine = input.shift();
    }
    if (income < desiredIncome){
        let needed = desiredIncome - income;
        console.log(`We need ${needed.toFixed(2)} leva more.`)
    }
    console.log(`Club income - ${income.toFixed(2)} leva.`)

    
}

solve([ '100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10' ])