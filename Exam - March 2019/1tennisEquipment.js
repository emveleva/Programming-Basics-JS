function solve(input){
    let priceRocket = Number(input.shift());
    let rockets = Number(input.shift());
    let trainers = Number(input.shift());

    let priceTrainers = priceRocket/6;

    let nm = rockets*priceRocket + trainers*priceTrainers;
    let other = nm*0.20;
    let total = nm + other;
    let jokovich = total/8;
    let sponsors = total - jokovich;

    console.log(`Price to be paid by Djokovic ${Math.floor(jokovich)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsors)}`)
}

solve([386, 7, 4])