function solve(input){
    let count = Number(input.shift());
    let sumOne = Math.abs(Number(input.shift()) + Number(input.shift()));
    let sumTwo = sumOne;

    for( i = 0; i <= count; i++){
        if (sumOne - sumTwo != 0 ){
            if(Math.abs(newSum - sumTwo) > Math.abs (sumTwo - sumOne)){
                sumOne = Number(input.shift()) + Number(input.shift());
                sumTwo = newSum
            }

        }
        
                
        
    }
    if (sumOne == sumTwo) {
        console.log (`Yes, value=${sumTwo}`);
    } else {
        console.log ('No, maxdiff=' + Math.abs (sumOne - sumTwo));
    }
}

solve([ '2', '1', '2', '2', '2' ])