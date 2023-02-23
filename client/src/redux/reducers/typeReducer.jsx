import { ACTIONS } from '../actions/types'
const initial = JSON.parse(localStorage.getItem('types')) || []

export const typeReducer = (state = initial, action) => {
	switch (action.type) {
		case ACTIONS.GET_TYPES:
			return [...state, ...action.payload]
		case ACTIONS.CREATE_TYPE:
			return [action.payload, ...state]
		case ACTIONS.EDIT_TYPE:
			const newTypes = state.map((type) => {
				if (type.id === action.payload.id) {
					return { ...action.payload }
				}
				return type
			})
			localStorage.setItem('types', JSON.stringify(newTypes))
			return newTypes
		default:
			return state
	}
}
