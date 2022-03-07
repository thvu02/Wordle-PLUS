
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

export {
    isValidWord
};
