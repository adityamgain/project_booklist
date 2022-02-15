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
    description:{
        type:String,
        required:true,
    },
    imageLink:{
        type:String,
    },
    find:{
        type:String,
    }
});

module.exports= mongoose.model('bookdata',bookSchema);
