const express=require("express") ;
const {notesModel}=require("../models/notes.model") ;
const notesRoute=express.Router() ;

notesRoute.get("/",async(req,res)=>{
    try{
        const notes=await notesModel.find() ;
        res.send(notes)
    }catch(err){
        res.status(404).send("no data found")
    }
    

}) 

//create notes
notesRoute.post("/create" ,async(req,res)=>{
    const data=req.body ;
    //console.log(data ,"body")
    try{
        
        const note= new notesModel(data) ;
        //console.log(note ,"no")
        await note.save() ;
        res.send("post created")
    }catch(err){
res.send("something sent wrong 500")
    }


})

//update notes
notesRoute.patch("/update/:id" ,async(req,res)=>{
    const id=req.params.id ;
    const data=req.body ;
    //console.log(id ,data)
    try{
        //compare note id and user id
        const userID_note=await notesModel.findOne({"_id":id}) ;
        const userID=req.body.userID ;
        console.log(req.body)
        if(userID===userID_note.userID){
            await notesModel.findByIdAndUpdate(id, data) ;
            res.status(200).send({statusCode:"200" ,mesg:"updated successfully"})
        }else{
            res.send("not authoried")
        }

    }catch(err){
        console.log(err)
    }
})



//delete notes
notesRoute.delete("/delete/:id" ,async(req,res)=>{
    const id=req.params.id ;
   
    try{
        const userID_note=await notesModel.findOne({"_id":id}) ;
        const userID=req.body.userID ;
        if(userID_note===userID){
            await notesModel.findByIdAndDelete(id) ;
 
            res.status(200).send({ statusCode: 200, message: "Note deleted" });
        }


    }catch(err){
        console.log(err) 
        res.send(err)
    }
})
module.exports={notesRoute}