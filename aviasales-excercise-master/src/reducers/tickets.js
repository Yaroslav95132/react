import { AddTicket } from '../actionTypes'


const preloadTickets = require('../tickets.json').tickets
console.log(preloadTickets)

export default (state = preloadTickets, action) => {
	switch (action.type) {
		case AddTicket:
			return [...state, action.payload]
		default:
			return state
	}
}
