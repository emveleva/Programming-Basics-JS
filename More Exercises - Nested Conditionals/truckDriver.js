function solve(arg1, arg2){
    let season = arg1;
    let kmPerMonth = Number(arg2);
    let time = 4;
    let pay = 0;

    switch (season) {
        case "Spring":
        case "Autumn":
            if (kmPerMonth <= 5000){
            pay = 0.75;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000){
                pay = 0.95;
            }
            break;
        case "Summer":
            if (kmPerMonth <= 5000){
                pay = 0.90;
                } else if (kmPerMonth > 5000 && kmPerMonth <= 10000){
                    pay = 1.10;
                }            
            break;
    
        case "Winter":
            if (kmPerMonth <= 5000){
                pay = 1.05;
                } else if (kmPerMonth > 5000 && kmPerMonth <= 10000){
                    pay = 1.25;
                }
            break;
    }
    if (kmPerMonth > 10000 && kmPerMonth <= 20000){
        pay = 1.45;
    }
    pay = pay*kmPerMonth * 4;
    pay = pay - pay*0.10;

    console.log(pay.toFixed(2))
}

solve("Summer", 3455)