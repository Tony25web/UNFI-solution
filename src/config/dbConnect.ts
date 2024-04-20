import mongoose from "mongoose";
export const dbConnect = (connectionString: string) => {
  return mongoose
    .connect(connectionString,{
      family: 4,
  })
    .then(() => console.log("Connected to server"))
    .catch((err:Error) => {
      console.log(err);
      process.exit(1);
    });
};
