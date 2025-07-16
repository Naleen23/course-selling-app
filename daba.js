const mongoose = require("mongoose");
console.log("connected to")
mongoose.connect("mongodb+srv://nalinrajput8:D7u9Mgrzol4HwTCn@nalin2312.pekaq.mongodb.net/course-selling-app");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,

});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,

});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId

});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId

});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", userSchema);
const courseModel = mongoose.model("course", userSchema);
const purchaseModel = mongoose.model("purchase", userSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}