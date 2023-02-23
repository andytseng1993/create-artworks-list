import { configureStore } from '@reduxjs/toolkit'
import { listReducer } from './reducers/listReducer'
import { materialReducer } from './reducers/materialReducer'
import { typeReducer } from './reducers/typeReducer'

const store = configureStore({
	reducer: {
		lists: listReducer,
		types: typeReducer,
		materials: materialReducer,
	},
})

export default store
