export async function imageToCanvas(width, height, imageSize, name, imageRef) {
	const canvas = document.createElement('canvas')
	canvas.width = width
	canvas.height = height
	const ctx = canvas.getContext('2d')
	ctx.drawImage(imageRef, 0, 0, width, height)

	let quality = 0.5
	let result = {
		diffSize: imageSize,
		url: '',
	}
	for (let x = 1; x <= 8; x++) {
		let data = canvas.toDataURL('image/jpeg', quality)
		let resultSize = Math.ceil((data.length - 22) * 0.75)
		let y = 0.5 ** (x + 1)
		let diff = Math.abs(resultSize - imageSize)
		if (result.diffSize > diff) {
			result.diffSize = diff
			result.url = data
		}
		if (x >= 7) {
			y = 0.5 ** 7
		}
		if (resultSize < imageSize) {
			quality += y
		} else if (resultSize > imageSize) {
			quality -= y
		} else {
			break
		}
	}
	downloadBase64File(result.url, name)
}
export function downloadBase64File(base64Data, filename) {
	var element = document.createElement('a')
	element.setAttribute('href', base64Data)
	element.setAttribute('download', filename)
	element.style.display = 'none'
	document.body.appendChild(element)
	element.click()
	document.body.removeChild(element)
}
