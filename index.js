const express = require("express");
const { userRouter } = reuire("./routes/user");
const { createCourseRoutes } = require("./routes/course");
const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);


createUserRoutes(app);
createCourseRoutes(app);


app.listen(7777, function() {
    console.log("server is running on port 7777");
})