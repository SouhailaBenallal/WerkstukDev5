const express = require('express')
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/users.js')
// import syntaxHelpers from './helpers/syntaxHelpers.js'

const app = express()
const port = 3030;

app.use(bodyParser.json())
app.use('/users', usersRoutes) 

app.listen(port,() =>{
    console.log(`Example app listenting at http://localhost:${port}`)
})

app.get('/', (req,res) =>{
    console.log('[TEST]!')
    res.status(200).send('Hompage')
})

app.get('/user', function (req, res) { 
    res.send('Hello World!')
})

app.get('/userid', function (req, res) { 
    res.json({"name":"Souhaila"})
})

app.use(express.urlencoded({
    extended: true
}))

// app.post('/user', function(req,res){
//     const userInput = req.body.user
//    // const capitalised = syntaxHelpers.capitalFirstCharacter(userInput)
//     //const puntcuated = syntaxHelpers.capitalFirstCharacter(userInput)
//     const body = req.body;
//     console.log(req.body.user)
//     res.send(req.body.user)
// })
app.post('/use', function(req,res){
    const body = req.body;		    
    console.log(body.user)		    
    res.send(body.user)		   
})