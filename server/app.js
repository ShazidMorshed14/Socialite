const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("../server/valuekeys");

const app = express();
const PORT = 5000;
app.use(express.json());

//mongodb connections
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("We are connected to mongodb");
});

mongoose.connection.on("error", () => {
  console.log("We are not connected to mongodb");
});

//importing the models
require("./Models/User/user.jsx");
require("./Models/Post/post.jsx");

//importing routes
const AuthenticationRoutes = require("./routes/authentication");
const PostRoutes = require("./routes/post");
const userRoutes = require("./routes/user");

//initializing routes to app
app.use(AuthenticationRoutes);
app.use(PostRoutes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
