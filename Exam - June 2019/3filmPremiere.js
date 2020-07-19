function solve(input){
    let movie = input.shift();
    let food = input.shift();
    let tickets = Number(input.shift());
    let sum = 0;

    switch (movie) {
        case "John Wick":
            if (food == "Drink"){
                sum = tickets * 12;
            } else if (food == "Popcorn"){
                sum = tickets * 15;
            } else if (food == "Menu"){
                sum = tickets * 19;
            }
            break;
    
        case "Star Wars":
            if (food == "Drink"){
                sum = tickets * 18;
            } else if (food == "Popcorn"){
                sum = tickets * 25;
            } else if (food == "Menu"){
                sum = tickets * 30;
            }
            if (tickets >= 4){
                sum = sum - sum * 0.30;
            }
            break;
        case "Jumanji":
            if (food == "Drink"){
                sum = tickets * 9;
            } else if (food == "Popcorn"){
                sum = tickets * 11;
            } else if (food == "Menu"){
                sum = tickets * 14;
            }
            if (tickets == 2){
                sum = sum - sum * 0.15;
            }
            break;
    }

    console.log(`Your bill is ${sum.toFixed(2)} leva.`)
}


solve(["John Wick", "Drink", "6"])