import express from "express";
import { getUsers, protectedRouter, registerUser} from "../controllers/user_controllers";

const router = express.Router();

router.get("/get", getUsers);
router.get("/protected", protectedRouter);
router.post("/registerUser", registerUser);

export default router;