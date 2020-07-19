function solve(input){
    let fruit = input.shift();
    let size = input.shift();
    let count = Number(input.shift());

    switch (fruit) {
        case "Watermelon":
            if (size == "small"){
                price = 2 * 56;
            } else {
                price = 5 * 28.70;
            }
            break;
        case "Mango":
            if (size == "small"){
                price = 2 * 36.66;
            } else {
                price = 5 * 19.60;
            }
            break;
        case "Pineapple":
            if (size == "small"){
                price = 2 * 42.10;
            } else {
                price = 5 * 24.80;
            }
            break;
        case "Raspberry":
            if (size == "small"){
                price = 2 * 20;
            } else {
                price = 5 * 15.20;
            }
            break;
    }
    let totalPrice = price * count;
    if (totalPrice >= 400 && totalPrice <= 1000){
        totalPrice = totalPrice - totalPrice * 0.15;
    } else if (totalPrice > 1000){
        totalPrice = totalPrice - totalPrice * 0.50;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`)
}

solve(["Watermelon", "big", "4"])