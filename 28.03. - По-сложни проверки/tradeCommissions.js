function solve(arg1, arg2) {
    let city = arg1;
    let sells = Number(arg2);
    let com = 0;
    if (city == "Sofia") {
        if (sells >= 0 && sells <= 500) {
            com = sells*0.05;
            console.log(com.toFixed(2));
        } else if (sells > 500 && sells <= 1000) {
            com = sells*0.07;
            console.log(com.toFixed(2));
        } else if (sells > 1000 && sells <= 10000) {
            com = sells*0.08;
            console.log(com.toFixed(2));
        } else if (sells > 10000) {
            com = sells*0.12;
            console.log(com.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (city == "Varna") {
        if (sells >= 0 && sells <= 500) {
            com = sells*0.045;
            console.log(com.toFixed(2));
        } else if (sells > 500 && sells <= 1000) {
            com = sells*0.075;
            console.log(com.toFixed(2));
        } else if (sells > 1000 && sells <= 10000) {
            com = sells*0.10;
            console.log(com.toFixed(2));
        } else if (sells > 10000) {
            com = sells*0.13;
            console.log(com.toFixed(2));
        } else {
            console.log("error");
        } 
    } else if (city == "Plovdiv") {
        if (sells >= 0 && sells <= 500) {
            com = sells*0.055;
            console.log(com.toFixed(2));
        } else if (sells > 500 && sells <= 1000) {
            com = sells*0.08;
            console.log(com.toFixed(2));
        } else if (sells > 1000 && sells <= 10000) {
            com = sells*0.12;
            console.log(com.toFixed(2));
        } else if (sells > 10000) {
            com = sells*0.145;
            console.log(com.toFixed(2));
        } else {
            console.log("error");
        }
} else {
    console.log("error");
}
}

solve("Sofia", 1500);
solve("Plovdiv", 499.99);
solve("Varna", 3874.50);
solve("Kaspichan", -50);
