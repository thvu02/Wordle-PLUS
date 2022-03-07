import mongoose from 'mongoose';
const schema = mongoose.Schema;

const userSchema = new schema({
    playername: {
        type: String,
        required: true,
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;