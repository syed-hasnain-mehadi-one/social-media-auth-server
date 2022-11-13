import chalk from "chalk";
import passport from "passport";

export const googlePrivider = () => {
  try {
    console.log("data-1", new Date());
    passport.authenticate("google", { scope: ["profile", "email"] });
    console.log("data-2", new Date());
  } catch (error) {
    console.log("error", error);
  }
};

export const googleRedirect = async (req, res) => {
  try {
    console.log("calll------------");
    return res.redirect("/");
    // console.log("req.body", req.body);
    // res.status(200).send({
    //   success: true,
    //   msg: "success",
    //   data: {},
    // });
  } catch (error) {
    console.log(chalk.bgRed.bold(error?.message));
    res.status(200).send(error?.message);
  }
};

export const facebookPrivider = () => {
  try {
    passport.authenticate("facebook");
  } catch (error) {
    console.log("error", error);
  }
};
export const facebook = async (req, res) => {
  try {
    console.log("req.body", req.body);
    res.status(200).send({
      success: true,
      msg: "success",
      data: {},
    });
  } catch (error) {
    console.log(chalk.bgRed.bold(error?.message));
    res.status(200).send(error?.message);
  }
};
