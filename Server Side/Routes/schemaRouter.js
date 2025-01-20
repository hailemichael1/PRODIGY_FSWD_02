import express from "express";
import { createSchema } from "../model/schemaFile"; 

const router = express.Router();

router.get("/create", async (req, res) => {
  try {
    const message = await createSchema();
    return res.json({ status: true, message });
  } catch (error) {
    return res.json({ status: false, error: error.message });
  }
});

export { router as SchemaRouter };
