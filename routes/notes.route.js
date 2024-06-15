const express=require("express") ;
const {notesModel}=require("../models/notes.model") ;
const notesRoute=express.Router() ;



// Get all notes or search notes with pagination
notesRoute.get("/", async (req, res) => {
  const { title, page = 1, limit = 4 ,sortby="asc" } = req.query; // Default page is 1 and limit is 10

  // Build the search query object
 let searchQuery={}
  if (title) {
    searchQuery.title = { $regex: title, $options: "i" }; // Case-insensitive search
  }

  try {
    // Find notes based on the search query with pagination
    const notes = await notesModel.find(searchQuery)
      .skip((page - 1) * limit)
      .limit(parseInt(limit)).sort({ title: sortby === "desc" ? -1 : 1 })

    // Get the total count of documents that match the search query
    const totalNotes = await notesModel.countDocuments(searchQuery);

    res.send({
       notes ,
       totalNotes,
       currentPage: parseInt(page),
       totalPages: Math.ceil(totalNotes / limit)
    });
  } catch (err) {
    res.status(404).send("No data found");
  }
});






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