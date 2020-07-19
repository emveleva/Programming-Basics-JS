function solve(input){
    let hikersGroups = Number(input.shift());
    let musala = 0;
    let monblan = 0;
    let kilim = 0;
    let k2 = 0;
    let everest = 0;
    let people = 0;
    
    for (let i = 1; i <= hikersGroups; i++){
        let peopleInGroup = Number(input.shift());
        people += peopleInGroup
        if (peopleInGroup <= 5){
            musala += peopleInGroup;
        } else if (peopleInGroup <= 12){
            monblan += peopleInGroup;
        } else if (peopleInGroup <= 25){
            kilim += peopleInGroup;
        } else if (peopleInGroup <= 40){
            k2 += peopleInGroup;
        } else {
            everest += peopleInGroup;
        }

    }
    console.log(`${(musala/people*100).toFixed(2)}%`);
    console.log(`${(monblan/people*100).toFixed(2)}%`);
    console.log(`${(kilim/people*100).toFixed(2)}%`);
    console.log(`${(k2/people*100).toFixed(2)}%`);
    console.log(`${(everest/people*100).toFixed(2)}%`);
}

solve([ '5', '25', '41', '31', '250', '6' ]
)