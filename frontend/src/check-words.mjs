
import {fiveLetters} from './five-letters.mjs';
import {fourLetters} from './four-letters.mjs';
import {sixLetters} from './six-letters.mjs';
import {fiveAnswers} from './five-answers.mjs';

/* Returns a bool representing whether word is a valid guess
 given the wordLength being guessed from (number of boxes) */
function isValidWord(word, wordLength) {
    console.log("isvalidword being called!");
    word = word.toLowerCase();
    if (word.length != wordLength) {
        return false;
    } else {
        var wordBank;
        // determine which word bank file to read from based on word length
        switch (wordLength) {
            case 4:
                wordBank = fourLetters;
                break;
            case 6:
                wordBank = sixLetters;
                break;
            case 5:
            default:
                wordBank = fiveLetters;
        }
        
        if (wordBank.includes(word)) {
            return true;
        } else {
            return false;
        }
    }

}


/* Takes the guess and answer words and returns an array of strings
indicating what the color of each box in the guessed word should be. */
function correctLetters(guess, answer) {
    var answerLetters = {};
    var guessLetters = {};
    var result = [];

    /* Create a dictionary answerLetters which stores each letter
    in the answer as a key with the value of how many times
    that letter appears in the answer. */
    for (let i = 0; i < answer.length; i++) {
        if (answerLetters.hasOwnProperty(answer[i])) {
            answerLetters[answer[i]]++;
        } else {
            answerLetters[answer[i]] = 1;
        }
    }
    
    /* Make a first pass through each letter in the guess.
    Set the result to green if letter is in right place. */
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
    
    /* Second pass through each letter in guess.
    Determine which of the "gray" letters should actually be "yellow". */
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] != answer[i]) {
            // Add to the guess letters dictionary
            if (guessLetters.hasOwnProperty(guess[i])) {
                guessLetters[guess[i]]++;
            } else {
                guessLetters[guess[i]] = 1;
            }
            /* Only letters which appear in answer but haven't been used
             too many times already are marked yellow. */
            if (answerLetters.hasOwnProperty(guess[i]) 
                   && guessLetters[guess[i]] <= answerLetters[guess[i]]){
            
                result[i] = "yellow";
            }
        }
    }

    return result;
}


/* Takes a dictionary with keys for each letter of the alphabet.
Values in the dict are the color of the keys on the keyboard, either
"gray", "yellow", or "green". Also takes the guess word and answer as
arguments. Returns the dictionary with any necessary modifications to the
colors based on the guess word.
The keys in the dict, guess, and answer should be passed in all lowercase letters.*/
function keyColors(keyboard, guess, answer) {
    var newColors = correctLetters(guess,answer);
    for (let i = 0; i < guess.length; i++) {
        var letterColor = newColors[i];
        switch (letterColor) {
            case "green":
                keyboard[guess[i]] = "green";
                break;
            case "yellow":
                if (keyboard[guess[i]] == "lightgray") {
                    keyboard[guess[i]] = "yellow";
                }
                break;
        }
    }
    return keyboard;
}

/* Takes array of colors of the guess letters and
returns true if the player won the game.
Pass in the result of keyColors. */
function wonGame(boxColors) {
    var result = true;
    for (let i in boxColors) {
        if (boxColors[i] != "green") {
            result = false;
            break;
        }
    }
    return result;
}

function getRandomWord(wordLength) {
    var wordBank;
    switch (wordLength) {
        case 4:
            wordBank = fourLetters;
            break;
        case 6:
            wordBank = sixLetters;
            break;
        case 5:
        default:
            wordBank = fiveAnswers;
    }
    return wordBank[Math.floor(Math.random() * wordBank.length)];
}


export {
    isValidWord,
    correctLetters,
    keyColors,
    wonGame,
    getRandomWord
};
