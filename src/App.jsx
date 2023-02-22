import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom'
import AppNavBar from './components/AppNavBar'
import CreateJson from './components/CreateJson'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<AppNavBar />}>
				<Route index element={<CreateJson />} />
			</Route>
		)
	)
	return <RouterProvider router={router} />
}

export default App
