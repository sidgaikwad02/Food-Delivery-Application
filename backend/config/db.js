import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sidharthgaikwad244:IsLgjLtrdHQkkHpN@cluster0.tqeqquu.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}