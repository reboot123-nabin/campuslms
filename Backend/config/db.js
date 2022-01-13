const mongoose = require("mongoose");

const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedtopology:true,
    }).then((data)=>{
        console.log(`Mongodb connected with server : ${data.connection.host}`);
    })
}

module.exports = connectDB;