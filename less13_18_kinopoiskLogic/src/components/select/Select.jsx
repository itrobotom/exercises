import './Select.css'


function SelectSort( {headerSelect, options} ) {
  return (
    <label className="label-filter">
      {headerSelect} 
      <select className="select-filter" name="sort" id="sort-select">
        {options.map((value, index) => (
          <option key={index} value={value}>{value}</option>
        ))}
      </select>
    </label>
  );
}

export default SelectSort;
