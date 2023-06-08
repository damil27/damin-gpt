import mongoose from "mongoose";

let isConnected = false;

export const connectedToDB = async () => {
  mongoose.set("strictQuery", true);

  // check if database is connected
  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.DB_URL, {
      dbName: "damin-gpt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
