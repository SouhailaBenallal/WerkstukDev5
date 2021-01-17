const supertest = require('supertest')
const httpETE = require('http');

const temp = require('../../index.js')
const request = supertest(temp)

const DatabaseHelper = require('./../../WerkstukDev5/knex/knexfile')

let db_uuid;


describe('test question endpoint', () => {
  test('if post request succeeds', async (done) => {
    const response = await request.post('/machines').send()
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("uuid")
    db_uuid = response.body.uuid
    done();
  })


  test('if get request succeeds', async (done) => {
    const response = await request.get(`/machines/${db_uuid}`).send()
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("uuid")
    done();
  })

  test('if patch request succeeds', async (done) => {
    const response = await request.patch(`/machines/${db_uuid}`).send()
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("uuid")
    done();
  })


  test('if delete request succeeds', async (done) => {
    const response = await request.delete(`/machines/${db_uuid}`).send()
    expect(response.status).toBe(200)
    done();
  })


})