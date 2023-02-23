import { useState } from 'react'
import { Button, Stack } from 'react-bootstrap'

const DeleteField = ({ TypeSelect, name, setDeleteBtn, handleDelete }) => {
	const [value, setValue] = useState(null)
	const handleDeleteBtn = () => {
		if (value === null) return
		handleDelete(value.id)
	}
	return (
		<Stack gap={2}>
			<h5>
				Which one you want to <strong>delete</strong>?
			</h5>
			<TypeSelect name={name} typeValuse={value} setTypeValuse={setValue} />
			<Stack
				direction="horizontal"
				gap={3}
				className="justify-content-end my-3"
			>
				<Button variant="outline-secondary" onClick={() => setDeleteBtn(false)}>
					Cancel
				</Button>
				<Button variant="danger" onClick={handleDeleteBtn}>
					Delete
				</Button>
			</Stack>
		</Stack>
	)
}

export default DeleteField
