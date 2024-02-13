import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        // You are a Sender
        const { receiverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({ senderId, receiverId, message });
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage);
    } catch (error) {
        console.log('Error in sendMessage Controller', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getMessage = async (req, res) => {
    try {
        // You are a Receiver
        const { senderId } = req.params;
        const receiverId = req.user._id;
        console.log(senderId, receiverId);

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate("messages"); // Not reference but the actual messages   

        if (!conversation) {
            return res.status(200).json([]);
        }


        res.status(200).json(conversation.messages)
    } catch (error) {
        console.log('Error in getMessage Controller', error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}