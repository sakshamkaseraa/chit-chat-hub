import mongoose from "mongoose";
import mongoosem from "mongoose";

export const connectToMongoDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Connected to Database');
    } catch (error) {
        console.log('Error connecting to DataBase', error.message);
    }
}