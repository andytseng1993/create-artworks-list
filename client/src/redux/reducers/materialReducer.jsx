import { ACTIONS } from '../actions/types'
const initial = JSON.parse(localStorage.getItem('materials')) || []

export const materialReducer = (state = initial, action) => {
	switch (action.type) {
		case ACTIONS.GET_MATERIAL:
			return [...state, ...action.payload]
		case ACTIONS.CREATE_MATERIAL:
			return [action.payload, ...state]
		case ACTIONS.EDIT_MATERIAL:
			const newMaterials = state.map((material) => {
				if (material.id === action.payload.id) {
					return { ...action.payload }
				}
				return material
			})
			localStorage.setItem('materials', JSON.stringify(newMaterials))
			return newMaterials
		case ACTIONS.DELETE_MATERIAL:
			const deleteMaterial = state.filter((material) => {
				return material.id !== action.payload
			})
			localStorage.setItem('materials', JSON.stringify(deleteMaterial))
			return deleteMaterial
		default:
			return state
	}
}
