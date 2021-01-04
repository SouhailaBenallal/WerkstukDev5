const express = require('express')
const app = express()

const port = 3020;

app.listen(port,() =>{
    console.log(`Example app listenting at http://localhost:${port}`)
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

app.post('/use', function(req,res){
    var body = req.body;
    console.log(req.body.user)
    res.send(req.body.user)
})