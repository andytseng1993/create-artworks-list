import { useSelector } from 'react-redux'
import Select from 'react-select'

const TypeSelect = ({ name, typeValuse, setTypeValuse }) => {
	const typeOptions = useSelector((state) => state.types)
	return (
		<Select
			isSearchable
			isClearable
			name={name}
			options={typeOptions}
			className="basic-multi-select w-100"
			classNamePrefix="select"
			value={typeValuse}
			onChange={(value) => setTypeValuse(value)}
		/>
	)
}

export default TypeSelect
