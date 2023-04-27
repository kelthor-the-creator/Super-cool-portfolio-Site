const express = require("express");
var app = express();
const path = require("path");

app.use('/img/', express.static('./img'));


app.set('view engine', 'ejs')
port = process.env.port || '9001';

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'dist')))



//set the app to listen to the port and log out the url
app.listen(port,() =>{

    console.log(`listening to http://localhost:${port}`)
})

//get the path name and render in the index page
app.get("/", (req,res)=>{
    res.render("index")
});

app.use(express.static('views'));