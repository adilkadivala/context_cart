const connectDB = require("../database/connect");

// getting user

const getUserData = async (req, res) => {
  try {
    const Que = "SELECT * FROM user";

    connectDB.query(Que, (err, data) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ message: "internel server error" });
      }
      return res.json(data);
    });
  } catch (error) {
    console.error(err.message);
  }
};

module.exports = { getUserData };