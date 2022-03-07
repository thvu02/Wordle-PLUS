
import fs from 'fs';

/* Returns a bool representing whether word is a valid guess
 given the wordLength being guessed from (number of boxes) */
function isValidWord(word, wordLength) {
    if (word.length != wordLength) {
        return false;
    } else {
        var path;
        // determine which word bank file to read from based on word length
        switch (wordLength) {
            case 4:
                path = '../../wordbank/fourLetters.txt';
                break;
            case 6:
                path = '../../wordbank/sixLetters.txt';
                break;
            case 5:
            default:
                path = '../../wordbank/fiveLetters.txt';
        }
        const wordBank = fs.readFileSync(path, "utf8");
        if (wordBank.includes(word)) {
            return true;
        } else {
            return false;
        }
    }

}

function correctLetters(guess, answer) {
    var result = [];

    /* Create a dictionary answerLetters which stores each letter
    in the answer as a key with the value of how many times
    that letter appears in the answer. */
    var answerLetters = {};
    for (let i = 0; i < answer.length; i++) {
        if (answerLetters.hasOwnProperty(answer[i])) {
            answerLetters[answer[i]]++;
        } else {
            answerLetters[answer[i]] = 1;
        }
    }
    
    var guessLetters = {};
    for (let i = 0; i < guess.length; i++) {
        /* Setting up dictionary for what letters have
        appeared in the guess thus far. */
        if (guess[i] == answer[i]) {
            result.push("green");
            if (guessLetters.hasOwnProperty(guess[i])) {
                guessLetters[guess[i]]++;
            } else {
                guessLetters[guess[i]] = 1;
            }
        } else {
            result.push("gray");
        }
    }
    
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] != answer[i]) {
            if (guessLetters.hasOwnProperty(guess[i])) {
                guessLetters[guess[i]]++;
            } else {
                guessLetters[guess[i]] = 1;
            }
            if (answerLetters.hasOwnProperty(guess[i]) 
                   && guessLetters[guess[i]] <= answerLetters[guess[i]]){
            
                result[i] = "yellow";
            }
        }
    }

    return result;
}





export {
    isValidWord,
    correctLetters
};
