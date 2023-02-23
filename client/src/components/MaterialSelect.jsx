import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'

const MaterialSelect = ({ name, value, setValue, isMulti = true }) => {
	const MaterialOptions = useSelector((state) => state.materials)
	useEffect(() => {
		setValue(null)
	}, [MaterialOptions])
	return (
		<Select
			isMulti={isMulti}
			isSearchable
			isClearable
			name={name}
			options={MaterialOptions}
			className="basic-multi-select w-100"
			classNamePrefix="select"
			value={value}
			onChange={(values) => {
				if (Array.isArray(values)) {
					return setValue([...values])
				}
				return setValue(values)
			}}
		/>
	)
}

export default MaterialSelect
