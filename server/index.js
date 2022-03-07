import mongoose from 'mongoose';
import express from 'express';
const app = express();
import cors from 'cors';
import User from './models/player.js'
import {} from 'dotenv/config'

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://canntcs35l:Mypasswordis123@fakewordle.fg6h8.mongodb.net/Player?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

app.post('/addname', async (req, res) => {
  const playerName = new User(req.body);
  playerName.save()
  console.log('Successfully created ${playerName}')
  return res.status(200).json(playerName);
});

app.get("/", async (req, res) => {
  User.find({})
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});

