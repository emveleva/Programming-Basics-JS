function solve(arg1, arg2, arg3) {
    let fruit = arg1;
    let day = arg2;
    let count = Number(arg3);
    let price = 0;

    if (day == "Saturday" || day == "Sunday") {
        if (fruit == "banana") {
            price = count * 2.70;
            console.log(price.toFixed(2));
        } else if (fruit == "apple") {
            price = count * 1.25;
            console.log(price.toFixed(2));
        } else if (fruit == "orange") {
            price = count * 0.90;
            console.log(price.toFixed(2));
        } else if (fruit == "grapefruit") {
            price = count * 1.60;
            console.log(price.toFixed(2));
        } else if (fruit == "kiwi") {
            price = count * 3.00;
            console.log(price.toFixed(2));
        } else if (fruit == "pineapple") {
            price = count * 5.60;
            console.log(price.toFixed(2));
        } else if (fruit == "grapes") {
            price = count * 4.20;
            console.log(price.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (fruit == "banana") {
            price = count * 2.50;
            console.log(price.toFixed(2));
        } else if (fruit == "apple") {
            price = count * 1.20;
            console.log(price.toFixed(2));
        } else if (fruit == "orange") {
            price = count * 0.85;
            console.log(price.toFixed(2));
        } else if (fruit == "grapefruit") {
            price = count * 1.45;
            console.log(price.toFixed(2));
        } else if (fruit == "kiwi") {
            price = count * 2.70;
            console.log(price.toFixed(2));
        } else if (fruit == "pineapple") {
            price = count * 5.50;
            console.log(price.toFixed(2));
        } else if (fruit == "grapes") {
            price = count * 3.85;
            console.log(price.toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}


solve("apple", "Tuesday", 2);
solve("orange", "Sunday", 3);
solve("kiwi", "Monday", 2.5);
solve("grapes", "Saturday", 0.5);
solve("tomato", "Monday", 0.5);
