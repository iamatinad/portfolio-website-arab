import { Router } from "express";
import { ObjectId } from "mongodb"; // This help convert the id from string to ObjectId for the _id.
import db from "../db/connection.js";

const router = Router();
const BlogsCollection = db.collection("blogs");

//Endpoint for getting list of blogs
router.get("/", async (req, res) => {
  try {
    let results = await BlogsCollection.find({}).toArray();
    res.send(results).status(200);
  } catch (error) {
    console.error(error);
    res.send("Error getting list of blogs!").status(500);
  }
});

//Endpoint for getting a single blog by id
router.get("/:id", async (req, res) => {
  try {
    let query = { _id: new ObjectId(req.params.id) };
    let result = await BlogsCollection.findOne(query);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send("Not found!").status(404);
  }
});

//Endpoint for adding a single blog
router.blog("/", async (req, res) => {
  try {
    let newBlog = {
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
    };

    let result = await BlogsCollection.insertOne(newBlog);
    res.send(result).status(201);
  } catch (error) {
    console.error(error);
    res.send("Error adding a blog").status(500);
  }
});

//Endpoint for updating a blog by the id
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
      },
    };

    let result = await BlogsCollection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send("Error updating a blog").status(500);
  }
});

//Endpoint for deleting a blog by id
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    let result = await BlogsCollection.deleteOne(query);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send("Error deleting a blog").status(500);
  }
});

export default router;
