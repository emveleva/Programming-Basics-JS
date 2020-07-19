function solve(input) {
    let goal = 10000;
    let element = '';
    let totalSteps = 0;
    let steps = 0;
    let result = true;

    while (element != "Going home") {    
        element = input.shift()
        if (element == "Going home") {
            element = input.shift();
            steps = Number(element);
            totalSteps += steps;
            break;
            
        }
        steps = Number(element);
        totalSteps += steps;
        
        if (totalSteps >= goal) {
            console.log(`Goal reached! Good job!`)
            result = false;
            break;
        }
            
        
        
    
    }
    if (totalSteps < goal) {
        let stepsLeft = goal - totalSteps;
        console.log(`${stepsLeft} more steps to reach goal.`)
    } else if  (totalSteps >= goal && result != false) {
        console.log(`Goal reached! Good job!`)
}
}
solve([ '125', '250', '4000', '30', '2678', '4682' ]
)
