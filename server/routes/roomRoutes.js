import express from "express";
import { createRoom, getOwnerRoom, getRooms, toggleRoomAvailability } from "../controllers/roomController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const roomRouter = express.Router();

roomRouter.post('/', upload.array("images", 4), protect, createRoom)
roomRouter.get('/',getRooms)
roomRouter.get('/owner', protect, getOwnerRoom)
roomRouter.post('/toggle-availability', protect, toggleRoomAvailability)


export default roomRouter;