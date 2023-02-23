import { ACTIONS } from './types'
import axios from 'axios'

export const getType = () => (dispatch) => {
	axios.get('/api/type').then((res) => {
		dispatch({
			type: ACTIONS.GET_TYPES,
			payload: res.data,
		}).catch((err) => console.log(err))
	})
}

export const createType = (data) => (dispatch) => {
	axios.post('/api/type', data).then((res) => {
		dispatch({
			type: ACTIONS.CREATE_TYPE,
			payload: res.data,
		})
	})
}
export const editType = () => {
	return {
		type: ACTIONS.EDIT_TYPE,
	}
}
export const deleteType = () => {
	return {
		type: ACTIONS.DELETE_TYPE,
	}
}
