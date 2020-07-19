function solve(input){
    let inputt = input.shift();
    let word = '';
    let nCounter = 0;
    let cCounter = 0;
    let oCounter = 0;
    let finishedWord = '';

    while (inputt != "End")
        {
            
            if(inputt>='a'&& inputt<='z'|| inputt >= 'A' && inputt <= 'Z')
            {
                if (inputt == "n" && nCounter < 2)
                {
                    if (nCounter < 1)
                    {
                        nCounter++;
                    }
                    else
                    {
                        word += inputt;
                    }

                }
                else if (inputt == "o")
                {
                    if (oCounter < 1)
                    {
                        oCounter++;
                    }
                    else
                    {
                        word += inputt;
                    }

                }
                else if (inputt == "c")
                {
                    if (cCounter < 1)
                    {
                        cCounter++;
                    }
                    else
                    {
                        word += inputt;
                    }
                }
                else
                {
                    word += inputt;
                }

                if (nCounter > 0 && cCounter > 0 && oCounter > 0)
                {
                    oCounter = 0;
                    nCounter = 0;
                    cCounter = 0;
                    finishedWord = finishedWord + word + " ";
                    word = "";
                }
                inputt = input.shift();
            }                 else
            {
                inputt = input.shift();
            }
           

        
        

       
    
    
}
console.log(finishedWord)
}


solve([
    '%', '!',   'c',  '^',
    'B', '`',   'o',  '%',
    'o', 'o',   'M',  ')',
    '{', 'n',   '\\', 'A',
    'D', 'End'
  ])