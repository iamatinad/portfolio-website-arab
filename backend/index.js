import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import skills from "./routes/skills.routes.js";
import projects from "./routes/projects.routes.js";
import blogs from "./routes/blogs.routes.js";
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
app.use("/blogs", blogs);
app.use("/experiences", experiences);
app.use("/achievements", achievements);



//start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
