import chalk from "chalk";

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
