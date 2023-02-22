import { Link, Outlet } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

const AppNavBar = () => {
	return (
		<>
			<Navbar expand="md" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>
						<Link
							to={'/'}
							className={`text-reset text-decoration-none nav-link`}
						>
							Home
						</Link>
					</Navbar.Brand>
				</Container>
			</Navbar>
			<main className="main p-3">
				<Outlet />
			</main>
		</>
	)
}
export default AppNavBar
