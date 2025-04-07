const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "music_db",
  "avnadmin",
  "AVNS_mRUTr8u81aUqzu66_xt",
  {
    host: "mysql-bc3527b-saviola0077-dca6.j.aivencloud.com",
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

sequelize
  .authenticate()
  .then(() => console.log("MySQL connected"))
  .catch((err) => console.error("Connection error:", err));

module.exports = sequelize;
