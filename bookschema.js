const mongoose =require("mongoose");

const schema =mongoose.Schema;
//creatig schema

const roomschema = new schema({

    bookname:{
             type:String
             },
    price:{
             type:String
             },
    author:{
           type:String
            },
    language:{
           type:String
            },
    aboutAbout:{
           type:String
    }                    
        });

 const roommodel= mongoose.model("roommodel",roomschema);

 module.exports={roommodel};