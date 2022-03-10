import mongoose from 'mongoose';
import 'dotenv/config';
import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import User from './models/player.js';

const url = process.env.MONGO_DB_URI

app.use(cors());
app.use(express.json());

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});


// TODO: Find way to update profile as we continue
//       through the code (playerScore, gameVersion)
//       Idea: set playerName as const var; import to
//             other folders and using .update()

app.post('/addname', async (req, res) => {
  const new_user = new User({
    playerName: req.body.playerName,
    playerScore: "TO_BE_FILLED",
    gameVersion: "TO_BE_FILLED"
  });
  new_user.save()
  console.log('Successfully created!')
  return res.status(200).json(new_user);
});

app.get("/", async (req, res) => {
  User.find({})
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err));
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

