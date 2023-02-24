import { useRef, useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'

const EditField = ({ name, setEditBtn, Select, handleEdit }) => {
	const [value, setValue] = useState(null)
	const editValueRef = useRef(null)
	const editEgValueRef = useRef(null)

	const handleEditBtn = () => {
		if (
			editValueRef.current.value.trim() === '' ||
			editEgValueRef.current.value.trim() === '' ||
			value === null
		)
			return
		handleEdit(
			editValueRef.current.value.trim(),
			editEgValueRef.current.value.trim(),
			value.id
		)
	}
	return (
		<Stack gap={2}>
			<Stack
				direction="horizontal"
				gap={4}
				className="d-flex align-items-center"
			>
				<h5>Change: </h5>
				<Select
					isMulti={false}
					name={name}
					typeValuse={value}
					setValue={setValue}
				/>
			</Stack>
			<Stack
				direction="horizontal"
				gap={2}
				className="d-flex align-items-center justify-content-between"
			>
				<p className="w-25 m-0">{value ? value.value : 'Chinese'}</p>
				<h5>{'=>'}</h5>
				<Form className="w-75">
					<Form.Control type="text" ref={editValueRef} placeholder="Chinese" />
				</Form>
			</Stack>
			<Stack
				direction="horizontal"
				gap={2}
				className="d-flex align-items-center"
			>
				<p className="w-25 m-0">{value ? value.valueEg : 'English'}</p>
				<h5>{'=>'}</h5>
				<Form className="w-75">
					<Form.Control
						type="text"
						ref={editEgValueRef}
						placeholder="English"
					/>
				</Form>
			</Stack>

			<Stack
				direction="horizontal"
				gap={3}
				className="justify-content-end my-3"
			>
				<Button variant="outline-danger" onClick={() => setEditBtn(false)}>
					Cancel
				</Button>
				<Button variant="primary" onClick={handleEditBtn}>
					Edit
				</Button>
			</Stack>
		</Stack>
	)
}

export default EditField
