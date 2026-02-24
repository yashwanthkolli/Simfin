import './Input.styles.scss'

const Input = ({label, placeholder, required, value, onChange, name, width='100%'}) => {
  return (
    <div className='input-container' style={{width}}>
      <label className='label' htmlFor={name}>{label}</label>
      <input 
        className='input'
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        id={name}
        autoComplete={name}
      />
    </div>
  )
}

export default Input