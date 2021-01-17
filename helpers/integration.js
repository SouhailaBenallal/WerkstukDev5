const supertest = require('supertest')
const http = require('http');

const tempApp = require('../../index.js')
const request = supertest(tempApp)

describe('test users endpoint', () => {
  test('if no input resolves', async (done) => {
    const response = await request.post('/users').send({})
    expect(response.status).toBe(400)
    done();
  })

  test('if bad input resolves', async (done) => {
    const response = await request.post('/users').send()
    expect(response.status).toBe(400)

    done();
  })

  test('if good input resolves', async (done) => {
    const response = await request.post('/users').send()
    expect(response.body.emoji).toBe(":(")
    done();
  })


  test('if bad input resolves', async (done) => {
    const response = await request.post('/users').send()
    expect(response.body.emoji).toBe(":)")

    done();
  })


})