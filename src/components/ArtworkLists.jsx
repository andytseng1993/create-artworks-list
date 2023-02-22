import { Accordion, Button, ListGroup, Stack } from 'react-bootstrap'
import { deleteArtwork } from '../redux/actions/listActions'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo, useRef } from 'react'

const ArtworkLists = () => {
	const artworks = useSelector((state) => state.lists)
	const dispatch = useDispatch()
	const downloadRef = useRef(null)
	console.log(artworks)

	const newArtworks = useMemo(() => {
		return artworks.map((artwork) => {
			return { ...artwork, id: undefined }
		})
	}, [artworks])
	const fontSpider = useMemo(() => {
		let font = []
		let fontString = ''
		artworks.forEach((artwork) => {
			if (!fontString.includes(artwork.title[0])) {
				font.push(artwork.title[0])
			}
			if (!fontString.includes(artwork.type[0])) {
				font.push(artwork.type[0])
			}
			artwork.material[0].split(', ').forEach((material) => {
				if (!fontString.includes(material)) {
					font.push(material)
				}
			})
			fontString = font.join('')
		})
		return fontString
	}, [artworks])
	console.log(fontSpider)
	const handleDelete = (id) => {
		dispatch(deleteArtwork(id))
	}
	const handleDownload = () => {
		if (artworks.length === 0) return
		downloadRef.current.click()
		console.log(JSON.stringify(newArtworks, null, 2))
	}
	return (
		<>
			<Stack
				direction="horizontal"
				className="d-felx justify-content-between align-items-center"
			>
				<h3 className="my-4">New ArtWorks List :</h3>
				<Button onClick={handleDownload}>Download List</Button>
				<a
					ref={downloadRef}
					className="d-none hidden"
					href={`data:text/json;charset=utf-8,${encodeURIComponent(
						JSON.stringify(newArtworks, null, 4)
					)}`}
					download={`newArtworkList.txt`}
				></a>
			</Stack>
			<ListGroup>
				{artworks.length ? (
					artworks.map((artwork) => (
						<ListGroup.Item key={artwork.id}>
							<Stack direction="horizontal" gap={2}>
								<Accordion className="w-100">
									<Accordion.Item eventKey="0">
										<Accordion.Header>
											{artwork.title[1] + ' (' + artwork.title[0] + ')'}
										</Accordion.Header>
										<Accordion.Body>
											<p className="mb-1">Type : {artwork.type.join(' ,')}</p>
											<p className="mb-1">
												Material : {artwork.material.join(' ,')}
											</p>
											<p className="mb-1">Year : {artwork.year}</p>
											<p className="mb-1">Size : {artwork.size}</p>
											<p className="mb-1">
												Sell ? : {artwork.sell ? 'Yes' : 'No'}
											</p>
											<p className="mb-1">
												Price :{' '}
												{'$' +
													artwork.price[0] +
													' NTD, $' +
													artwork.price[1] +
													' Dollar'}
											</p>
											<p className="mb-1">
												Solded ? : {artwork.solded ? 'Yes' : 'No'}
											</p>
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
								<Button
									variant="danger"
									size="sm"
									onClick={() => handleDelete(artwork.id)}
								>
									Delete
								</Button>
							</Stack>
						</ListGroup.Item>
					))
				) : (
					<h5>List is empty!</h5>
				)}
			</ListGroup>
		</>
	)
}
export default ArtworkLists
