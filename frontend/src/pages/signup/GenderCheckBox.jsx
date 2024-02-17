const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
    return (
        <div className='flex mt-2'>
            <div className="form-control">
                <label className={`cursor-pointer gap-2 label ${(selectedGender === 'Male') ? 'checked' : ''}`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox checkbox-info"
                        onChange={() => onCheckBoxChange('Male')}
                        checked={selectedGender === 'Male'} />
                </label>
            </div>
            <div className="form-control">
                <label className={`cursor-pointer gap-2 label ${(selectedGender === 'Female') ? 'checked' : ''}`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox checkbox-info"
                        onChange={() => onCheckBoxChange('Female')}
                        checked={selectedGender === 'Female'} />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox

/*
// Starter code for this file:

const GenderCheckBox = () => {
    return (
        <div className='flex mt-2'>
            <div className="form-control">
                <label className="cursor-pointer gap-2 label">
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox checkbox-info" />
                </label>
            </div>
            <div className="form-control">
                <label className="cursor-pointer gap-2 label">
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox checkbox-info" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox
*/