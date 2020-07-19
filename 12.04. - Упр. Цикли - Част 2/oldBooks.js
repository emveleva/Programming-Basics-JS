function solve(input) {
    let favoriteBook = input.shift();
    let totalBooks = Number(input.shift());
    let currentBook = input.shift();
    let booksCount = 0;

    while(booksCount <= totalBooks) {
        if (currentBook == favoriteBook) {
            console.log(`You checked ${booksCount} books and found it.`)
            break;
        }
         booksCount++;
        currentBook = input.shift();
        }    
        

        if (booksCount > totalBooks) {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${totalBooks} books.`);
    }
        
       
}

solve([
    'The Spot',
    '4',
    'Hunger Games',
    'Harry Potter',
    'Torronto',
    'Spotify'
  ])