function solve(input){
    let bitcoins = Number(input.shift());
    let iuans = Number(input.shift());
    let comission = Number(input.shift());

    let leva = bitcoins * 1168;
    let dollars = iuans*0.15;
    let dollarToLev = dollars * 1.76;
    let totalLeva = leva + dollarToLev;
    let euro = totalLeva/1.95;
    let euroFinal = euro - euro*comission/100;

    console.log(euroFinal.toFixed(2))
}

solve(["1", "5", "5"])