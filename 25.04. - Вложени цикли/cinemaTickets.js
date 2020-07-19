function solve(input){
    let inputText = input.shift();
    let counter = 0;
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    
        while (inputText != "Finish"){
            
            let totalSeats = Number(input.shift());
            let movieName = inputText;
            let percentMovie = 0;     
            
            counter = 0
            while (counter <= totalSeats){
                inputText = input.shift();
                
                
                if (inputText == "End" || inputText == "Finish" || counter >= totalSeats){
                    console.log(`${movieName} - ${percentMovie.toFixed(2)}% full.`)
                    break;
                }
                if (inputText == "student"){
                    studentTickets++;
                } else if (inputText == "standard"){
                    standardTickets++;
                }
                else if (inputText == "kid"){
                    kidsTickets++;
                }
                counter++;
                percentMovie = counter/totalSeats*100;
            }
            totalTickets += counter;
            // if (inputText == "Finish") {
                
            //     break;
            // }
            inputText = input.shift();
            
           
        }
        console.log(`Total tickets: ${totalTickets}`);
        console.log(`${(studentTickets/totalTickets*100).toFixed(2)}% student tickets.`);
        console.log(`${(standardTickets/totalTickets*100).toFixed(2)}% standard tickets.`);
        console.log(`${(kidsTickets/totalTickets*100).toFixed(2)}% kids tickets.`);
        
    
        

}

solve([
    'The Matrix', '20',
    'student',    'standard',
    'kid',        'kid',
    'student',    'student',
    'standard',   'student',
    'End',        'The Green Mile',
    '17',         'student',
    'standard',   'standard',
    'student',    'standard',
    'student',    'End',
    'Amadeus',    '3',
    'standard',   'standard', 'standard',
    'standard',   'Finish'
  ]
  
  )