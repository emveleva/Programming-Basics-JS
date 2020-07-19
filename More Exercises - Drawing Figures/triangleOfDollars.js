function solve(input){
    let n = Number(input.shift());

    for (let i = 1; i <= n; i++){
        let dollars = "$";

        for (let j = 1; j < i; j++){
            dollars += " $"
        }
        console.log(dollars)
    }
}

solve([5])