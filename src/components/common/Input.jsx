const Input = ({
  type = 'text',
  name,
  id,
  className,
  placeholder,
  required = false,
  label,
  readOnly = false,
  value,
  handleOnClick,
  handleOnBlur,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id ? id : name}
          className='input-label'
        >
          {label} {required && <span className='text-red-600'>*</span>}
        </label>
      )}

      <div className='relative'>
        <input
          type={type}
          id={id ? id : name}
          name={name}
          className={`input-field ${className}`}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          value={value}
          onClick={handleOnClick}
          onBlur={handleOnBlur}
        />
      </div>
    </div>
  );
};

export default Input;
