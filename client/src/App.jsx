import 'bootstrap/dist/css/bootstrap.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom'
import AppNavBar from './pages/AppNavBar'
import CreateJson from './pages/CreateJson'
import ImageResize from './pages/ImageResize'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<AppNavBar />}>
				<Route index element={<CreateJson />} />
				<Route path="/image" element={<ImageResize />} />
			</Route>
		)
	)
	return <RouterProvider router={router} />
}

export default App
