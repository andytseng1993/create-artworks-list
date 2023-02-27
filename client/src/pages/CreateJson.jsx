import { useEffect, useRef, useState } from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addArtwork } from '../redux/actions/listActions'
import ArtworkLists from '../components/ArtworkLists'
import FormField from '../components/FormField'
import MaterialSelect from '../components/MaterialSelect'
import TypeSelect from '../components/TypeSelect'
import { v4 as uuidv4 } from 'uuid'
import {
	getType,
	createType,
	deleteType,
	editType,
} from '../redux/actions/typeActions'
import {
	getMaterial,
	createMaterial,
	editMaterial,
	deleteMaterial,
} from '../redux/actions/mateiralAction'
import FnBtn from '../components/FnBtn'

const CreateJson = () => {
	const chineseTitleRef = useRef(null)
	const titleRef = useRef(null)
	const [typeValue, setTypeValue] = useState(null)
	const [materialValue, setMaterialValue] = useState(null)
	const yearRef = useRef(null)
	const widthRef = useRef(null)
	const heightRef = useRef(null)
	const unitRef = useRef(null)
	const [sellValue, setSellValue] = useState(false)
	const priceRef = useRef(null)
	const soldedRef = useRef(null)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getType())
		dispatch(getMaterial())
	}, [])

	const materials = () => {
		let english = []
		let chinese = []
		let result = []
		materialValue.map((material) => {
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
			title: [
				chineseTitleRef.current.value.trim(),
				titleRef.current.value.trim(),
			],
			thumbnail: `${titleRef.current.value
				.trim()
				.toUpperCase()
				.replaceAll(' ', '_')}_min.jpg`,
			src: `${titleRef.current.value
				.trim()
				.toUpperCase()
				.replaceAll(' ', '_')}.jpg`,
			type: [typeValue.value, typeValue.valueEg],
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
		setTypeValue(null)
		setMaterialValue(null)
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
				<Stack
					direction="horizontal"
					gap={4}
					className="mb-4 d-flex justify-content-between"
				>
					<h3>AtrWork Detail :</h3>

					<Stack direction="horizontal" gap={4}>
						<FnBtn
							createAction={createType}
							deleteAction={deleteType}
							editAction={editType}
							name={'Type'}
							Select={TypeSelect}
						/>
						<FnBtn
							createAction={createMaterial}
							deleteAction={deleteMaterial}
							editAction={editMaterial}
							name={'Mateiral'}
							Select={MaterialSelect}
						/>
					</Stack>
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
							value={typeValue}
							setValue={setTypeValue}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId={'Material'}>
						<Form.Label>Material</Form.Label>
						<MaterialSelect
							name={'Material'}
							value={materialValue}
							setValue={setMaterialValue}
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
					<Button variant="primary" type="submit" className="w-100">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	)
}

export default CreateJson
