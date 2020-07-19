function solve(input){
    let n = Number(input.shift());

    for(let i = 0; i <= n; i++){
        let stars = "*".repeat(i);
        let spaces = " ".repeat(n-i);
        let body = " | ";
        let row = spaces+stars+body+stars+spaces;
        console.log(row)
    }
}

solve([5])