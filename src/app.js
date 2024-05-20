const express = require('express');
const path=require('path');
const hbs =require('hbs');
const { hbsSubscribers} = require('diagnostics_channel');
const app = express();
const port=  process.env.PORT || 8000;

// public static path
 const static_path=path.join(__dirname,"../public");
 const tempolates_path=path.join(__dirname,"../tempolates/views");
 const partials_path=path.join(__dirname,"../tempolates/partials");

 app.set('view engine', 'hbs');
 app.set('views',tempolates_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));


// routing

  
app.get("/home",(req,res)=>{
    res. render('index')
     
})

app.get("/about",(req,res)=>{
    res. render('about')
})

app.get("/weather",(req,res)=>{
    res. render('weather')
})

app.get("*",(req,res)=>{
    res.send(" oops! 404 error page")
})

app.listen(port,()=>{
console.log(`listening to the port at ${port}`)
})