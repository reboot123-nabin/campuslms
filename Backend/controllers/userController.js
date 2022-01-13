const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");
// const cloudinary = require("cloudinary");

//Register a User

exports.registerUser = catchAsyncErrors(async(req,res,next)=>{

    // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //     folder:"avatars",
    //     width: 150,
    //     crop: "scale",
    // });
    const {name,phone,email,password} = req.body;

    const user = await User.create({
        name,
        phone,
        email,
        password,
        avatar:{
            public_id:"this is my sample demo",
            url:"profilePic",
        },
    });

    // const token = user.getJWTToken();

    // res.status(201).json({
    //     success:true,
    //     token,
    // });

    sendToken(user,201,res);
});

//Login User

exports.loginUser = catchAsyncErrors(async(req,res,next)=>{
    const { email, password} = req.body;

    //checking if user has given password and email both

    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid Email or password",401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401))
    }

    sendToken(user,200,res);
});



//Logout
exports.logout = catchAsyncErrors(async(req,res,next)=>{
    res.cookie("token", null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message:"Logged Out",
    });
});

// getUserDetails



