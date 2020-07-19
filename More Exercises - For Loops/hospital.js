function solve(input) {
    let days = Number(input.shift());
    let doctors = 7;
    let seenPatients = 0;
    let sentAway = 0;
    for (let i = 1; i <= days; i++){
        let patients = Number(input.shift());
        if (i % 3 === 0){
            if (seenPatients < sentAway){
                doctors++;
            }
        }
        if (patients <= doctors){
            seenPatients += patients;
        } else {
            let untreated = patients - doctors;
            let treated = patients - untreated;
            seenPatients += treated;
            sentAway += untreated;
        }

    }
    console.log(`Treated patients: ${seenPatients}.`);
    console.log(`Untreated patients: ${sentAway}.`)
}

solve([ '3', '7', '7', '7']

    )