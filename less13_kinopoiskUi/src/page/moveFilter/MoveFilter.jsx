import CheckGenre from "../../components/checkGenre/CheckGenre";
import Pagination from "../../components/pagination/Pagination";
import SelectSort from "../../components/selectSort/SelectSort";
import SelectYear from "../../components/selectYear/SelectYear";
import './MoveFilter.css';

function MoveFilter() {
  return (
    <div className="filter">
      <h1>Фильтры:</h1>
      <button className="button-filter">Сбросить все фильтры</button>
      <SelectSort />
      <SelectYear />
      <CheckGenre />
      <Pagination />
    </div>
  );
}

export default MoveFilter;
