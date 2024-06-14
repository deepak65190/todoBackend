const mongoose =require("mongoose") ;
const notesSchema=mongoose.Schema({
    title:{
        type:String ,
        require:true ,
        trim:true 
    } ,
    notes:{
        type:String ,
        require:true ,
        trim:true 
    } ,
    userID:{
        type:String ,
       
        trim:true 
    } ,
    category:{
        type:String ,
        require:true ,
        trim:true 
    } ,
} ,{
    timestamps:true
})
const notesModel =mongoose.model("note" ,notesSchema) ;
module.exports={notesModel}