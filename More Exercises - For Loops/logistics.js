function solve(input){
    let countBagage = Number(input.shift());
    let total = 0;
    let leva = 0;
    let countBus = 0;
    let countTruck = 0;
    let countTrain = 0;

    for (let i = 1; i <= countBagage; i++){
        let bagage = Number(input.shift());
        total += bagage;
        if (bagage <= 3){
            leva = leva + bagage * 200;
            countBus += bagage;
        } else if (bagage > 3 && bagage <= 11){
            leva = leva +bagage * 175;
            countTruck += bagage;
        } else if (bagage >= 12){
            leva = leva +bagage * 120;
            countTrain += bagage;
        }
    }
    console.log((leva/total).toFixed(2));
    console.log(`${(countBus/total*100).toFixed(2)}%`);
    console.log(`${(countTruck/total*100).toFixed(2)}%`);
    console.log(`${(countTrain/total*100).toFixed(2)}%`);
    

}

solve(['2', '15', '10'])