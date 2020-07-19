function solve(input){
    let firstPair = Number(input.shift());
    let secondPair = Number(input.shift());
    let firstDiff = Number(input.shift());
    let secondDiff = Number(input.shift());
    
 
            for (let first = firstPair; first <= firstPair + firstDiff; first++){
                for (let second = secondPair; second <= secondPair + secondDiff; second++){
                    let firstSqrt = Math.floor(Math.sqrt(first));
                    let secondSqrt = Math.floor(Math.sqrt(second));
                    let isPrime1 = true;
                    let isPrime2 = true;
 
                    for (let first1 = 2; first1 <= firstSqrt; first1++){
                        if (first % first1 == 0)
                        {
                            isPrime1 = false;
                        }
                    }
                    for (let second2 = 2; second2 <= secondSqrt; second2++)
                    {
                        if (second % second2 == 0)
                        {
                            isPrime2 = false;
                        }
                    }
                    if (isPrime1 == true && isPrime2 == true)
                    {
                        console.log(`${first}${second}`);
                    }

                }
            }
 
        }

        solve([10, 20, 5, 5])