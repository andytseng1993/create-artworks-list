import { useEffect, useRef, useState } from 'react'
import { Button, Col, Form, Image, Row, Stack } from 'react-bootstrap'
import { preview } from '../assets'
import ResizeForm from '../components/ResizeForm'

const ImageResize = () => {
	const hiddenFileInput = useRef(null)
	const imageRef = useRef(null)
	const [photoSrc, setPhotoSrc] = useState(preview)

	const handleCancelImage = () => {
		setPhotoSrc(preview)
	}
	const handleLoadImage = () => {
		hiddenFileInput.current.click()
	}
	const handleLoadImageChange = (event) => {
		handleImage(event.target.files[0])
	}
	const handleImage = (file) => {
		let reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			setPhotoSrc(reader.result)
		}
	}
	return (
		<>
			<h5>Resiz Image</h5>
			<Row>
				<Col className="px-4 w-50">
					<Stack gap={2}>
						<input
							ref={hiddenFileInput}
							onChange={handleLoadImageChange}
							style={{ display: 'none' }}
							type="file"
							accept="image/png, image/jpeg, image/gif"
						/>
						<Stack direction="horizontal" gap={4}>
							<Button className="w-75" onClick={handleLoadImage}>
								Select Image
							</Button>
							<Button
								className="w-25"
								onClick={handleCancelImage}
								variant="outline-secondary"
							>
								Cancel
							</Button>
						</Stack>

						<Image
							rounded
							src={photoSrc}
							style={{ maxWidth: '90%' }}
							className={`object-contain m-auto p-3 border rounded my-2 ${
								photoSrc === preview ? 'opacity-50' : ''
							}`}
							alt="resizeImage"
							ref={imageRef}
						></Image>
					</Stack>
				</Col>
				<Col>
					<ResizeForm />
				</Col>
			</Row>
		</>
	)
}

export default ImageResize
