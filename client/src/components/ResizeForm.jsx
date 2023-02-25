import { Button, Col, Form, Row } from 'react-bootstrap'
import FormField from './FormField'

const ResizeForm = () => {
	return (
		<>
			<h3 className="mb-4">Resize Setting</h3>
			<h5 className="mb-2">Image</h5>
			<Form>
				<Row className="w-100 m-0">
					<Col className="p-0 me-3">
						<FormField
							title={'Max-Width (px)'}
							controlId={'imageWidth'}
							type={'number'}
							defaultValue={'1550'}
						/>
					</Col>
					<Col className="p-0">
						<FormField
							title={'Max-Height (px)'}
							controlId={'imageHeight'}
							type={'number'}
							defaultValue={'800'}
						/>
					</Col>
				</Row>
				<FormField
					title={'Size (kb)'}
					controlId={'imageSaize'}
					type={'number'}
					defaultValue={'250'}
				/>
			</Form>
			<div className="d-flex justify-content-end">
				<Button className="w-50">Download Image</Button>
			</div>
			<h5 className="mt-4 mb-2">Thumbnail</h5>
			<Form>
				<Row className="w-100 m-0">
					<Col className="p-0 me-3">
						<FormField
							title={'Max-Width (px)'}
							controlId={'imageWidth'}
							type={'number'}
							defaultValue={'500'}
						/>
					</Col>
					<Col className="p-0">
						<FormField
							title={'Max-Height (px)'}
							controlId={'imageHeight'}
							type={'number'}
							defaultValue={'400'}
						/>
					</Col>
				</Row>
				<FormField
					title={'Size (kb)'}
					controlId={'imageSaize'}
					type={'number'}
					defaultValue={'30'}
				/>
			</Form>
			<div className="d-flex justify-content-end">
				<Button className="w-50">Download Thumbnail</Button>
			</div>
		</>
	)
}

export default ResizeForm
