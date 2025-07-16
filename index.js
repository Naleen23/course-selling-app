const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter} = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);


app.use("/api/v2/user", userRouter);
app.use("/api/v2/admin", adminRouter);
app.use("/api/v2/course", courseRouter);


app.listen(7777, function() {
    console.log("server is running on port 7777");
})