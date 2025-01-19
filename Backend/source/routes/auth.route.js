import express from "express";
import { Router } from "express";

import { checkAuth, login, logout, signup, updateProfile } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/updateProfile", protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth);

export default router;