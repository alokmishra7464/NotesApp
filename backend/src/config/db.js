import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("DataBase connected!");
    }
    catch(error) {
        console.log("DB connection Failed!", error);
        process.exit(1); // exit with failure
    }
}
