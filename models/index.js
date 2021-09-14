const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const bookSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true, 
    },
    availability:{
        type:Boolean
    },
    imageLink:{
        type:String
    }
})

const bookdata= mongoose.model('bookdata',bookSchema);
module.exports=bookdata;