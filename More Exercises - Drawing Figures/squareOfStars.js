function solve(input){
    let number = Number(input.shift());
    
    for (let i = 1; i <= number; i++){
        let stars = "*";
        for (let j = 1; j < number; j++){
            stars += " *"
        }
        console.log(stars);
    }

}

solve(["5"])