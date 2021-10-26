const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const hbs = require('express-handlebars');

app.engine('hbs', hbs({extname : 'hbs'}));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');

const data = fs.readFileSync(__dirname + '/data.json');
const dataObj = JSON.parse(data);

app.get('/',(req,res)=>{
    const cards = dataObj.map(product=>(
        replaceTemplate(tempCard, product)    
    ))
    // console.log(cards);
    const dashboard = tempDashboard.replace('{%CARDS%}',cards);
    res.end(dashboard);
})

app.get('/default',(req,res)=>{
    
})

app.get('/product',(req,res) => {
    res.render('dashboard');
});

app.listen(3333,()=>{
    console.log("server running on port 3333");
})
