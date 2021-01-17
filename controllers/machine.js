import { v4 as uuidv4} from 'uuid' 

 /**
   * generates UUID
   * 
   * @params uuid: String 
   * @returns uuid: String
   */

let machines = []

export const getMachines = (req, res) =>{
    res.send(machines)
}

export const createMachine = (req, res) => {
    const machine = req.body
    machines.push({
        ...machine,
        id: uuidv4() });
    res.send(`Machine with the name ${machine.nameMachine} added to the database`)
}

export const getMachine = (req, res) => {
    const {id} = req.params

    const foundMachine = machines.find((machine) => machine.id === id)
    res.send(foundMachine)

}

export const deleteMachine = (req, res) => {
    const {
        id
    } = req.params

    machines = machines.filter((machine) => machine.id !== id)

    res.send(`User with the ${id} deleted from the database`)

}

export const updateMachine = (req, res) => {
    const {
        id
    } = req.params
    const {
        nameMachine,
        lastDate,
        nameStudent,
        time
    } = req.body

    const machine = machines.find((machine) => machine.id === id)

    if (nameMachine) machine.nameMachine = nameMachine
    if (lastDate) machine.lastDate = lastDate
    if (nameStudent) machine.nameStudent = nameStudent
    if (time) machine.time = time

    res.send(`Machine wiht the id ${id} has been updated`) 
}

