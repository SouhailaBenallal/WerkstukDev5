const { v4: uuidv4 } = require('uuid');

let users = []

const getUsers = (req, res) =>{
    res.send(users)
}
module.exports = getUsers

const createUser = (req, res) => {
    const user = req.body
    users.push({
        ...user,
        id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database`)
}
module.exports = createUser

const getUser = (req, res) => {
    const {id} = req.params

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)

}
module.exports = getUser


const deleteUser = (req, res) => {
    const {
        id
    } = req.params

    users = users.filter((user) => user.id !== id)

    res.send(`User with the ${id} deleted from the database`)

}
module.exports = deleteUser

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
module.exports = updateUser