# WerkstukDev5
## Step 1 Install Express and Dockerfile
### Step 1.1 Install Package.json
```bash
npm init 
```
#### Modify your Package.json by 
```bash
"scripts": {
    "start": "node index.js"
}
```
#### Create a document index.js and install Express
```bash
npm install express 
```
```bash
const express = require('express')
const app = express()
const port = 3020;
```
```bash
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
```
#### Create a document Dockerfile
```bash
FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install 

COPY . /usr/src/app

EXPOSE 3020 

CMD ["npm", "start"]
```
#### Install Dockerfile
```bash
docker build -t myapp .
```
```bash
docker run --publish 3020:3020
```