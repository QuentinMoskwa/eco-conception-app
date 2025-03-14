const Sequelize = require("sequelize");

let bdd = new Sequelize("pagination", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

let connect = async () => {
  try {
    await bdd.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connect, bdd };
