function solve(input){
    let capacity = Number(input.shift());
    let currentLine = input.shift();
    let seatsTaken = capacity;
    let cost = 0;
    let full = true;;
    let total = 0;


    while (currentLine != "Movie time!"){
        let people = Number(currentLine);
        if (seatsTaken < people){
            console.log(`The cinema is full.`)
            full = false;
            break;
        }
        seatsTaken -= people;
        if (people % 3 == 0){
            cost = people * 5 - 5;
        } else {
            cost = people * 5;
        }
        total += cost;
        
        
        currentLine = input.shift();


    } if (full){
        console.log(`There are ${seatsTaken} seats left in the cinema.`);
    }
    
        console.log(`Cinema income - ${total.toFixed(0)} lv.`)
    
}

solve(["100", "10", "10", "10", "10", "10", "10","10","10","10","10", "Movie time!"])