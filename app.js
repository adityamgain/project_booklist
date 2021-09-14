const express= require('express');
const app=express();
const path = require('path');
const mongoose= require('mongoose');
const methodOverride=require('method-override')
const ejsMate= require('ejs-mate');


mongoose.connect('mongodb://localhost:27017/p',
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });


app.engine('ejs',ejsMate)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
    
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
    
app.get('/',(req,res)=>{
    res.render('home')
});


app.listen(3000,()=>{
    console.log('SERVER 3000');
})


