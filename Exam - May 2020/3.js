function solve(arg1, arg2, arg3){
    let flower = arg1;
    let countFlowers = Number(arg2);
    let season = arg3;
    let honey = 0;

    if (season == "Spring" && flower == "Sunflower"){
        honey = countFlowers * 10;
    } else if (season == "Spring" && flower == "Daisy"){
        honey = countFlowers * (12 + 12 * 0.10);
    } else if (season == 'Spring' && flower == "Lavender"){
        honey = countFlowers * 12;
    } else if (season == "Spring" && flower == "Mint"){
        honey = countFlowers * (10 + 10 * 0.10);
    } else if (season == "Summer" && flower == "Sunflower"){
        honey = countFlowers * 8;
        honey = honey + honey * 0.10;
    } else if (season == "Summer" && flower == "Daisy"){
        honey = countFlowers * 8;
        honey = honey + honey * 0.10;
    } else if (season == "Summer" && flower == "Lavender"){
        honey = countFlowers * 8;
        honey = honey + honey * 0.10;
    } else if (season == "Summer" && flower == "Mint"){
        honey = countFlowers * 12;
        honey = honey + honey * 0.10;
    } else if (season == "Autumn" && flower == "Sunflower"){
        honey = countFlowers * 12;
        honey = honey - honey * 0.05;
    } else if (season == "Autumn" && flower == "Daisy"){
        honey = countFlowers * 6;
        honey = honey - honey * 0.05;
    } else if (season == "Autumn" && flower == "Lavender"){
        honey = countFlowers * 6;
        honey = honey - honey * 0.05;
    }else if (season == "Autumn" && flower == "Mint"){
        honey = countFlowers * 6;
        honey = honey - honey * 0.05;
    }
    console.log(`Total honey harvested: ${honey.toFixed(2)}`)
}

solve("Sunflower", "11", "Autumn")