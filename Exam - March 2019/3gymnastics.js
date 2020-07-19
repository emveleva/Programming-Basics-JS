function solve(input) {
    let country = input.shift();
    let app = input.shift();
    let difficulty = 0;
    let performance = 0;

    switch (country) {
        case "Russia":
            if (app == "ribbon"){
                difficulty = 9.100;
                performance = 9.400;
            } else if (app == "hoop"){
                difficulty = 9.300;
                performance = 9.800;
            } else if (app == "rope"){
                difficulty = 9.600;
                performance = 9.000;
            }
            break;
        case "Bulgaria":
            if (app == "ribbon"){
                difficulty = 9.600;
                performance = 9.400;
            } else if (app == "hoop"){
                difficulty = 9.550;
                performance = 9.750;
            } else if (app == "rope"){
                difficulty = 9.500;
                performance = 9.400;
            }
            break;
        case "Italy":
            if (app == "ribbon"){
                difficulty = 9.200;
                performance = 9.500;
            } else if (app == "hoop"){
                difficulty = 9.450;
                performance = 9.350;
            } else if (app == "rope"){
                difficulty = 9.700;
                performance = 9.150;
            }
            
            break;
    }
    let totalPoints = difficulty+performance;
    let tillPerfect = 100-totalPoints/20*100;
    console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${app}.`);
    console.log(`${tillPerfect.toFixed(2)}%`)
}

solve(["Russia", "rope"])