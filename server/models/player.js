import mongoose from 'mongoose';

const schema = mongoose.Schema;

const userSchema = new schema({
    playerName: {
        type: String,
    },
    playerScore: {
        type: String,
    },
    gameVersion: {
        type: String,
    }
})

const User = mongoose.model("User", userSchema);

export default User;