const { Sequelize } = require("sequelize");

// creating a connection to your MySQL database
const sequelize = new Sequelize(
  "music_db", // database
  "avnadmin", // username for database
  "AVNS_mRUTr8u81aUqzu66_xt", // password for database
  {
    host: "mysql-bc3527b-saviola0077-dca6.j.aivencloud.com", //the server URL where your MySQL database is hosted
    port: 25716,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Temporarily for testing. For production, use proper CA cert.
      },
    },
  }
);

//tries to connect to the database with the credentials and settings provided
sequelize
  .authenticate()
  .then(() => console.log("MySQL connected"))
  .catch((err) => console.error("Connection error:", err));

module.exports = sequelize;
