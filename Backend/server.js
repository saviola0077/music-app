const express = require("express");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const musicRoutes = require("./routes/musicRoutes");
const uploadRoute = require('./routes/uploadRoutes')


const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Initialize routes
app.use('/api', uploadRoute);
app.use("/api", userRoutes);
app.use("/api", musicRoutes);  //http://localhost:4000/api/getMusic

// Database Sync and Server Start
sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log("Server running on port 4000");
  });
});
