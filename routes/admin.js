const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../daba");

adminRouter.post("/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post("/course", function(req, res) {
    res.json({
        message:"course endpoint"
    })
})

adminRouter.put("/course", function(req, res) {
    res.json({
        message: "update course endpoint"
    })
})

adminRouter.put("/course", function(req, res) {
    res.json({
        message: "update course"
    })
})

module.exports = {
    adminRouter: adminRouter
}