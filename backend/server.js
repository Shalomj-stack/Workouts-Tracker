const express = require("express");
const connectDb = require("./config/db");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");
dotenv.config();

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", userRoutes);
app.use("/api/workouts", workoutRoutes);

app.listen(port, () => console.log(`app running on port ${port}`));
