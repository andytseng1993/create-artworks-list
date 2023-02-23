import Select from 'react-select'
import TypeOptions from '../docs/TypeOptions'

const TypeSelect = ({ name, typeValuse, setTypeValuse }) => {
	return (
		<Select
			isSearchable
			isClearable
			name={name}
			options={TypeOptions}
			className="basic-multi-select w-100"
			classNamePrefix="select"
			value={typeValuse}
			onChange={(value) => setTypeValuse(value)}
		/>
	)
}

export default TypeSelect
