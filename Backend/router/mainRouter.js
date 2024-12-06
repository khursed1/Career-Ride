import express from "express";
import {
  loginCheckFunc,
  loginFunc,
  signupFunc,
} from "../controller/authController.js";

const router = express.Router();

router.route("/loginRoute").post(loginFunc);
router.route("/signupRoute").post(signupFunc);
router.route("/loginCheckRoute").get(loginCheckFunc);

export default router;
