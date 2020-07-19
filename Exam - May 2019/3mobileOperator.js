function solve(input) {
    let contractDuration = input.shift();
    let type = input.shift();
    let internet = input.shift();
    let months = Number(input.shift());
    let tax = 0;
    let pricePhone = 0;

    switch (contractDuration) {
        case "one":
            if (type == "Small"){
                pricePhone = 9.98;
            } else if (type == "Middle"){
                pricePhone = 18.99;
            } else if (type == "Large"){
                pricePhone = 25.98;
            } else if (type == "ExtraLarge"){
                pricePhone = 35.99;
            }
            tax += pricePhone;
            break;
    
        case "two":
            if (type == "Small"){
                pricePhone = 8.58;
            } else if (type == "Middle"){
                pricePhone = 17.09;
            } else if (type == "Large"){
                pricePhone = 23.59;
                
            } else if (type == "ExtraLarge"){
                pricePhone = 31.79;
                
            }
            tax += pricePhone;
            break;
    }
    if (internet == "yes"){
        if (pricePhone <= 10.00){
            tax += 5.50;
        } else if (pricePhone <= 30.00){
            tax += 4.35;
        } else if (pricePhone > 30.00){
            tax += 3.85;
        }
    }
    
    tax = tax * months;
    if (contractDuration == "two"){
        tax = tax - tax * 0.0375;
    }
  
    console.log(`${tax.toFixed(2)} lv.`)
}

solve(["two", "Small", "yes", "20"])

