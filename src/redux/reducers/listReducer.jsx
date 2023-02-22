import { ACTIONS } from '../actions/types'

export const listReducer = (state = [], action) => {
	switch (action.type) {
		case ACTIONS.GET_ARTWORKS:
			return [...state]
		case ACTIONS.ADD_ARTWORK:
			return [...state, action.payload]
		case ACTIONS.DELETE_ARTWORK:
			return state.filter((artwork) => artwork.id !== action.payload)
		default:
			return state
	}
}
