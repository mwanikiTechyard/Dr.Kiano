const express = require('express');
const {engine}= require('express-handlebars');

const app = express();

const port = process.env.PORT || 3030


app.engine('.hbs', engine({extname: '.hbs'}) )
app.set('view engine', '.hbs')
app.set('views', 'views')

app.use(express.static('public'))




app.get('', (req, res)=>{
    res.render("home")
})
app.get('/about', (req, res)=>{
    res.render("about")
})
app.get('/gallary', (req, res)=>{
    res.render("gallary")
})
app.get('/exams', (req, res)=>{
    res.render("exams")
})
app.get('/contacts', (req, res)=>{
    res.render("contacts")
})
app.get('/events', (req, res)=>{
    res.render("events")
})
app.get('/contacts', (req, res)=>{
    res.render("contacts")
})

app.listen(port, ()=>(console.log(`Server listening on http://localhost:${port}`)))
