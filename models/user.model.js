
const mongoose =require("mongoose") ;

const userSchema=mongoose.Schema({
    name:{
        type:String ,
        required:true ,
        trim:true 
    } ,
    email:{
        type:String ,
        required:true ,
        trim:true ,
        unique:true ,
        lowercase:true ,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    } ,
    password:{
        type:String ,
        required:true ,
        trim:true ,
        minLength:5 
    }


} ,{
    timestamps: true
})
const userModel=mongoose.model("user",userSchema) ;

module.exports={userModel}