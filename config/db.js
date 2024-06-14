const mongoose=require("mongoose") ;
const connection=mongoose.connect("mongodb+srv://deepakbisht9773724383:JPD0R6ZmC7Uk9kig@cluster0.6nbwe89.mongodb.net/mini?retryWrites=true&w=majority&appName=Cluster0") ;
module.exports=connection