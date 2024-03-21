import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import skills from "./routes/skills.routes.js";
import projects from "./routes/projects.routes.js";
import posts from "./routes/posts.routes.js";
import experiences from "./routes/experiences.routes.js";
import achievements from "./routes/achievements.routes.js";

// Load env variables
dotenv.config();

const PORT = process.env.PORT || 4000;

// create express app
const app = express();

//add middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//load routes
app.use("/skills", skills);
app.use("/projects", projects);
app.use("/posts", posts);
app.use("/experiences", experiences);
app.use("/achievements", achievements);

// Make database connection
await mongoose.connect(process.env.MONGO_URI);

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
