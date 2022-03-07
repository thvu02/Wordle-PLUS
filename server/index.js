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

app.post('/addname', async (req, res) => {
  const playerName = new User(req.body);
  playerName.save()
  console.log('Successfully created!')
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

