const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../daba");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "123LDL1L23L3L";

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