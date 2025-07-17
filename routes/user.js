
const { Router } = require("express");
const { userModel } = require("../daba");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "aladl123"

const userRouter = Router();

userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    await userModel.create({
        // Validate the input data
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })

    res.json({
        message: "signup succeeded"
    })
})

userRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    });

    if (user) {
        const total = jwt.sign({
            id: user._id
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

userRouter.get("/purchases", function(req, res) {
    res.json({
         message: "purchases endpoint"
    })
})


module.exports = {
    userRouter: userRouter
}