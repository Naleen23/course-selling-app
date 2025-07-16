function createCourseRoutes(app) {
    app.post("/course/purchases", function(req, res){
       res.json({
            message: "create purchase endpoint"
       })
    })


    app.get("/courses/preview", function(req, res) {
       res.json({
          message: "courses endpoint"
       })
   })
}

module.exports = {
    createCourseRoutes: createCourseRoutes
}