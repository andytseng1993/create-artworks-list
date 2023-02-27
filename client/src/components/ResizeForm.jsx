import { useRef } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import FormField from './FormField'

const ResizeForm = ({ handleSaveImage }) => {
	const resizeWidthRef = useRef(null)
	const resizeHeightRef = useRef(null)
	const resizeSizeRef = useRef(null)
	const thumbnailWidthRef = useRef(null)
	const thumbnailHeightRef = useRef(null)
	const thumbnailSizeRef = useRef(null)

	const saveImage = () => {
		let min = false
		handleSaveImage(
			resizeWidthRef.current.value,
			resizeHeightRef.current.value,
			resizeSizeRef.current.value,
			min
		)
	}
	const saveThumbnail = () => {
		let min = true
		handleSaveImage(
			thumbnailWidthRef.current.value,
			thumbnailHeightRef.current.value,
			thumbnailSizeRef.current.value,
			min
		)
	}
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
							inputRef={resizeWidthRef}
						/>
					</Col>
					<Col className="p-0">
						<FormField
							title={'Max-Height (px)'}
							controlId={'imageHeight'}
							type={'number'}
							defaultValue={'800'}
							inputRef={resizeHeightRef}
						/>
					</Col>
				</Row>
				<FormField
					title={'Size (kb)'}
					controlId={'imageSize'}
					type={'number'}
					defaultValue={'250'}
					inputRef={resizeSizeRef}
				/>
			</Form>
			<div className="d-flex justify-content-end">
				<Button className="w-50" onClick={saveImage}>
					Download Image
				</Button>
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
							inputRef={thumbnailWidthRef}
						/>
					</Col>
					<Col className="p-0">
						<FormField
							title={'Max-Height (px)'}
							controlId={'imageHeight'}
							type={'number'}
							defaultValue={'400'}
							inputRef={thumbnailHeightRef}
						/>
					</Col>
				</Row>
				<FormField
					title={'Size (kb)'}
					controlId={'imageSaize'}
					type={'number'}
					defaultValue={'30'}
					inputRef={thumbnailSizeRef}
				/>
			</Form>
			<div className="d-flex justify-content-end">
				<Button className="w-50" onClick={saveThumbnail}>
					Download Thumbnail
				</Button>
			</div>
		</>
	)
}

export default ResizeForm
