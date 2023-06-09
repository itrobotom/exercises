import FilterPerson from './FilterPerson.jsx';

//выводим список пользвателей сначала химиков, затем всех остальных

function App() {
  return (
    <div>
      <FilterPerson 
        isChemist={true}
      />
      <FilterPerson 
        isChemist={false}
      />
    </div>
  );
}

export default App;

