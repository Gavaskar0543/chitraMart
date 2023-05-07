const express = require('express');
const port  = 8000;
const app = express();

//template engine
app.set('view engine','ejs');
app.set('views','views');

app.get('/',function(req,res){
    return res.render('home',{
        title : "ChitraMart",
        welcome : "welcome to ChitaMart"
    })
})
app.listen(port,function(err){
    if(err){
        console.log("error in server");
       return;
    }
    console.log(`sever is up on port:${port}`);
    
})