function solve(input){
    let recordSeconds = Number(input.shift());
    let distanceMeters = Number(input.shift());
    let timeFor1Meter = Number(input.shift());
    
    let timeGeorgi = distanceMeters * timeFor1Meter;
 
    timeGeorgi = timeGeorgi + Math.floor(distanceMeters/50)*30;

    if (timeGeorgi < recordSeconds){
        console.log(`Yes! The new record is ${timeGeorgi.toFixed(2)} seconds.`)
    } else {
        let needed = timeGeorgi - recordSeconds;
        console.log(`No! He was ${needed.toFixed(2)} seconds slower.`)
    }
}

solve(["5554.36", "1340", "3.23"])