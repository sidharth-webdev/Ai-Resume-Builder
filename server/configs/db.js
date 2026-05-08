import mongoose from "mongoose";
import dns from "dns";

dns.setServers(['8.8.8.8', '8.8.4.4']); // need to remove in producion 

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Database connected successfully");
        });

        let mongodbURI = process.env.MONGODB_URI;
        const projectName = 'resume-builder';

        if (!mongodbURI) {
            throw new Error("MONGODB_URI environment variable not set");
        }

        if (mongodbURI.endsWith('/')) {
            mongodbURI = mongodbURI.slice(0, -1);
        }

        await mongoose.connect(`${mongodbURI}/${projectName}?retryWrites=true&w=majority`, {
            serverSelectionTimeoutMS: 30000,
            family: 4
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectDB;  