function solve(input){
    let movie = input.shift();
    let totalTicketsSold = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;

    while (movie != "Finish") {
        let totalSeats = Number(input.shift());
        let soldTickets = 0;

        let ticket = input.shift();
        while (ticket != "End"){
            soldTickets++;
            if (ticket == "student"){
                studentTickets++;
            } else if (ticket == "standard"){
                standardTickets++;
            }
            else if (ticket == "kid"){
                kidsTickets++;
            }
            totalTicketsSold++;
            if (soldTickets >= totalSeats){
                break;
            }

            ticket = input.shift();
        }
        let percentFull = soldTickets/totalSeats*100;
        console.log(`${movie} - ${percentFull.toFixed(2)}% full.`)
        movie = input.shift();
    }
    console.log(`Total tickets: ${totalTicketsSold}`);
    console.log(`${(studentTickets/totalTicketsSold*100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets/totalTicketsSold*100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTickets/totalTicketsSold*100).toFixed(2)}% kids tickets.`);
}

solve([
    'Taxi',     '10',
    'standard', 'kid',
    'student',  'student',
    'standard', 'standard',
    'End',      'Scary Movie',
    '6',        'student',
    'student',  'student',
    'student',  'student',
    'student',  'Finish'
  ]
  )