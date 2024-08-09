const express=require('express')
const port=8000;
const app=express();
app.get('/',(req,res)=>{
    res.send('Hello world server is started')
})
app.get('/about',(req,res)=>{
    console.log(req.body)
    res.send('You are at about page')
})
app.get('/login',(req,res)=>{
    console.log('user is trying to access the login page.')
    res.send('<h1>Please login at website </h1>')
})

app.listen(port)