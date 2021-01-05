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
## Step 3 Pipeline && Jest
### Step 3.1 Create your first JavaScript pipeline

Sign in to your [Azure DevOps](https://docs.microsoft.com/en-us/azure/devops/pipelines/create-first-pipeline?view=azure-devops&tabs=javascript%2Ctfs-2018-2%2Cbrowser)  organization and navigate to your project.
In your project, navigate to the Pipelines page. Then choose the action to create a new pipeline.
Walk through the steps of the wizard by first selecting GitHub as the location of your source code.
You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.
When the list of repositories appears, select your Node.js sample repository.
Azure Pipelines will analyze the code in your repository and recommend Node.js template for your pipeline. Select that template.
Azure Pipelines will generate a YAML file for your pipeline. Select Save and run, then select Commit directly to the main branch, and then choose Save and run again.
A new run is started. Wait for the run to finish. 

### Step 3.2 Install jest
```bash
npm install --save-dev jest
```
### Step 3.3 Create a file "helpers" && create a document "syntaxHelpers.js"
```bash
const syntaxHelpers = {

    capitalFirstCharacter: (userInput) =>{
        if(userInput != "" && userInput != null){
            if(typeof userInput !== 'number'){
                if(userInput.length > 1){
                    return string.charAt(0).toUpperCase() + string.slice(1)
                }
            }
        }
        return null
    },
    addPunctuation: () =>
    {(userInput) =>{
        if(userInput != "" && userInput != null){
            if(typeof userInput !== 'number'){
                if(userInput.length > 1){
                    return string.charAt(0).replace(/,/g,'.') + string.slice(1)
                }
            }
        }
        return null
    },
        

}
export default syntaxHelpers
```
### Step 3.4 Create a file "__Test__" && create a document "helpers.js"
```bash

import syntaxHelpers from './../WerkstukDev5/helpers/syntaxHelpers.js'

describe('check capital syntax function', () => {
    test('Empty', () => {
        expect(syntaxHelpers.addCapital("")).toBe(null);
        expect(syntaxHelpers.addCapital(123)).toBe(null);
        expect(syntaxHelpers.addCapital("a")).toBe(null);})
        
    test('Hello world comes back the same', () => {
        expect(syntaxHelpers.addCapital("hello world")).toBe("Hello world");
    })
    test('hello world comes back as Hello world', () => {
        expect(syntaxHelpers.addCapital("hello world")).toBe("Hello world");
    })

})

describe('check punctiation syntax function', () => {
    test('Empty', () => {
        expect(syntaxHelpers.addPunctiation("")).toBe(null);
        expect(syntaxHelpers.addPunctiation(123)).toBe(null);
        expect(syntaxHelpers.addCapital("a")).toBe(null);
    })
    test('hello world comes back as Hello world', () => {
        expect(syntaxHelpers.addCapital("hello world")).toBe("Hello world");
    })
})
```

### Step 3.5 Edit "index.js"
```bash
import syntaxHelpers from './helpers/syntaxHelpers.js'
```
```bash
app.post('/use', function(req,res){
    const userInput = req.body.user
    const capitalised = syntaxHelpers.capitalFirstCharacter(userInput)
    const puntcuated = syntaxHelpers.capitalFirstCharacter(userInput)
    const body = req.body;
    console.log(req.body.user)
    res.send(puntcuated, req.body.user, capitalised)
})
```
## Step 4 Supertest && Http-server
### Step 4.1 Install Supertest && Http-server
```bash
npm install supertest --save-dev
npm install --global http-server
```

### Step 4.2 In the fil "helpers" && create a document "integretion.js"
```bash
import httpserver from 'http-server'
import supertest from 'supertest'

import app from '../../WerkstukDev5/index.js'
const request = supertest(app)

describe('test /POST endpoint',()=>{
    test('false input', async(done) =>{
        const respone = await request.post('/user').send({})
        excpext(respone.status).toBe(403)
        done()
    })
    test('false input', async(done) =>{
        const respone = await request.post('/user').send({user:2})
        excpext(respone.status).toBe(403)
        done()
    })
    test('false input', async(done) =>{
        const respone = await request.post('/user').send({user:"Souhaial"})
        excpext(respone.status).toBe(403)
        done()
    })
    test('false input', async(done) =>{
        const respone = await request.post('/user',).send({user:"user with the name added to the database"})
        excpext(respone.status).toBe("User With The Name Added To The Database.")
        done()
    })
})
```

## Step 5 Knex && Pg
### Step 5.1 Install Knex && Pg
```bash
npm install pg
npm install knex
```
### Step 5.2 In the file "helpers" && create a document "knex.js"
[Knex](https://www.npmjs.com/package/knex) 
```bash
const knex = require('knex')({
    client: 'pg',
    connection: {
      filename: './data.db',
    },
  });
  
  // Create a table
  knex.schema
    .createTable('users', table => {
      table.increments('id');
      table.string('user_firstName');
    })
  
    // ...and another
    .createTable('machine', table => {
      table.increments('id');
      table.uuid('uuid')
      table.string('machine_name');
      table
        .integer('user_id')
        .unsigned()
        .references('users.id');
    })
  
    // Then query the table...
    .then(() =>
      knex('users').insert({ user_firstName: 'Souhaila' })
    )
  
    // ...and using the insert id, insert into the other table.
    .then(rows => 
      knex('machines').insert({ machine_name: 'Lazercutter', user_id: rows[0] })
    )
  
    // Query both of the rows.
    .then(() => 
      knex('users')
        .join('machines', 'users.id', 'machines.user_id')
        .select('users.user_name as user', 'machines.machine_name as machine')
    )
  
    // map over the results
    .then(rows =>
      rows.map(row => {
        console.log(row)
      })
    )
  
    // Finally, add a .catch handler for the promise chain
    .catch(e => {
      console.error(e);
    });
```
