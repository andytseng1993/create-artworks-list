import { useState } from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createType, editType } from '../redux/actions/typeActions'
import CreateBtn from './CreateBtn'
import EditField from './EditField'
import TypeSelect from './TypeSelect'

const EditType = () => {
	const [show, setShow] = useState(false)
	const [createBtn, setCreateBtn] = useState(false)
	const [deleteBtn, setDeleteBtn] = useState(false)
	const [editBtn, setEditBtn] = useState(false)
	const [errorMsg, setErrorMsg] = useState('')
	const dispatch = useDispatch()

	const handleCreate = (english, chinese) => {
		if (english.trim() === '' || chinese.trim() === '') return

		const data = {
			valueEg: english.trim(),
			value: chinese.trim(),
		}
		dispatch(createType(data))
		toggle()
	}
	const handleEdit = (value, valueEg, id) => {
		const data = {
			value,
			valueEg,
			id,
		}
		dispatch(editType(data))
		toggle()
	}

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
				size="lg"
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
						<EditField
							name={'Type'}
							setEditBtn={setEditBtn}
							TypeSelect={TypeSelect}
							handleEdit={handleEdit}
						/>
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
