const express=require("express") ;
 const connection=require("./config/db") ;
const {userRoute}=require("./routes/user.route.js") ;
const {notesRoute}=require("./routes/notes.route.js") ;
const {tokenV} =require("./middleware/token.js")
const app =express() ;
app.use(express.json()) ;

app.get("/",(req ,res)=>{
    res.send("hello")
})
app.use("/user",userRoute) ;
app.use(tokenV)
app.use("/notes",notesRoute)
app.listen(8080 ,async(err)=>{
    try{
        await connection
        console.log("connected")
    }catch(err){
console.log(err)
    }
console.log(8080)
   
})