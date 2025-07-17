const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../daba");
const jwt = require("jsonwebtoken");
const  { JWT_ADMIN_PASSWORD } = require("../config");

adminRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
            // Validate the input data
            email: email,
            password: password,
            firstName: firstName, 
            lastName: lastName
        })

    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    });

    if (user) {
        const total = jwt.sign({
            id: admin._id
        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        })

    } else {
        res.status(403).json({
            message: "Incorrect credentiaals"
        })
    }
    
   
})

adminRouter.post("/course", addMiddleware, async function(req, res) {
    const adminId = req.userId;
    const { title, description, imageUrl, price } = req.body;
    const course = await courseModel.create({
    
    title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
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