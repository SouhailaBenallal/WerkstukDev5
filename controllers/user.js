import { v4 as uuidv4} from 'uuid' 

 /**
   * generates UUID
   * 
   * @params uuid: String 
   * @returns uuid: String
   */
  

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