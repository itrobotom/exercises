import './SelectYear.css'

function SelectYear() {
  const years = {
    arrYear: [],
    start: 2023,
    end: 1960,
  };

  for (let i = years.start; i > years.end - 1; i--) {
    years.arrYear.push(i);
  }

  return (
    <label className="label-filter">
      Год релиза:
      <select className="select-filter" name="year" id="sort-year">
        <option>Год релиза</option>
        {years.arrYear.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SelectYear;
