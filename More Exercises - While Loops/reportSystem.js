function solve(input){
    let totalMoney = Number(input.shift());
    let currentLine = input.shift();
    let counter = 0;
    let gatheredMoney = 0;
    let cashMoney = 0;
    let cardMoney = 0;
    let cardCounter = 0;
    let cashCounter = 0;

    while (currentLine !== "End"){
        let transaction = Number(currentLine);
        counter++;

        if (counter % 2 == 0){
            if (transaction < 10){
                console.log(`Error in transaction!`)
                
            } else {
            console.log(`Product sold!`)
            cardCounter++;
            cardMoney += transaction;
            gatheredMoney += transaction;
            }
            if(gatheredMoney >= totalMoney){
                break;
            }
        } else {
            if( transaction > 100) {
                console.log(`Error in transaction!`)
                
                } else {
                    console.log(`Product sold!`)
                    cashCounter++;
                    cashMoney += transaction;
                    gatheredMoney += transaction;
                    if(gatheredMoney >= totalMoney){
                        break;
                    }
                
                
            }
            
            }
            currentLine = input.shift();
        }
        if (gatheredMoney >= totalMoney){
            let averageCard = cardMoney/cardCounter;
            let averageCash = cashMoney/cashCounter;
            console.log(`Average CS: ${averageCash.toFixed(2)}`);
            console.log(`Average CC: ${averageCard.toFixed(2)}`)

        } else {
            console.log(`Failed to collect required money for charity.`)
        }

        
        


        
    }

    solve([ '600', '86', '150', '98', '227', 'End' ])


    

    
