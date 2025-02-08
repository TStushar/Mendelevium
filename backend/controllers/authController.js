const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
require("dotenv").config();

// Signup Handler
exports.signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists."
            });
        }

        // Check if an admin already exists
        const existingAdmin = await User.findOne({ role: "Admin" });

        // If role is Admin and an admin already exists, block registration
        if (role === "Admin" && existingAdmin) {
            return res.status(403).json({
                success: false,
                message: "Admin already exists. Only one Admin is allowed."
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Determine role: First user = Admin, others default to Student
        const userRole = existingAdmin ? (role === "Alumni" ? "Student" : "Student") : "Admin";

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: userRole,
            alumniRequest: role === "Alumni" && existingAdmin ? true : false
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully!"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Registration failed. Try again later.",
            error: error.message
        });
    }
};

// Login Handler
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and password."
            });
        }

        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User does not exist."
            });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(403).json({
                success: false,
                message: "Incorrect password."
            });
        }

        // Create JWT token
        const payload = {
            email: user.email,
            role: user.role,
            id: user._id
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "3h" });

        user = user.toObject();
        user.token = token;
        user.password = undefined; // Remove password from response

        // Set cookie options
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        };

        res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "Logged in successfully!"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Cannot log in.",
            error: error.message
        });
    }
};
