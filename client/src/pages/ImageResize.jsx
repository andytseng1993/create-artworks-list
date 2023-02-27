import { useEffect, useRef, useState } from 'react'
import { Button, Col, Form, Image, Row, Stack } from 'react-bootstrap'
import { preview } from '../assets'
import { imageToCanvas } from '../components/imageToCanvas'
import ResizeForm from '../components/ResizeForm'

const ImageResize = () => {
	const hiddenFileInput = useRef(null)
	const imageRef = useRef(null)
	const [photo, setPhoto] = useState({
		name: null,
		width: null,
		height: null,
		size: null,
	})
	const [photoSrc, setPhotoSrc] = useState(preview)

	const handleCancelImage = () => {
		hiddenFileInput.current.value = ''
		setPhotoSrc(preview)
		setPhoto({ width: null, height: null, size: null })
	}
	const handleLoadImage = () => {
		hiddenFileInput.current.click()
	}
	const handleLoadImageChange = (event) => {
		handleImage(event.target.files[0])
	}
	const handleImage = (file) => {
		console.log(file)
		let reader = new FileReader()
		let load = false
		reader.readAsDataURL(file)
		reader.onload = () => {
			setPhotoSrc(reader.result)
			console.log(Math.floor((reader.result.length - 22) / 4) * 3)
			load = true
		}
		imageRef.current.onload = () => {
			if (!hiddenFileInput.current.value) return
			let width = imageRef.current.naturalWidth
			let height = imageRef.current.naturalHeight
			setPhoto({
				width,
				height,
				size: file.size,
				name: file.name.split('.')[0].toUpperCase().replaceAll(' ', '_'),
			})
		}
	}
	console.log(photo)
	const handleSaveImage = (resizeWidth, resizeHeight, resizeSize, min) => {
		let widthRatio = resizeWidth / photo.width
		let heightRatio = resizeHeight / photo.height
		let size = resizeSize * 1024
		let name = min ? `${photo.name}_min` : photo.name
		if (widthRatio < heightRatio) {
			console.log(widthRatio)
			let width = resizeWidth
			let height = photo.height * widthRatio
			imageToCanvas(width, height, size, name, imageRef.current)
		} else {
			let width = photo.width * heightRatio
			let height = resizeHeight
			imageToCanvas(width, height, size, name, imageRef.current)
		}
	}
	const handleSaveThumbnail = (resizeWidth, resizeHeight, resizeSize) => {}

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
					<ResizeForm handleSaveImage={handleSaveImage} />
				</Col>
			</Row>
		</>
	)
}

export default ImageResize
