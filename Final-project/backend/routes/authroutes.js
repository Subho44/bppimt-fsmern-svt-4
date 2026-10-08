const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const User = require("../models/User");


//gmail setup
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
    }
});

//REGISTER
router.post('/register', async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const olduser = await User.findOne({email});
        const hashedpassword = await bcrypt.hash(password,10);
        const otp = Math.floor(
            1000000 +Math.random() * 900000
        ).toString();

        const user = await User.create({
            name:name,
            email:email,
            password:hashedpassword,
            role:"user",
            isverified:false,
            otp:otp,
            otpExpire:Date.now() + 5*60*1000
        
        });

        await transporter.sendMail({
            from:process.env.MAIL_USER,
            to: email,
            subject:"email verification otp"
        });
        res.json({message:"registration successfull", email:user.email})
    } catch(err){
        console.log(err);
    }
});

//verify otp
router.post('/verify', async(req,res)=>{
    try {
        const {email,otp} = req.body;
        const user = await User.findOne({email});

        if(user.isverified){
            return res.json({message:"account already verified"});
        }

        if(user.otp !== otp) {
            return res.json({message:"invalid otp"});
        }

        if(user.otpExpire < Date.now()){
            return res.json({message:"otp expired"});
        }

        user.isverified = true;
        user.otp= null;
        user.otpExpire = null;
        await user.save();

        res.json({message:"email verified successfully"})
    } catch(err) {
        console.error(err)
    }
});

//resend otp
router.post('/resend', async(req,res)=>{
    try {
        const {email} = req.body;
        const user = await User.findOne({email});

        if(user.isverified){
            return res.json({message:"account already verified"});
        }
       const otp = Math.floor(
        100000 + Math.random() * 900000
       ).toString();

       user.otp = otp;
       user.otpExpire = Date.now() + 5 *60*1000;
       await user.save();
       await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,

       });
       res.json({message:"new otp sent successfully"});
    } catch(err) {
        console.error(err)
    }
});

//login
router.post('/login', async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const match = await bcrypt.compare(
            password,
            user.password
        );

        const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        );


        
        res.json({message:"login successfull", token:token});
    } catch(err){
        console.log(err);
    }
});

module.exports = router;