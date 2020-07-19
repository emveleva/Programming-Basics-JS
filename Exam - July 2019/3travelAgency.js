function solve(input){
    let city = input.shift();
    let package = input.shift();
    let discount = input.shift();
    let days = Number(input.shift())
    let price = 0;
    let invalid = false;

    switch (city) {
        case "Bansko":
        case "Borovets":
            if (package == "withEquipment"){
                if (discount == "no"){
                price = 100;}
                else {
                price = 100 - 100 * 0.10;
                }
            } else if (package == "noEquipment"){
                if (discount == "no"){
                price = 80;}
                else {
                price = 80 - 80 * 0.05;
                }
            } else {
                invalid = true;
            }
            break;
        case "Varna":
        case "Burgas":
            if (package == "withBreakfast"){
                if (discount == "no"){
                price = 130;}
                else {
                price = 130 - 130 * 0.12;
                }
            } else if (package == "noBreakfast"){
                if (discount == "no"){
                price = 100;
                } else {
                price = 100 - 100 * 0.07;
                }
            } else {
                invalid = true;
            }
            break;
        default:
            invalid = true;
            break;
    }
    if (days > 7){
        days = days - 1;
    }
    price = price * days;
    
    if (invalid){
        console.log(`Invalid input!`)
    } else if (days < 1){
        console.log(`Days must be positive number!`);   
    }
    else  {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`)
    }

}


solve([ 'Gabrovo', 'noBreakfast', 'no', '0', '' ]


)