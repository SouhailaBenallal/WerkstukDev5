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