import express from "express";
import { listWorkers, createWorker, updateWorker } from "../Controllers/workerController.js";
import { verifyUser, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyUser, isAdmin, listWorkers);
router.post("/", verifyUser, isAdmin, createWorker);
router.put("/:id", verifyUser, isAdmin, updateWorker);

export default router;
