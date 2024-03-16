import express from "express";
import validateResource from "../middleware/validateResourse";
import { createUserSchema } from "../schema/user.schema";
import { create } from "lodash";
import { createUserHandler } from "../controller/user.controller";

const router = express.Router();

router.post("/api/users", validateResource(createUserSchema), createUserHandler);

export default router;
