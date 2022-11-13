import express from "express";
import passport from "passport";
const router = express.Router();

// google auth route
router.get(
  "/google/provider",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log("------------------->>>");
    res.redirect(process.env.APP_URL);
  }
);

//google facebook route
router.get("/facebook/provider", passport.authenticate("facebook"));
router.get(
  "/facebook/redirect",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log("------------------->>>");
    res.redirect(process.env.APP_URL);
  }
);

export default router;
