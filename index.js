const app = require('express')()
const path = require('path')

// View Engine Setup
app.set('views',path.join(__dirname,"views"))
app.set("view engine","hbs")

// Routing setup
app.get('/',(req,res)=>{
    let peopleList = getRandomList(); //fetches random list of peoples name
    res.render("index", {people : peopleList, title: pageTitle, messageHeader : messageHeader});
});

app.get('/koenkie',(req,res)=>{
    res.render("koenkie");
});

let getRandomList = () => {
    let list = ["wimpie", "huibje", "koenkie", "bastimpie", "woude", "klaas", "rebeca", "matsie"];
    let limit = Math.floor(Math.random() * (list.length - 1));

    return list.slice(limit);
}

let pageTitle = "faka"

let messageHeader = "Een lijst met namen"

app.listen(5000);