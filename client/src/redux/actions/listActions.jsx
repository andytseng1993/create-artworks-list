import { ACTIONS } from './types'

export const getArtwork = () => {
	return {
		type: ACTIONS.GET_ARTWORKS,
	}
}

export const addArtwork = (data) => {
	return {
		type: ACTIONS.ADD_ARTWORK,
		payload: data,
	}
}

export const deleteArtwork = (id) => {
	return {
		type: ACTIONS.DELETE_ARTWORK,
		payload: id,
	}
}
