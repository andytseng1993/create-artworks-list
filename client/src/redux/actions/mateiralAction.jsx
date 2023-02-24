import { ACTIONS } from './types'
import axios from 'axios'

export const getMaterial = () => (dispatch, getState) => {
	const materials = getState().materials
	if (materials.length === 0) {
		axios
			.get('/api/material')
			.then((res) => {
				localStorage.setItem('materials', JSON.stringify(res.data))
				dispatch({
					type: ACTIONS.GET_MATERIAL,
					payload: res.data,
				})
			})
			.catch((err) => console.log(err))
	}
}

export const createMaterial = (data) => (dispatch, getState) => {
	const state = getState().materials
	axios
		.post('/api/material', data)
		.then((res) => {
			localStorage.setItem('materials', JSON.stringify([res.data, ...state]))
			dispatch({
				type: ACTIONS.CREATE_MATERIAL,
				payload: res.data,
			})
		})
		.catch((err) => console.log(err))
}
export const editMaterial = (data) => (dispatch) => {
	axios
		.put('/api/material', data)
		.then((res) => {
			dispatch({
				type: ACTIONS.EDIT_MATERIAL,
				payload: res.data,
			})
		})
		.catch((err) => console.log(err))
}
export const deleteMaterial = (id) => (dispatch) => {
	axios
		.delete(`/api/material/${id}`)
		.then(() => {
			dispatch({
				type: ACTIONS.DELETE_MATERIAL,
				payload: id,
			})
		})
		.catch((err) => console.log(err))
}
