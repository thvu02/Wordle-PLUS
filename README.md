# CS-35L-Team-Project---C.A.N.N.T.

## Description

FAKE WORDLE WEBAPP is an attempted by our team to recreate the famous WORDLE app officially run by The New York Times website. 

In Fake Wordle, players have the option to play the game with either 4 letter word, 5 letter word or 6 letter word. Instruction is available to be viewed by simply clicking on the Instruction button appeared on top of the app.

Player must enter a name and click on the PLAY button to play the game. After the game has been played, each player stats will be posted onto leaderboard, which include the score and the number of attempt guesses each player made. Players will also be able to search for their names or other players' names in the leaderboard to specifically show their stats.  

## Key Features
  1. Dynamic Homepage with buttons allowing players to navigate through the webapp and enter their names. 
  2. Upload Name entered by the player to the server side to keep track of the player stats.  
  3. Game Instruction as a react-modal component that displays the instruction on how to play the game to players when they clicked on the Instruction button.
  4. Dynamic Gamepage with a gameboard and a keyboard that changes colors when the player entered the guesses word. 
  5. The ability for Player to use their manual keyboard to input the letter into the gameboard instead of using the provided keyboard onscreen.
  6. The ability for Player to choose between playing the game with 4 letter words, 5 letter words or 6 letter words. The Word of the day will change based on the option you choose. 
  7. Leaderboard Page that display dynamic datas such as player names, score and the number of guesses each player made out of 6 after the player played the game. 
  8. Ability to seach through the Leaderboard for a player name to be shown along with their score and number of guesses.  

## Running the Application

Clone the Repository:

##### `git clone https://github.com/trungvu08/CS-35L-Team-Project---C.A.N.N.T..git CANNT`

##### `cd CANNT`

### To run the Frontend (React):

##### `cd frontend`

##### `npm install`

##### `npm start`

The app should be accessible at
[http://localhost:3000](http://localhost:3000) so you can view it in the browser.

### To setup the Backend:

##### `cd server`

##### Create a .env file in the server folder. Add your mongodb uri to the .env file (which can be created at https://cloud.mongodb.com/) like the following:
`MONGO_DB_URI=<YOUR_MONGO_DB_URI_HERE>`

##### Replace <YOUR_MONGO_DB_URI_HERE> with the MONGO_DB_URI you obtained from the database you created at https://cloud.mongodb.com/

### Afterwards, to run the backend (NodeJS and MongoDB):

##### `npm install`

##### `nodemon start`

This will run the backend on [http://localhost:5000](http://localhost:5000)

Once both the front end and backend are running, the application will be fully useable.