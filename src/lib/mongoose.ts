import mongoose from "mongoose";

export const mongooseConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://healthApp:healthApp123@cluster0.qtndqq4.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (e) {
    throw e;
  }
};
