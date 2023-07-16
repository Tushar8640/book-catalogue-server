import express from "express";
import { createUser, loginUser, refreshToken } from "./auth.controller";


const router = express.Router();
//
router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/refresh-token", refreshToken);
//
export const AuthRoutes = router;
