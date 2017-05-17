import { AddTicket } from './actionTypes.js'

const addTicket = ticket => ({ type: AddTicket, payload: ticket })



export { addTicket }