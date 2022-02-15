const mongoose= require('mongoose');
const data = require('./data');
const bookdata= require('../models/index')

mongoose.connect('mongodb://localhost:27017/p',     err => {
    if(err) throw err;
    console.log('connected to MongoDB')
});


    const seedDB= async()=>{
        await bookdata.deleteMany({});
        for(let i=1;i<6;i++){
        const list= new bookdata({
            // title:`${data[i].title}`,
            // author:`${data[i].title}`,
          title:`rich dad poor dad`,
          author:`rodriquiz`,
          _id:`61f648f4071a917448465290`
          //  availability:true
          //  imageLink:
        })
        await list.save();
        }
    }
    
    seedDB().then(()=>{
        mongoose.connection.close();
    })