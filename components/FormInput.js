const FormInput = ({label, type, name, id, htmlFor, onChange, value, error}) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={htmlFor}>{label}</label>
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          className={`bg-purple-200 p-1 ${error && 'bg-red-300 border-3 border-red-700'}`}
        />
        <span className="text-red-500">{error}</span>
      </div>
    );
}
 
export default FormInput;
