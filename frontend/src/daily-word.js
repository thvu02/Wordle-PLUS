// // node-cron doesn't support es6
// import pkg from 'node-cron';
// import fs from 'fs';
// const { schedule } = pkg;

// var dailyWord4 = getRandomWord(4);
// var dailyWord5 = getRandomWord(5);
// var dailyWord6 = getRandomWord(6);

// // choose new words every day
// schedule('0 0 * * *', function() {
//   dailyWord4 = getRandomWord(4);
//   dailyWord5 = getRandomWord(5);
//   dailyWord6 = getRandomWord(6);

// });


// function getRandomWord(wordLength){
//   var path;
//   // determine which word bank file to read from based on word length
//   switch (wordLength) {
//       case 4:
//           path = '../wordbank/fourLetters.txt';
//           break;
//       case 6:
//           path = '../wordbank/sixLetters.txt';
//           break;
//       case 5:
//       default:
//           path = '../wordbank/answers.txt';
//   }
//   const wordBank = fs.readFileSync(path, "utf8");
//   // split data into lines at newlines
//   var lines = wordBank.split('\n');
      
//   // choose one of the lines
//   var line = lines[Math.floor(Math.random()*lines.length)]
  
//   return line;
// }

var dailyWord4 = "LOVE";
var dailyWord5 = "MOUTH";
var dailyWord6 = "ARTIST";

export {
  dailyWord4,
  dailyWord5,
  dailyWord6
};