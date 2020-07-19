function solve(arg1, arg2, arg3){
    let flower = arg1;
    let countFlowers = Number(arg2);
    let season = arg3;
    let honey = 0;

    switch (season) {
        case "Spring":
        if (flower == "Sunflower"){
            honey = countFlowers * 10;
        } else if (flower == "Lavender"){
            honey = countFlowers * 12;
        }else if (flower == "Mint"){
            honey = 10 + 10 * 0.10;
            honey = honey * countFlowers;
        } else if (flower == "Daisy");
         honey = 12 + 12 * 0.10;
         honey = honey * countFlowers;
        
            break;
        case "Summer":
        if (flower == "Sunflower" || flower == "Daisy" || flower == "Lavender"){
            honey = countFlowers * 8;
        } else if (flower == "Mint"){
            honey = countFlowers * 12;
        }
        honey = honey + honey * 0.10;
        break;
        case "Autumn":
            if (flower == "Sunflower" ){
                honey = countFlowers * 12;
            } else if (flower == "Daisy" || flower == "Lavender" || flower == "Mint"){
                honey = countFlowers * 6;
            }
            honey = honey - honey * 0.05;
            break;
    
    }
    console.log(`Total honey harvested: ${honey.toFixed(2)}`)
}

solve("Daisy", "10", "Spring")