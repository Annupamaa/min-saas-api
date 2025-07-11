const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://annu24160:6GPWKE1p9uAlmOn8@blog.qlmqi.mongodb.net/logs");
        console.log("MongoDB connected.");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};

module.exports = connectDB;
