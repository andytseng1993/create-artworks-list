import { useRef, useState } from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addArtwork } from '../redux/actions/listActions'
import ArtworkLists from './ArtworkLists'
import FormField from './FormField'
import MaterialSelect from './MaterialSelect'
import TypeSelect from './TypeSelect'
import { v4 as uuidv4 } from 'uuid'

const CreateJson = () => {
	const chineseTitleRef = useRef(null)
	const titleRef = useRef(null)
	const [typeValuse, setTypeValuse] = useState([])
	const [materialValuse, setMaterialValuse] = useState([])
	const yearRef = useRef(null)
	const widthRef = useRef(null)
	const heightRef = useRef(null)
	const unitRef = useRef(null)
	const [sellValue, setSellValue] = useState(false)
	const priceRef = useRef(null)
	const soldedRef = useRef(null)
	const dispatch = useDispatch()

	const materials = () => {
		let english = []
		let chinese = []
		let result = []
		materialValuse.map((material) => {
			english.push(material.valueEg)
			chinese.push(material.value)
		})
		result = [chinese.join(', '), english.join(', ')]
		return result
	}
	const priceCalc = () => {
		if (!sellValue) return [Number(0), Number(0)]
		return [
			Number(priceRef.current.value),
			Number(Math.ceil(priceRef.current.value / 30)),
		]
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const material = materials()
		const artWorkDetail = {
			id: uuidv4(),
			title: [chineseTitleRef.current.value, titleRef.current.value],
			thumbnail: `${titleRef.current.value}_min.jpg`,
			src: `${titleRef.current.value}.jpg`,
			type: [typeValuse.value, typeValuse.valueEg],
			material: material,
			year: Number(yearRef.current.value),
			size: `${widthRef.current.value}×${heightRef.current.value} ${unitRef.current.value}`,
			sell: sellValue,
			price: priceCalc(),
			solded: soldedRef.current.checked,
		}
		dispatch(addArtwork(artWorkDetail))
		chineseTitleRef.current.value = ''
		titleRef.current.value = ''
		setTypeValuse([])
		setMaterialValuse([])
		yearRef.current.value = ''
		widthRef.current.value = ''
		heightRef.current.value = ''
		setSellValue(false)
		priceRef.current.value = ''
		soldedRef.current.checked = false
	}

	return (
		<div className="row">
			<div className="col-5">
				<ArtworkLists />
			</div>
			<div className="col-7 my-3 px-5">
				<Stack direction="horizontal" gap={4} className="mb-4">
					<Button variant="primary">Add Type</Button>
					<Button variant="primary">Add Material</Button>
				</Stack>
				<Form onSubmit={handleSubmit}>
					<FormField
						title={'中文標題'}
						controlId={'ChineseTitle'}
						type={'text'}
						inputRef={chineseTitleRef}
					/>
					<FormField
						title={'Title'}
						controlId={'Title'}
						type={'text'}
						inputRef={titleRef}
					/>

					<Form.Group className="mb-3" controlId={'Type'}>
						<Form.Label>Type</Form.Label>
						<TypeSelect
							name={'Type'}
							typeValuse={typeValuse}
							setTypeValuse={setTypeValuse}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId={'Material'}>
						<Form.Label>Material</Form.Label>
						<MaterialSelect
							name={'Material'}
							materialValuse={materialValuse}
							setMaterialValuse={setMaterialValuse}
						/>
					</Form.Group>
					<FormField
						title={'Year'}
						controlId={'Year'}
						type={'number'}
						inputRef={yearRef}
					/>
					<Row className="d-flex align-items-center">
						<Col>
							<FormField
								title={'Width'}
								controlId={'Width'}
								type={'number'}
								inputRef={widthRef}
							/>
						</Col>
						×
						<Col>
							<FormField
								title={'Height'}
								controlId={'Height'}
								type={'number'}
								inputRef={heightRef}
							/>
						</Col>
						<Col>
							<FormField
								title={'Unit'}
								controlId={'unit'}
								type={'text'}
								defaultValue={'inches'}
								inputRef={unitRef}
							/>
						</Col>
					</Row>
					<Form.Group className="mb-3" controlId="sell">
						<Form.Check
							type="checkbox"
							label="Sell ?"
							checked={sellValue}
							onChange={() => setSellValue(!sellValue)}
						/>
					</Form.Group>
					<FormField
						title={'Price(臺幣)'}
						controlId={'price'}
						type={'number'}
						required={sellValue ? true : false}
						inputRef={priceRef}
						disabled={sellValue ? false : true}
					/>
					<Form.Group className="mb-3" controlId="Solded">
						<Form.Check type="checkbox" label="Solded ?" ref={soldedRef} />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	)
}

export default CreateJson
