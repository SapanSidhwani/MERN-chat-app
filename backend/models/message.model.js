import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

//Export the model
const Message = mongoose.model('Message', messageSchema);
export default Message;