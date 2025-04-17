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
  education_entry_create,
  Exp_Add,
  Exp_Update,
  FetchAllId,
  FetchOneResumeData,
  personal_details_CU,
  Update_Summery,
} from "../controller/otherController.js";
import { signin_check } from "../middleware.js";

const router = express.Router();

router.route("/loginRoute").post(loginFunc);
router.route("/signupRoute").post(signupFunc);
router.route("/loginCheckRoute").get(loginCheckFunc);
router.route("/logout").get(logoutfunc);

router
  .route("/education_entry_create")
  .post(signin_check, education_entry_create);
router.route("/Exp_Add").post(signin_check, Exp_Add);
router.route("/Update_Summery").post(signin_check, Update_Summery);
router.route("/FetchOneResumeData/:id").get(signin_check, FetchOneResumeData);
router.route("/FetchAllId").get(signin_check, FetchAllId);
router.route("/Exp_Update").post(signin_check, Exp_Update);
router.route("/personal_details_CU").post(signin_check, personal_details_CU);

router.route("/ResetPassword").post(ResetPassword);
router.route("/SendResetLink").post(SendResetLink);

export default router;
