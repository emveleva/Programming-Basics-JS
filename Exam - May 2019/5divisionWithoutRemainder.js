function solve(input){
    let n = Number(input.shift());
    let rem2 = 0;
    let rem3 = 0;
    let rem4 = 0;

    for (let i = 0; i <= n; i++){
        let number = Number(input.shift());
        if (number % 2 == 0){
            rem2++;
        } if (number % 3 == 0){
            rem3++;
        } if (number % 4 == 0){
            rem4++;
        }
        }
        let percentRem2 = rem2/n*100;
        let percentRem3 = rem3/n*100;
        let percentRem4 = rem4/n*100;
        console.log(`${percentRem2.toFixed(2)}%`);
        console.log(`${percentRem3.toFixed(2)}%`);
        console.log(`${percentRem4.toFixed(2)}%`);
}

solve([ '3', '3', '6', '9' ]
  )