import { Router } from "express";
import {
  addQuestion,
  compareAnswer,
  getQuestion,
} from "../controllers/questionController.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = Router();
// router.post("/addquestion",verifyJWT,addQuestion);
// router.get("/getquestion/:topic" ,verifyJWT, getQuestion);
// router.post("/compare/:topic", verifyJWT, compareAnswer);
//
router.post("/addquestion", addQuestion);
router.get("/getquestion/:topic", getQuestion);
router.post("/compare/:topic", compareAnswer);

export default router;
