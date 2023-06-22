import express from "express";
import { getAllUser, signup,Login } from "../controllers/user-controller";

const router = express.Router();
router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", Login);
export default router;
