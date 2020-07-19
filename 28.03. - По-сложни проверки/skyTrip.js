function solve(arg1, arg2, arg3) {
    let days = Number(arg1) -1;
    let room = arg2;
    let feedback = arg3;
    let cost = 0;

    if (room == "room for one person") {
        if (feedback == "positive") {
                cost = days * 18;
                cost = cost + cost*0.25;
                console.log(cost.toFixed(2));
            } else {
                cost = days * 18;
                cost = cost - cost*0.10;
                console.log(cost.toFixed(2));
            }
//  appartment
        } else if (room == "apartment") {
            cost = days * 25;
            if (days < 10) {
                cost = cost - cost * 0.30;
                if (feedback == "positive") {
                    cost = cost + cost*0.25;
                    console.log(cost.toFixed(2));
                } else {
                    cost = cost - cost*0.10;
                    console.log(cost.toFixed(2));
            } 
        } else if (days >= 10 && days <= 15) {
                cost = cost - cost * 0.35;
                if (feedback == "positive") {               
                    cost = cost + cost*0.25;
                    console.log(cost.toFixed(2));
            } else {
                    cost = cost - cost*0.10;
                    console.log(cost.toFixed(2));
            }
        } else if (days > 15) {
            cost = cost - cost*0.50;
            if (feedback == "positive") {
                cost = cost + cost*0.25;
                console.log(cost.toFixed(2));
            } else {
                cost = cost - cost*0.10;
                console.log(cost.toFixed(2));
            }

        } 
//  president apartment
    } else if (room == "president apartment") {
        cost = days * 35;
        if (days < 10) {
            cost = cost - cost * 0.10;
            if (feedback == "positive") {
                cost = cost + cost*0.25;
                console.log(cost.toFixed(2));
            } else {
                cost = cost - cost*0.10;
                console.log(cost.toFixed(2));
        } 
    } else if (days >= 10 && days <= 15) {
            cost = cost - cost * 0.15;
            if (feedback == "positive") {               
                cost = cost + cost*0.25;
                console.log(cost.toFixed(2));
        } else {
                cost = cost - cost*0.10;
                console.log(cost.toFixed(2));
        }
    } else if (days > 15) {
        cost = cost - cost*0.20;
        if (feedback == "positive") {
            cost = cost + cost*0.25;
            console.log(cost.toFixed(2));
        } else {
            cost = cost - cost*0.10;
            console.log(cost.toFixed(2));
        }

    } 
    } 
}

solve(14, "apartment", "positive")
solve(30, "president apartment", "negative")
solve(12, "room for one person", "positive")
solve(2, "apartment", "positive")