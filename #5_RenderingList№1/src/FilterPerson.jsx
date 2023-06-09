import { people } from './data.jsx';
import { getImageUrl } from './utils.jsx';

export default function FilterPerson({ isChemist }) {
    let listPeople;
    let nameListPerson;
    if(isChemist) {
        //создаем массив из персон химиков
        listPeople = people.filter(person => 
            person.profession === 'chemist'
        );
        nameListPerson = 'Scientist chemist';
    } else {
        //создаем массив из персон не химиков (все остальные)
        listPeople = people.filter(person => 
            person.profession !== 'chemist'
        );
        nameListPerson = 'Scientist NO chemist';
    }
    
    const listItems = listPeople.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>{nameListPerson}</h1>
      <ul>{listItems}</ul>
    </article>
  );
}