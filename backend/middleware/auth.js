const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
    try {
        // Extract token from header
        // const token = req.headers.authorization?.split(" ")[1];
        const token = req.body.token;
        console.log(token);
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Missing Token."
            });
        }

        // Verify token
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Invalid Token."
            });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong with token verification."
        });
    }
};

exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "Admin") {
            return res.status(403).json({
                success: false,
                message: "Access denied! This route is for Admin only."
            });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong, cannot verify role."
        });
    }
};

exports.isAlumni = (req, res, next) => {
    try {
        if (req.user.role !== "Alumni") {
            return res.status(403).json({
                success: false,
                message: "Access denied! This route is for Alumni only."
            });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong, cannot verify role."
        });
    }
};

exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role !== "Student") {
            return res.status(403).json({
                success: false,
                message: "Access denied! This route is for Students only."
            });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong, cannot verify role."
        });
    }
};
