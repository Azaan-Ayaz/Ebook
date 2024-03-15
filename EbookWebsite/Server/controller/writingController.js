const writingModel = require("../model/writingModel");

const createWritingController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name) {
      return res.status(401).send("Name is required");
    }
    if (!email) {
      return res.status(401).send("Email is required");
    }
    if (!message) {
      return res.satus(401).send("Message is required");
    }

    const user = await new writingModel({
      name,
      email,
      message,
    }).save();

    res.status(200).send({
      success: true,
      message: "Response has been submitted",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getWritingController = async (req, res) => {
    try {
        // const { name, email, message } = req.body;

        // Assuming you want to find a user based on email
        const user = await writingModel.findOne({ });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).send({
            success: true,
            message: "Here is your data",
            user: {
                name: user.name,
                email: user.email // Send only necessary information
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Something went wrong"
        });
    }
};


module.exports = {createWritingController, getWritingController}