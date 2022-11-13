import express from "express";
import passport from "passport";
import { googleRedirect } from "../controllers/userController.js";
const router = express.Router();

// google auth route
router.get(
  "/google/provider",
  passport.authenticate("google", { scope: ["profile"] })
);
router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

//google facebook route
router.get("/facebook/provider", googleRedirect);
router.get("/facebook/redirect", googleRedirect);

export default router;
