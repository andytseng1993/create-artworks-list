import { useState } from 'react'
import { Button, Modal, Stack } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import CreateField from './CreateField'
import DeleteField from './DeleteField'
import EditField from './EditField'

const FnBtn = ({ createAction, deleteAction, editAction, name, Select }) => {
	const [show, setShow] = useState(false)
	const [createBtn, setCreateBtn] = useState(false)
	const [deleteBtn, setDeleteBtn] = useState(false)
	const [editBtn, setEditBtn] = useState(false)
	const dispatch = useDispatch()

	const handleCreate = (english, chinese) => {
		if (english.trim() === '' || chinese.trim() === '') return

		const data = {
			valueEg: english.trim(),
			value: chinese.trim(),
		}
		dispatch(createAction(data))
		toggle()
	}
	const handleEdit = (value, valueEg, id) => {
		const data = {
			value,
			valueEg,
			id,
		}
		dispatch(editAction(data))
		toggle()
	}
	const handleDelete = (id) => {
		dispatch(deleteAction(id))
		toggle()
	}

	const toggle = () => {
		setShow(false)
		setEditBtn(false)
		setDeleteBtn(false)
		setCreateBtn(false)
	}

	return (
		<>
			<Button variant="primary" onClick={() => setShow(true)}>
				Edit {name}
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
						<DeleteField
							setDeleteBtn={setDeleteBtn}
							Select={Select}
							name={name}
							handleDelete={handleDelete}
						/>
					) : editBtn ? (
						<EditField
							name={name}
							setEditBtn={setEditBtn}
							Select={Select}
							handleEdit={handleEdit}
						/>
					) : createBtn ? (
						<CreateField
							setCreateBtn={setCreateBtn}
							name={name}
							handleCreate={handleCreate}
						/>
					) : (
						<Stack gap={2}>
							<h5>Which actions you want:</h5>
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

export default FnBtn
