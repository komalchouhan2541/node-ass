const express = require('express');
const app = express();

const mongoose = require('mongoose');
const {roommodel} = require('./bookschema');

mongoose.connect(
    'mongodb+srv://komalchouhan:SC9N7KYGiqGi9C29@cluster0.83l9s.mongodb.net/BATCH6-DB?retryWrites=true&w=majority', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then((data)=>{
    
    console.log("data base connection successfull");
})
.catch((err)=>{
    console.log(" erroccured while connecting to database");
});
app.use(express.json());


// add book category
app.post("/add/book",(req,res)=>{
    const data= req.body;
    if(Object.keys(data).length==5){
        const room= new roommodel({
            bookname:data.bookname,
            price:data.price,
            author:data.author,
            language:data.language,
            aboutAbout:data.aboutAbout
        });
    
        room.save().then((data)=>{
            res.send(data);
        })
        .catch((err)=>{
            res.send('unable to save users');
        });

    }
    else{
        res.send(" please fill body all field ")
    }
   
});

// book  category edit
app.use(express.json());
app.put("/update/book",(req,res)=>{
    const _id= req.query._id;
    const data=req.body;
    if(data.bookname&&data.price&&data.author&&data.language&&data.aboutAbout){


        roommodel.findByIdAndUpdate(
                        
            {_id:_id},
       
            { $set :{ 
                
                bookname:data.bookname,
                price:data.price,
                author:data.author,
                language:data.language,
                aboutAbout:data.aboutAbout}  } ,
          
            {new:true}

            )
            .then((data)=>{
                console.log("then")
                res.status(200).send(data);
            })
            .catch((err)=>{
                console.log("catch")

                 res.status(500).send("somthing went weong please try again letar");
            })
    }
    else{
        res.send(" fill all body field")
    }


});

// delete book
 app.delete("/delete/bookbyid",(req,res)=>{
     const myid=req.query._id;
     if(myid){
        roommodel.findByIdAndDelete({_id:myid})
        .then((data)=>{
            if(!data){
                res.send("data not find")
            }
            else{
                res.send("deleted succesfully ")
            }
        })
        .catch((err)=>{
            res.send("somthing went wrong please try again later")
        })
     }

     else{
        res.send("invalied id")
     }
    
 })
 

 //get all books
 app.get("/get/allbooks",(req,res)=>{
     roommodel.find()
     .then((data)=>{
         res.send(data)
     })
     .catch((err)=>{
         res.send("somthing went wrong please try again later")
     })
 })



app.listen(8080,()=>{
    console.log(" my server has created port 8080")
})


