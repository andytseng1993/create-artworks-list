import { ACTIONS } from '../actions/types'

const initial = JSON.parse(localStorage.getItem('list')) || []

export const listReducer = (state = initial, action) => {
	switch (action.type) {
		case ACTIONS.GET_ARTWORKS:
			return [...state]
		case ACTIONS.ADD_ARTWORK:
			localStorage.setItem('list', JSON.stringify([...state, action.payload]))
			return [...state, action.payload]
		case ACTIONS.DELETE_ARTWORK:
			const newList = state.filter((artwork) => artwork.id !== action.payload)
			localStorage.setItem('list', JSON.stringify(newList))
			return newList
		case ACTIONS.DELETE_ALL_ARTWORK:
			localStorage.removeItem('list')
			return []
		default:
			return state
	}
}
