const mongoose= require('mongoose');
const data = require('./data');
const bookdata= require('../models/index')

mongoose.connect('mongodb://localhost:27017/p', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('MONGOOSE CONNECTED')
    })
    .catch(err =>{
        console.log('CAUTION!!!')
        console.log(err)
    })

    

    const seedDB= async()=>{
        await bookdata.deleteMany({});
        for(let i=0; i<20 ; i++){
        const booklist=await JSON.parse(JSON.stringify(data))
        const list= new bookdata({
            title:`${booklist["title"]}`,
            author:`${booklist.author}`,
          //  availability:true
          //  imageLink:
        })
        await list.save();
        }
    }

    seedDB().then(()=>{
        mongoose.connection.close();
    })