// import express from 'express'
// import bodyParser from 'body-parser'
// import usersRoutes from './routes/users.js'
// // import machinesRoutes from './routes/machines.js'
// // import syntaxHelpers from './helpers/syntaxHelpers.js'

// const app = express()
// const port = 3030;

// app.use(bodyParser.json())
// app.use(express.urlencoded({
//     extended: true
// }))

// app.use('/users', usersRoutes) 

// app.listen(port,() =>{
//     console.log(`Example app listenting at http://localhost:${port}`)
// })

// app.get('/', (req,res) =>{
//     console.log('[TEST]!')
//     res.status(200).send('Hompage')
// })

// app.get('/user', function (req, res) { 
//     res.send('Hello World!')
// })

// app.get('/userid', function (req, res) { 
//     res.json({"name":"Souhaila"})
// })

// // app.use('/machines', machinesRoutes) 

// // app.post('/user', function(req,res){
// //     const userInput = req.body.user
// //    // const capitalised = syntaxHelpers.capitalFirstCharacter(userInput)
// //     //const puntcuated = syntaxHelpers.capitalFirstCharacter(userInput)
// //     const body = req.body;
// //     console.log(req.body.user)
// //     res.send(req.body.user)
// // })

// app.post('/use', function(req,res){
//     const body = req.body;		    
//     console.log(body.user)		    
//     res.send(body.user)		   
// })


// // app.get('/machine', function (req, res) { 
// //     res.send('Hello machine')
// // })

// // app.get('/machine:id', function (req, res) { 
// //     res.json({"name":"Souhaila"})
// // })

// // // app.post('/user', function(req,res){
// // //     const userInput = req.body.user
// // //    // const capitalised = syntaxHelpers.capitalFirstCharacter(userInput)
// // //     //const puntcuated = syntaxHelpers.capitalFirstCharacter(userInput)
// // //     const body = req.body;
// // //     console.log(req.body.user)
// // //     res.send(req.body.user)
// // // })

// // app.post('/machin', function(req,res){
// //     const body = req.body;		    
// //     console.log(body.user)		    
// //     res.send(body.user)		   
// // })

import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import machinesRoutes from "./routes/machines.js";

const app = express();
const PORT = 3030;
app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
}))

app.use("/users", usersRoutes);
app.use("/machines", machinesRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));



app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));