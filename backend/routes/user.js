const express = require("express");
const router = express.Router();

const {login, signup} = require("../controllers/authController");
const {auth, isAdmin, isAlumni, isStudent } = require("../middleware/auth"); 

router.post("/login",login);
router.post("/signup",signup);

 // protected routes
//format : router.get("/path endpoints", kon konse middlewares use honge , handler function)

//TESTING
router.get("/test", auth, (req,res) =>{
    res.json({
        success:true,
        message:"This is the testing route 🛠️"
    })
});

router.get("/admin", auth, isAdmin, (req,res) =>{
    res.json({
        success:true,
        message:"Welcome to the protected route of Admin!"
    })
});
router.get("/alumni", auth, isAlumni, (req,res) =>{
    res.json({
        success:true,
        message:"Welcome to the protected route of Alumni!"
    })
});
router.get("/student", auth, isStudent, (req,res) =>{
    res.json({
        success:true,
        message:"Welcome to the protected route of Student!"
    })
});

module.exports = router;