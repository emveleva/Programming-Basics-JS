function solve(input){
    let budget = Number(input.shift());
    let currentLine = input.shift();
    let finished = false;
    let products = 0;
    let total = 0;
    let price = 0;

    while (currentLine != "Stop"){
        products++;
        let equipment = currentLine;
        price = Number(input.shift());
        if (products % 3 == 0){
            price = price*0.5;
        }
        if (budget >= price){
        budget = budget - price;
        total += price;
        
        } else {
            let needed = price - budget;
        console.log(`You don't have enough money!`)
        console.log(`You need ${needed.toFixed(2)} leva!`)
            break;
        }
        currentLine = input.shift();
    }
    if (currentLine == "Stop"){
        console.log(`You bought ${products} products for ${total.toFixed(2)} leva.`)
    }
}

solve([
    '153.20', 'Backpack',
    '0',  'Shoes',
    '0',     'Sunglasses',
    '0', 'Sunglasses',
    '153.20',     'Stop'
  ])