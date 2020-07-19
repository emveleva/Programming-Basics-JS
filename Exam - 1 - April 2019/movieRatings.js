function solve(input){
    let movieCount = Number(input.shift());
    let ratingTotal = 0;
    let highestMovie = '';
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let movieName = "";
    let lowestMovie = "";

    for (let i = 0; i < movieCount; i++){
        movieName = input.shift();
        let rating = Number(input.shift());
        if (maxNumber < rating) {
            maxNumber = rating;
            highestMovie = movieName;
        } else if (minNumber > rating) {
            minNumber = rating;
            lowestMovie = movieName;
        }
    
    
        
        ratingTotal += rating;
        
    }
    let average = ratingTotal/movieCount;
   console.log(`${highestMovie} is with highest rating: ${maxNumber.toFixed(1)}`);
   console.log(`${lowestMovie} is with lowest rating: ${minNumber.toFixed(1)}`);
   console.log(`Average rating: ${average.toFixed(1)}`)
}

solve(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Caprain Marvel", "7.1"])
