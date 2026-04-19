import express from "express";
import { getRules, addRule, updateRule, deleteRule } from "../Controllers/ruleController.js";
import { verifyUser, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRules);
router.post("/add", verifyUser, isAdmin, addRule);
router.put("/:id", verifyUser, isAdmin, updateRule);
router.delete("/:id", verifyUser, isAdmin, deleteRule);

export default router;