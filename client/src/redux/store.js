import { configureStore } from '@reduxjs/toolkit'
import { listReducer } from './reducers/listReducer'
import { typeReducer } from './reducers/typeReducer'

const store = configureStore({
	reducer: {
		lists: listReducer,
		types: typeReducer,
	},
})

export default store
