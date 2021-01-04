# WerkstukDev5
## Step 1 Install Express && Dockerfile
### Step 1.1 Install Package.json
```bash
npm init 
```
### Step 1.2 Modify your Package.json by 
```bash
"scripts": {
    "start": "node index.js"
}
```
### Step 1.3 Create a document index.js && Install Express
```bash
npm install express 
```
```bash
import express from 'express'
const app = express()
const port = 3030;
```
### Step 1.4 Create a document Dockerfile
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
### Step 1.5 Install Dockerfile
```bash
docker build -t myapp .
```
```bash
docker run --publish 3020:3020
```
## Step 2 CRUD
### Step 2.1 Install body-parser && Routes
```bash
npm install body-parser
```
```bash
npm install router
```
```bash
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'
```
```bash
app.use(bodyParser.json())
app.use('/users', usersRoutes) 
```

### Step 2.2 App CRUD in index.js
```bash
app.listen(port,() =>{
    console.log(`Example app listenting at http://localhost:${port}`)
})

app.get('/', (req,res) =>{
    console.log('[TEST]!')
    res.send('Hompage')
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
### Step 2.3 Create a file "routes" && create a document "users.js"
```bash
import express from 'express'
import{createUser, getUsers,getUser,deleteUser,updateUser} from '../controllers/user.js'

const router = express.Router();

router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router
```
### Step 2.4 Create a file "controllers" && create a document "user.js" && import uuid
```bash
npm install uuid
import { v4 as uuidv4} from 'uuid' 
```
```bash
let users = []

export const getUsers = (req, res) =>{
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body
    users.push({
        ...user,
        id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database`)
}

export const getUser = (req, res) => {
    const {id} = req.params

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)

}

export const deleteUser = (req, res) => {
    const {
        id
    } = req.params

    users = users.filter((user) => user.id !== id)

    res.send(`User with the ${id} deleted from the database`)

}

export const updateUser = (req, res) => {
    const {
        id
    } = req.params
    const {
        firstName,
        lastName,
        studyYear,
        gendre
    } = req.body

    const user = users.find((user) => user.id === id)

    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (studyYear) user.studyYear = studyYear
    if (gendre) user.gendre = gendre

    res.send(`User wiht the id ${id} has been updated`) 
}

```

