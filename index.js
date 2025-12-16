require('dotenv').config();
const express = require("express");
const cors = require("cors");
const database = require("./db-connect/db");
const BasicRoutes = require("./routes/basic-routes");
const AdminRoutes = require("./routes/admin-routes");
let port = process.env.PORT || 21000;
const app = express();
database.connect();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
// Mount Basic and Admin routes under the same base path so endpoints are
// reachable as /api/v1/<route> (e.g. POST /api/v1/userSignup)
app.use("/api/v1", BasicRoutes);
app.use("/api/v1", AdminRoutes);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Port is running",
  });
});

app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
