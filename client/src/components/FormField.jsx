import { Form } from 'react-bootstrap'

const FormField = ({
	title,
	controlId,
	type,
	disabled = false,
	required = true,
	defaultValue,
	inputRef,
}) => {
	return (
		<Form.Group className="mb-3" controlId={controlId}>
			<Form.Label>{title}</Form.Label>
			<Form.Control
				type={type}
				placeholder={title}
				disabled={disabled}
				required={required}
				defaultValue={defaultValue}
				ref={inputRef}
			/>
		</Form.Group>
	)
}

export default FormField
