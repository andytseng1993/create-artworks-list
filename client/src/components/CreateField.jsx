import { useRef } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'

const CreateField = ({ name, setCreateBtn, handleCreate }) => {
	const englishName = useRef(null)
	const chineseName = useRef(null)
	return (
		<Stack gap={2}>
			<h5>Create Type</h5>
			<Stack gap={2}>
				<Form>
					<Form.Label>中文 {name}:</Form.Label>
					<Form.Control type="text" autoFocus={true} ref={chineseName} />
				</Form>
				<Form>
					<Form.Label>English {name}:</Form.Label>
					<Form.Control type="text" ref={englishName} />
				</Form>
			</Stack>
			<Stack
				direction="horizontal"
				gap={3}
				className="justify-content-end my-3"
			>
				<Button variant="outline-danger" onClick={() => setCreateBtn(false)}>
					Cancel
				</Button>
				<Button
					variant="primary"
					onClick={() =>
						handleCreate(englishName.current.value, chineseName.current.value)
					}
				>
					Create
				</Button>
			</Stack>
		</Stack>
	)
}
export default CreateField
