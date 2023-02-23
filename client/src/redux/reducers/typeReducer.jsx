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
		case ACTIONS.DELETE_TYPE:
			const deleteType = state.filter((type) => {
				return type.id !== action.payload
			})
			localStorage.setItem('types', JSON.stringify(deleteType))
			return deleteType
		default:
			return state
	}
}
