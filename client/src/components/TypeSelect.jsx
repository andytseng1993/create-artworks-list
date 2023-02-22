import Select from 'react-select'
import TypeOptions from '../docs/TypeOptions'

const TypeSelect = ({ name, typeValuse, setTypeValuse }) => {
	return (
		<Select
			isSearchable
			isClearable
			name={name}
			options={TypeOptions}
			className="basic-multi-select"
			classNamePrefix="select"
			value={typeValuse}
			onChange={(value) => setTypeValuse(value)}
		/>
	)
}

export default TypeSelect
