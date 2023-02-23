import { useState } from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap'
import CreateBtn from './CreateBtn'

const EditType = () => {
	const [show, setShow] = useState(false)
	const [createBtn, setCreateBtn] = useState(false)
	const [deleteBtn, setDeleteBtn] = useState(false)
	const [editBtn, setEditBtn] = useState(false)
	const [errorMsg, setErrorMsg] = useState('')

	const handleCreate = () => {}
	const DeleteCategory = () => {}

	const toggle = () => {
		setShow(false)
		setEditBtn(false)
		setDeleteBtn(false)
		setCreateBtn(false)
		setErrorMsg('')
	}

	const handleDeleteType = () => {}
	return (
		<>
			<Button variant="primary" onClick={() => setShow(true)}>
				Edit Type
			</Button>
			<Modal
				show={show}
				centered
				onHide={toggle}
				backdrop="static"
				keyboard={false}
				size="md"
			>
				<Modal.Header closeButton>
					<Modal.Title>Edit Type</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{deleteBtn ? (
						<Stack gap={2}>
							<h5>
								Do you want to <strong>delete</strong> {'"'}
							</h5>

							<Stack
								direction="horizontal"
								gap={3}
								className="justify-content-end my-3"
							>
								<Button
									variant="outline-secondary"
									onClick={() => setDeleteBtn(!deleteBtn)}
								>
									Cancel
								</Button>
								<Button variant="danger" onClick={DeleteCategory}>
									Delete
								</Button>
							</Stack>
						</Stack>
					) : editBtn ? (
						<Stack gap={2}>
							<h5>Change</h5>
							<Form>
								<Form.Control type="text" autoFocus={true} />
							</Form>
							<Stack
								direction="horizontal"
								gap={3}
								className="justify-content-end my-3"
							>
								<Button
									variant="outline-danger"
									onClick={() => setEditBtn(false)}
								>
									Cancel
								</Button>
								<Button variant="primary">Edit</Button>
							</Stack>
						</Stack>
					) : createBtn ? (
						<CreateBtn
							setCreateBtn={setCreateBtn}
							name={'Type'}
							handleCreate={handleCreate}
						/>
					) : (
						<Stack gap={2}>
							<h5>Which actions you want:</h5>
							{errorMsg ? <Alert variant="danger">{errorMsg}</Alert> : null}
							<Stack
								direction="horizontal"
								gap={3}
								className="justify-content-end my-3"
							>
								<Button variant="primary" onClick={() => setCreateBtn(true)}>
									Create
								</Button>
								<Button
									variant="outline-primary"
									onClick={() => setEditBtn(true)}
								>
									Edit
								</Button>
								<Button variant="danger" onClick={() => setDeleteBtn(true)}>
									Delete
								</Button>
								<Button variant="outline-secondary" onClick={toggle}>
									Cancel
								</Button>
							</Stack>
						</Stack>
					)}
				</Modal.Body>
			</Modal>
		</>
	)
}

export default EditType
