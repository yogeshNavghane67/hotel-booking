import Hotel from "../models/Hotel.js";
import { v2 as cloudinary} from "cloudinary"
import Room from "../models/Room.js";
import { messageInRaw } from "svix";

// Api to create a new room for a hotel
export const createRoom = async (req,res)=>{
    try {
        const {roomType, pricePerNight, amenities} = req.body;
        const hotel = await Hotel.findOne({owner: req.auth.userId})

        if(!hotel) return res.json({ success: false, message: "No Hotel found"})

        // upload images to cloudinary 
        const uploadImages = req.files.map(async (file) => {
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url;
        })

        // wait for all upload to complete
        const images = await Promise.all(uploadImages)

        await Room.create({
            hotel: hotel._id,
            roomType,
            pricePerNight: +pricePerNight,
            amenities: JSON.parse(amenities),
            images,
        })
        res.json({success: true, message: "Room Create Successfully" })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

//API to get all rooms
export const getRooms = async (req, res) =>{

}

//API to get all rooms for a specific hotel
export const getOwnerRoom = async (req,res) =>{

}

//API to toggle availability of a room
export const toogleRoomAvailability = async (req, res) => {

}