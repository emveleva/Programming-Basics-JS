function solve(input){
    let budgetForActors = Number(input.shift());
    let budget = budgetForActors;
    let currentLine = input.shift();
    let pay = 0;
    let notEnough = false;

    while (currentLine != "ACTION"){
        let actor = currentLine;
        if(actor.length > 15){
            pay = budgetForActors*0.20;
        } else {
            pay = Number(input.shift())
        }
        if(budgetForActors >= pay){
            budgetForActors -= pay;
        } else {
            notEnough = true;
            break;
        }
        currentLine = input.shift();
        

    }
    if (notEnough){
        let needed = pay - budgetForActors;
        console.log(`We need ${needed.toFixed(2)} leva for our actors.`)
    } else {

        console.log(`We are left with ${budgetForActors.toFixed(2)} leva.`)
    }
}

solve([ '1000', 'John Cena', '800', 'Freddy Kim', '3000', 'ACTION' ])