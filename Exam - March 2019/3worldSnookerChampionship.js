function solve(input) {
    let stage = input.shift();
    let typeTicket = input.shift();
    let countTickets = Number(input.shift());
    let picture = input.shift();
    let ticketPrice = 0;
    let totalTickets = 0;

    switch (stage) {
        case "Quarter final":
            if (typeTicket == "Standard"){
                ticketPrice = 55.50;
            } else if (typeTicket == "Premium"){
                ticketPrice = 105.20;
            } else if (typeTicket == "VIP") {
                ticketPrice = 118.90;
            }
            break;
        case "Semi final":
            if (typeTicket == "Standard"){
                ticketPrice = 75.88;
            } else if (typeTicket == "Premium"){
                ticketPrice = 125.22;
            } else if (typeTicket == "VIP") {
                ticketPrice = 300.40;
            }            
            break;
        case "Final":
            if (typeTicket == "Standard"){
                ticketPrice = 110.10;
            } else if (typeTicket == "Premium"){
                ticketPrice = 160.66;
            } else if (typeTicket == "VIP") {
                ticketPrice = 400;
            }            
            break;
    }
    totalTickets = ticketPrice*countTickets;
       
    if (totalTickets > 4000) {
        totalTickets = totalTickets - totalTickets*0.25;
        picture = "N";
    } else if (totalTickets > 2500){
        totalTickets = totalTickets - totalTickets*0.10;
    }
    
    if (picture == "Y"){
        totalTickets = totalTickets + countTickets*40;
    }
    console.log(totalTickets.toFixed(2))
}

solve(["Quarter final", "Standard", 11, "N"] )