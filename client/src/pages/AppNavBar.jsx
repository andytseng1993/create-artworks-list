import { Link, Outlet } from 'react-router-dom'
import { Navbar, Container, Nav, Stack } from 'react-bootstrap'

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
					<Stack direction="horizontal" gap={3}>
						<Nav.Item>
							<Link
								to={'/'}
								className={` text-decoration-none nav-link text-light`}
							>
								CreateList
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link
								to={'/image'}
								className={` text-decoration-none nav-link text-light`}
							>
								ImageResize
							</Link>
						</Nav.Item>
					</Stack>
				</Container>
			</Navbar>
			<main className="main p-3">
				<Outlet />
			</main>
		</>
	)
}
export default AppNavBar
