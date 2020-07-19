function solve(input) {
    let movieName = input.shift();
    let typeRoom = input.shift();
    let tickets = Number(input.shift());
    let ticketCost = 0;

    switch (typeRoom) {
        case "normal":
            if (movieName == "A Star Is Born"){
                ticketCost = tickets * 7.50;
            } else if (movieName == "Bohemian Rhapsody"){
                ticketCost = tickets * 7.35;
            } else if (movieName == "Green Book"){
                ticketCost = tickets * 8.15;
            } else if (movieName == "The Favourite"){
                ticketCost = tickets * 8.75;
            }
            break;
        case "luxury":
            if (movieName == "A Star Is Born"){
                ticketCost = tickets * 10.50;
            } else if (movieName == "Bohemian Rhapsody"){
                ticketCost = tickets * 9.45;
            } else if (movieName == "Green Book"){
                ticketCost = tickets * 10.25;
            } else if (movieName == "The Favourite"){
                ticketCost = tickets * 11.55;
            }
            
            break;
        case "ultra luxury":
            if (movieName == "A Star Is Born"){
                ticketCost = tickets * 13.50;
            } else if (movieName == "Bohemian Rhapsody"){
                ticketCost = tickets * 12.75;
            } else if (movieName == "Green Book"){
                ticketCost = tickets * 13.25;
            } else if (movieName == "The Favourite"){
                ticketCost = tickets * 13.95;
            }
            
            break;
    }
    console.log(`${movieName} -> ${ticketCost.toFixed(2)} lv.`)
}

solve(["A Star Is Born", "luxury", "42"])