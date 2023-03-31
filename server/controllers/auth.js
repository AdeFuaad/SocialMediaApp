import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

// REGISTER USER
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;

        const salt = await bcrypt.genSalt;
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

// LOGIN USER
export const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        const user = await User.findOne({
            email: email
        });
        !user && res.status(400).json("User not found!");

        const isMatch = await bcrypt.compare(password, user.password);
        !isMatch && res.status(400).json("Invalid credentials!");

        const token = jwt.sign({
            id: user_id
        }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({
            user,
            token
            });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};