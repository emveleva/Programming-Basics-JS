function solve(num1, num2){
    let students = Number(num1);
    let problems = Number(num2);

    
    let solve = students * Math.ceil(problems * 2.8);
    let extra = students* Math.floor(problems/3);
    solve += extra;

    let ram = 5 * Math.ceil(solve/10);

    console.log(`${ram} KB needed`);
    console.log(`${solve} submissions`)
}
solve(25,10)