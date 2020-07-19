function solve(num1, num2, num3, arg, arg2) {
    let hrizantemi = Number(num1);
    let roses = Number(num2);
    let laleta = Number(num3);
    let season = arg;
    let holiday = arg2;

    switch (season) {
        case "Spring":
        case "Summer":
            priceHrizantemi = 2.00;
            priceRoses = 4.10;
            priceLaleta = 2.50;
                        
            break;
    
        case "Autumn":
        case "Winter":
            priceHrizantemi = 3.75;
            priceRoses = 4.50;
            priceLaleta = 4.15;
                    
            break;
    }
    let costHrizantemi = hrizantemi*priceHrizantemi;
    let costRozi = roses*priceRoses;
    let costLaleta = laleta*priceLaleta;
    let totalCost = costHrizantemi+costLaleta+costRozi;
    if (holiday == "Y"){
        totalCost = totalCost + totalCost*0.15;
    }
    let totalFlowers = hrizantemi+roses+laleta;

    if (laleta > 7 && season == "Spring") {
        totalCost = totalCost -totalCost*0.05;
    }
    if (roses >= 10 && season == "Winter") {
        totalCost = totalCost - totalCost*0.10;
    }
    if (totalFlowers > 20) {
        totalCost = totalCost - totalCost*0.20;
    }
    let finalCost = totalCost+2;
    console.log(finalCost.toFixed(2));

}

solve(10, 10, 10, "Autumn", "N")