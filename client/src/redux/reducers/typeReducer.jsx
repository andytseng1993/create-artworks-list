import { ACTIONS } from '../actions/types'

export const typeReducer = (state = [], action) => {
	switch (action.type) {
		case ACTIONS.GET_TYPES:
			return [...state, ...action.payload]
		case ACTIONS.CREATE_TYPE:
			return [...state, action.payload]
		default:
			return state
	}
}
