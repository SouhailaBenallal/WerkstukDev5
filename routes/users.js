const express = require('express')
const createUser = require('../controllers/user.js')
const getUsers = require('../controllers/user.js')
const getUser = require('../controllers/user.js')
const deleteUser = require('../controllers/user.js')
const updateUser = require('../controllers/user.js')

/**
* [description]
* @params:
* @returns: 
*/
const router = express.Router();
//all routes in here are starting with /users
router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router