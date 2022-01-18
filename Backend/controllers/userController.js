const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");

const sendEmail=require("../utils/sendEmail");
// const cloudinary = require("cloudinary");

//Register a User

exports.registerUser = catchAsyncErrors(async(req,res,next)=>{

    // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //     folder:"avatars",
    //     width: 150,
    //     crop: "scale",
    // });
    const {name,phone,email,password} = req.body;

    if(!name || !phone || !email || ! password){
        return next(new ErrorHandler("Please Enter all the field", 400));
    }

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



//forgot password

exports.forgotPassword = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findOne({email:req.body.email});

    if(!user){
        return next(new ErrorHandler("User Not found!",404));
    }

    //Get ResetPassword Token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false});

    const resetPasswordUrl = `${req.protocol}://${req.get(
        "host"
    )}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then,please ignore it.`;

    try {
        await sendEmail({
            email:user.email,
            subject:`SchoolManagementsystem password Recovery`,
            message,
        });
        res.status(200).json({
            success: true,
            message:`Email sent to ${user.email} successfully!`,
        });


    }catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }

});

//Reset Password

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    // creating token hash
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");
  
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
  
    if (!user) {
      return next(
        new ErrorHandler(
          "Reset Password Token is invalid or has been expired",
          400
        )
      );
    }
  
    if (req.body.password !== req.body.confirmPassword) {
      return next(new ErrorHandler("Password does not password", 400));
    }
  
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
  
    await user.save();
  
    sendToken(user, 200, res);
  });