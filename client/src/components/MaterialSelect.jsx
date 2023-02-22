import Select from 'react-select'
import MaterialOptions from '../docs/MaterialOptions'

const MaterialSelect = ({ name, materialValuse, setMaterialValuse }) => {
	return (
		<Select
			isMulti
			isSearchable
			isClearable
			name={name}
			options={MaterialOptions}
			className="basic-multi-select"
			classNamePrefix="select"
			value={materialValuse}
			onChange={(values) => setMaterialValuse([...values])}
		/>
	)
}

export default MaterialSelect
