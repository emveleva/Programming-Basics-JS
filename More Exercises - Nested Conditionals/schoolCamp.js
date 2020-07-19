function solve(arg1, arg2, arg3, arg4){
    let season = arg1;
    let typeOfGroup = arg2;
    let countStudents = Number(arg3);
    let nights = Number(arg4);
    let pricePerNight = 0;
    let sport = "";

    switch (season) {
        case "Winter":
            if (typeOfGroup == "boys"){
                pricePerNight = 9.60;
                sport = "Judo";
            } else if (typeOfGroup == "girls"){
                pricePerNight = 9.60;
                sport = "Gymnastics"
            } else if (typeOfGroup == "mixed"){
                pricePerNight = 10;
                sport = "Ski";
            }
            
            break;
    
        case "Spring":
            if (typeOfGroup == "boys"){
                pricePerNight = 7.20;
                sport = "Tennis";
            } else if (typeOfGroup == "girls"){
                pricePerNight = 7.20;
                sport = "Athletics";
            } else if (typeOfGroup == "mixed"){
                pricePerNight = 9.50;
                sport = "Cycling";
            }
            break;

        case "Summer":
            if (typeOfGroup == "boys"){
                pricePerNight = 15;
                sport = "Football";
            } else if (typeOfGroup == "girls"){
                pricePerNight = 15;
                sport = "Volleyball";
            } else if (typeOfGroup == "mixed"){
                pricePerNight = 20;
                sport = "Swimming";
            }

        break;
    }
    let pay = pricePerNight * nights * countStudents;
    if (countStudents >= 10 && countStudents < 20){
        pay = pay - pay * 0.05;
    } else if (countStudents >= 20 && countStudents < 50 ) {
        pay = pay - pay * 0.15; 
    } else if (countStudents >= 50){
        pay = pay - pay * 0.50;
    }
    console.log(`${sport} ${pay.toFixed(2)} lv.`)
}

solve("Spring", "mixed", "17", "14")