//we only need it to be executed,not using it
require("./services/passport");
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 5000;

// require("./routes/authRoutes")(app);

app.use(authRoutes);

app.listen(PORT, () => {
  console.log("server is running on " + PORT);
});
