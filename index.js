const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter} = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);


async function main() {
    await mongoose.connect("")
    app.listen(7777);
    console.log("Server is running on port 7777");
}

main()