function solve(arg1, arg2){
    let budget = Number(arg1);
    let season = arg2;
    let location = "";
    let cost = 0;
    let place = "";


    if (budget <= 1000){
        place = "Camp";
        switch (season) {
            case "Summer":
                location = "Alaska";
                cost = budget * 0.65;
                
                break;
        
            case "Winter":
                location = "Morocco";
                cost = budget*0.45;
                break;
        }
    } else if (budget >1000 && budget <= 3000){
        place = "Hut";
        switch (season) {
            case "Summer":
                location = "Alaska";
                cost = budget * 0.80;
                
                break;
        
            case "Winter":
                location = "Morocco";
                cost = budget*0.60;
                break;
        }
    } else {
        place = "Hotel";
        cost = budget * 0.90;
        switch (season) {
            case "Summer":
                location = "Alaska";
                break;
        
            case "Winter":
                location = "Morocco";
                break;
        }
    }
    console.log(`${location} - ${place} - ${cost.toFixed(2)}`)
}

solve("800", "Summer")