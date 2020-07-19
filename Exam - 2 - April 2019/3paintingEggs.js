function solve(input){
    let size = input.shift();
    let color = input.shift();
    let count = Number(input.shift());
    let cost = 0;

    switch (size) {
        case "Large":
            if(color == "Red"){
                cost = count * 16;
            } else if (color == "Green"){
                cost = count * 12;
            } else if (color == "Yellow"){
                cost = count * 9;
            }
            break;
        case "Medium":
            if(color == "Red"){
                cost = count * 13;
            } else if (color == "Green"){
                cost = count * 9;
            } else if (color == "Yellow"){
                cost = count * 7;
            }            
            break;
        case "Small":
            if(color == "Red"){
                cost = count * 9;
            } else if (color == "Green"){
                cost = count * 8;
            } else if (color == "Yellow"){
                cost = count * 5;
            }
            break;
    }
    let consumables = cost * 0.35;
    cost -= consumables;
    console.log(`${cost.toFixed(2)} leva.`)
}

solve(["Large", "Red", "7"])