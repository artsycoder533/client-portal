const Select = ({label, name, id, htmlFor, onChange, value, error, data}) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={htmlFor}>{label}</label>
        <select name={name} id={id} value={value} onChange={onChange} className="py-1 bg-purple-200">
          {data.map((insurance, index) => {
            return <option value={insurance} key={index}>{insurance}</option>;
          })}
        </select>
        <span className="text-red-500">{error}</span>
      </div>
    );
}
 
export default Select;