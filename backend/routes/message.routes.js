import express from "express";
import { sendMessage, getMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post('/send/:receiverId', protectRoute, sendMessage);
router.get('/:senderId', protectRoute, getMessage);

export default router;