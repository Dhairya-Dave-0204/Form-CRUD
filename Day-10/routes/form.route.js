import { Router } from "express";
import { getFormData } from "../controller/form.controller.js"

export const formRouter = Router()

formRouter.route("/submit").post(getFormData)