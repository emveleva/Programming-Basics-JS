function solve(num, arg){
    let km = Number(num);
    let timeOfDay = arg;
    let money = 0;


if (km < 20) {
    if(timeOfDay == "day") {
        money = 0.70 + km*0.79;
    } else {
        money = 0.70+ km*0.90;
    }}    
else if ( km >= 20 && km < 100) {
    money = km*0.09;
}
else if ( km >= 100) {
    money = km*0.06;
}
console.log(money.toFixed(2))

}

solve(180, "night")