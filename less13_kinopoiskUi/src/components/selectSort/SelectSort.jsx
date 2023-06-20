import './SelectSort.css'

function SelectSort() {
  return (
    <label className="label-filter" htmlFor="sort-select">
      Сортировать по:
      <select className="select-filter" name="sort" id="sort-select">
        <option value="value1">Популярные по возрастанию</option>
        <option value="value1">Популярные по убыванию</option>
        <option value="value2">По году релиза</option>
      </select>
    </label>
  );
}

export default SelectSort;
