function solve(product, city, num) {
    let number = Number(num);
    let price = 0
    if (product == "coffee") {
        if (city == "Sofia") {
            price = number*0.50;
            console.log(price.toFixed(2));
        } else if (city == "Plovdiv") {
            price = number*0.40;
            console.log(price.toFixed(2));
        } else {
            price = number*0.45;
            console.log(price.toFixed(2))
            }
    } else if (product == "water") {
        if (city == "Sofia") {
            price = number*0.80;
            console.log(price.toFixed(2));
        } else if (city == "Plovdiv") {
            price = number*0.70;
            console.log(price.toFixed(2));
        } else {
            price = number*0.70;
            console.log(price.toFixed(2))
            }
    } else if (product == "beer") {
        if (city == "Sofia") {
            price = number*1.20;
            console.log(price.toFixed(2));
        } else if (city == "Plovdiv") {
            price = number*1.15;
            console.log(price.toFixed(2));
            } else {
            price = number*1.10;
            console.log(price.toFixed(2))
            }
        } else if (product == "sweets") {
            if (city == "Sofia") {
                price = number*1.45;
                console.log(price.toFixed(2));
            } else if (city == "Plovdiv") {
                price = number*1.30;
                console.log(price.toFixed(2));
            } else {
                price = number*1.35;
                console.log(price.toFixed(2))
            } 
        } else if (product == "peanuts") {
                if (city == "Sofia") {
                    price = number*1.60;
                    console.log(price.toFixed(2));
                } else if (city == "Plovdiv") {
                    price = number*1.5;
                    console.log(price.toFixed(2));
                } else {
                    price = number*1.55;
                    console.log(price.toFixed(2))
            }
        }
}

solve(["beer", "Sofia", 6]);