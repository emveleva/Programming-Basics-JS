function solve(input){
    let destination = input.shift();
    let dates = input.shift();
    let nights = Number(input.shift());
    let cost = 0;

    switch (destination) {
        case "France":
            if (dates == "21-23"){
                cost = nights * 30;
            } else if (dates == "24-27"){
                cost = nights * 35;
            } else if (dates == "28-31"){
                cost = nights * 40;
            }        
            break;
        case "Italy":
            if (dates == "21-23"){
                cost = nights * 28;
            } else if (dates == "24-27"){
                cost = nights * 32;
            } else if (dates == "28-31"){
                cost = nights * 39;
            }        
            break;
        case "Germany":
            if (dates == "21-23"){
                cost = nights * 32;
            } else if (dates == "24-27"){
                cost = nights * 37;
            } else if (dates == "28-31"){
                cost = nights * 43;
            }        
            break;
    }
    console.log(`Easter trip to ${destination} : ${cost.toFixed(2)} leva.`)

}

solve(["Germany", "24-27", "5"])