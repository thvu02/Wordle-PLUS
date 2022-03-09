# CS-35L-Team-Project---C.A.N.N.T.

## Description

FAKE WORDLE APP is an attempted by our team to recreate the famous WORDLE app officially run by The New York Times website. 

In Fake Wordle, players have the option to play the game with 4 letter word, 5 letter word or 6 letter word. Instruction is available to be viewed by simply click on the Instruction button appeared on top of the application. After the game has been played, each player stats will be posted onto leaderboard, which include the score and the number of attempt guesses each player made. Players will also be able to search for their names or other players' names in the leaderboard to specifically show their stats.  

## Key Features
  1. User accounts with ability to signup, login, and have information associated with a user
  2. Dynamic home page that displays the top trending posts at the top and renders dynamically based on if a user is logged in or not.
  3. Search for posts of specific tags or for users
  4. Like  other users posts, which is then taken into account in the trending algorithm for home page
  5. Follow/unfollow other accounts
  6. Share posts
  7. Navigation throughout the webapp

## Running the Application

Clone the Repository:

##### `git clone https://github.com/trungvu08/CS-35L-Team-Project---C.A.N.N.T..git`

##### `cd CS35L-Final-Project`

### To run the Frontend (React):

##### `cd frontend`

##### `npm install`

##### `npm start`

The app should be accessible at
[http://localhost:3000](http://localhost:3000) so you can view it in the browser.

### To setup the Backend:

##### `cd backend`

##### Create a .env file in the server folder. Add your mongodb uri to the .env file (which can be created at https://cloud.mongodb.com/) like the following:
`MONGO_DB_URI="YOUR_MONGO_DB_URI_HERE"`

### Afterwards, to run the backend (NodeJS and MongoDB):

##### `npm install`

##### `nodemon start`

This will run the backend on [http://localhost:5000](http://localhost:5000)

Once both the front end and backend are running, the application will be fully useable.