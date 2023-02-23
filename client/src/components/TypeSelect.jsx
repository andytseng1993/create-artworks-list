import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'

const TypeSelect = ({ name, value, setValue }) => {
	const typeOptions = useSelector((state) => state.types)
	useEffect(() => {
		setValue(null)
	}, [typeOptions])
	return (
		<Select
			isSearchable
			isClearable
			name={name}
			options={typeOptions}
			className="basic-multi-select w-100"
			classNamePrefix="select"
			value={value}
			onChange={(value) => setValue(value)}
		/>
	)
}

export default TypeSelect
