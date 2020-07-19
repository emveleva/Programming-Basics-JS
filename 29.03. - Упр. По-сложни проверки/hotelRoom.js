function solve(month, num) {
    let days = Number(num);
    let studio = 0;
    let ap = 0;

    switch (month) {
        case "May":
        case "October":
            studio = 50;
            ap = 65; 
            if (days > 7 && days <= 14) {
                studio = studio - studio*0.05;
            } else if (days > 14) {
                studio = studio - studio*0.30;
                ap = ap - ap*0.10;
            }  
            
            break;
        case "June":
        case "September":
            studio = 75.20;
            ap = 68.70;   
            if (days > 14) {
                studio = studio - studio*0.20;
                ap = ap - ap*0.10;
            }
            break;
        case "July":
        case "August":
            studio = 76;
            ap = 77;   
            if (days > 14) {
                ap = ap - ap*0.10;       }    
            break;
    }


   studio = studio * days;
    ap = ap*days;
    console.log(`Apartment: ${ap.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`)
}


// solve("May", 15);
// solve("June", 14);
solve("August", 20)