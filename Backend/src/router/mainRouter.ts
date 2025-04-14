import express from "express";
import {
  loginFunc,
  signupFunc,
  loginCheckFunc,
  ResetPassword,
  SendResetLink,
  logoutfunc,
} from "../controller/authController.js";
import {
  education_entry,
  ExpAdd,
  Update_Summery,
  personal_details,
} from "../controller/otherController.js";
import { signin_check } from "../middleware.js";

const router = express.Router();

router.route("/loginRoute").post(loginFunc);
router.route("/signupRoute").post(signupFunc);
router.route("/loginCheckRoute").get(loginCheckFunc);
router.route("/logout").get(logoutfunc);

router.route("/education_entry").post(signin_check, education_entry);
router.route("/ExpAdd").post(signin_check, ExpAdd);
router.route("/Update_Summery").post(signin_check, Update_Summery);
router.route("/personal_details").post(signin_check, personal_details);

router.route("/ResetPassword").post(ResetPassword);
router.route("/SendResetLink").post(SendResetLink);
export default router;
