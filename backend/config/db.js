const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDb = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const conn = mongoose.connection;

  conn.on("error", console.error.bind(console, "connection error:"));
  conn.once("open", () => {
    console.log("Database connected");
  });
};

module.exports = connectDb;
