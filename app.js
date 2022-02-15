const express= require('express');
const path = require('path');
const mongoose= require('mongoose');
const methodOverride=require('method-override')
const ejsMate= require('ejs-mate');
const bookdata= require('./models/index')

mongoose.connect('mongodb://localhost:27017/p',
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

const app=express();

app.engine('ejs',ejsMate);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
    
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static("views"));
    
app.get('/',(req,res)=>{
    res.render('book/home')
});

app.get('/aboutus',(req,res)=>{
    res.render('book/aboutus')
});

app.get('/login',(req,res)=>{
    res.render('book/login')
});

app.get('/lib',async(req,res)=>{
    const books= await bookdata.find({});
    res.render('book/show',{books})
})

app.get('/lib/add',async(req,res)=>{
    res.render('book/new');
})

app.post('/lib',async(req,res)=>{
    const book=new bookdata(req.body.book);
    await book.save();
    res.redirect(`/lib/${book._id}`)
})

app.get('/lib/:id',async(req,res)=>{
    const books=await bookdata.findById(req.params.id)
    res.render('book/info',{ books });
});

app.get('/lib/:id/edit',async(req,res)=>{
    const book=await bookdata.findById(req.params.id);
    res.render('book/edit',{book});
})

app.put('/lib/:id',async(req,res)=>{
    const { id } = req.params;
    const book= await bookdata.findByIdAndUpdate(id, {...req.body.book});
    res.redirect(`/lib/${book._id}`)
}); 

app.delete('/lib/:id',async(req,res)=>{
    const{ id }= req.params;
    await bookdata.findByIdAndDelete(id);
    res.redirect('/lib');
})

app.listen(3000,()=>{
    console.log('SERVER 3000');
})


