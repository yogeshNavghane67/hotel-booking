import Hotel from "../models/Hotel";

// Api to create a new room for a hotel
export const createRoom = async (req,res)=>{
    try {
        const {roomType, pricePerNight, amenities} = req.body;
        const hotel = await Hotel.findOne({owner: req.auth.userId})

        if(!hotel) return res.json({ success: false, message: "No Hotel found"})
    } catch (error) {
        
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