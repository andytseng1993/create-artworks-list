import { useRef } from 'react'
import { Button, Image, Stack } from 'react-bootstrap'

const ImageResize = () => {
	const hiddenFileInput = useRef(null)
	const imageRef = useRef(null)

	const handleLoadImage = (event) => {
		hiddenFileInput.current.click()
	}
	const handleLoadImageChange = (event) => {
		handleImage(event.target.files[0])
	}
	const handleImage = (file) => {
		console.log(file)
	}
	return (
		<>
			<h5>Resiz Image</h5>
			<Stack gap={2}>
				<input
					ref={hiddenFileInput}
					onChange={handleLoadImageChange}
					style={{ display: 'none' }}
					type="file"
					accept="image/png, image/jpeg, image/gif"
				/>
				<Button onClick={handleLoadImage}>Select Image</Button>

				<Image
					rounded
					className="w-50 h-50"
					alt="resizeImage"
					ref={imageRef}
				></Image>
			</Stack>
		</>
	)
}

export default ImageResize
