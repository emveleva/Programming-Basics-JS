function solve(input){
    let clients = Number(input.shift());
    let totalAll = 0;


    for (let i = 1; i <= clients; i++){
        let currentLine = input.shift();
        let items = 0;
        let price = 0;
        let total = 0;
        while (currentLine != "Finish"){
            items++;
            if (currentLine == "basket"){
                total += 1.50;
            } else if (currentLine == "wreath"){
                total += 3.80;
            } else {
                total += 7;
            }
            currentLine = input.shift();
        }
        
        if (items % 2 == 0){
            total = total - total * 0.20;
        }
        totalAll += total;
        console.log(`You purchased ${items} items for ${total.toFixed(2)} leva.`)
    }
    let average = totalAll/clients;
    console.log(`Average bill per client is: ${average.toFixed(2)} leva.`)
}

solve([
    '1',
    'basket',
    'wreath',
    'chocolate bunny',
    'wreath',
    'basket',
    'chocolate bunny',
    'Finish'
  ]
  
  )