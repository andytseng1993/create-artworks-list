import { ACTIONS } from './types'
import axios from 'axios'

export const getType = () => (dispatch, getState) => {
	const types = getState().types
	if (types.length === 0) {
		axios
			.get('/api/type')
			.then((res) => {
				localStorage.setItem('types', JSON.stringify(res.data))
				dispatch({
					type: ACTIONS.GET_TYPES,
					payload: res.data,
				})
			})
			.catch((err) => console.log(err))
	}
}

export const createType = (data) => (dispatch, getState) => {
	const state = getState().types
	axios
		.post('/api/type', data)
		.then((res) => {
			localStorage.setItem('types', JSON.stringify([res.data, ...state]))
			dispatch({
				type: ACTIONS.CREATE_TYPE,
				payload: res.data,
			})
		})
		.catch((err) => console.log(err))
}
export const editType = (data) => (dispatch) => {
	axios
		.put('/api/type', data)
		.then((res) => {
			dispatch({
				type: ACTIONS.EDIT_TYPE,
				payload: res.data,
			})
		})
		.catch((err) => console.log(err))
}
export const deleteType = (id) => (dispatch) => {
	axios
		.delete(`/api/type/${id}`)
		.then(() => {
			dispatch({
				type: ACTIONS.DELETE_TYPE,
				payload: id,
			})
		})
		.catch((err) => console.log(err))
}
