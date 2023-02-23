import { useRef, useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'

const EditField = ({ name, setEditBtn, TypeSelect }) => {
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
	}
	return (
		<Stack gap={2}>
			<Stack
				direction="horizontal"
				gap={4}
				className="d-flex align-items-center"
			>
				<h5>Change: </h5>
				<TypeSelect name={name} typeValuse={value} setTypeValuse={setValue} />
			</Stack>
			<Stack
				direction="horizontal"
				gap={2}
				className="d-flex align-items-center justify-content-between"
			>
				<p className="w-25 m-0">{value ? value.value : 'Chinese'}</p>
				<h5>{'=>'}</h5>
				<Form className="w-75">
					<Form.Control type="text" autoFocus={true} ref={editValueRef} />
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
					<Form.Control type="text" autoFocus={true} ref={editEgValueRef} />
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
