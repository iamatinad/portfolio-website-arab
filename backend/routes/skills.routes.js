import { Router } from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb"; // This help convert the id from string to ObjectId for the _id.

const router = Router();
const SkillsCollection = db.collection("skills");

//Endpoint for getting list of skills
router.get("/", async (req, res) => {
  try {
    let results = await SkillsCollection.find({}).toArray();
    res.send(results).status(200);
  } catch (error) {
    console.error(error);
    res.send("Error getting list of skills!").status(500);
  }
});

//Endpoint for getting a single skill by id
router.get("/:id", async (req, res) => {
  try {
    let query = { _id: new ObjectId(req.params.id) };
    let result = await SkillsCollection.findOne(query);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send("Not found!").status(404);
  }
});

//Endpoint for adding a single skill
router.post("/", async (req, res) => {
  try {
    let newSkill = {
      skill: req.body.skill,
      proficiency: req.body.proficiency,
    };

    let result = await SkillsCollection.insertOne(newSkill);
    res.send(result).status(201);
  } catch (error) {
    console.error(error);
    res.send("Error adding a skill").status(500);
  }
});

//Endpoint for updating a skill by the id
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        skill: req.body.skill,
        proficiency: req.body.proficiency,
      },
    };

    let result = await SkillsCollection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send("Error updating a skill").status(500);
  }
});

//Endpoint for deleting a skill by id
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    let result = await SkillsCollection.deleteOne(query);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send("Error deleting a skill").status(500);
  }
});

export default router;
