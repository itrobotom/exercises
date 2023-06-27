import React, { useState, useEffect } from "react";
import CheckGenre from "../../components/checkGenre/CheckGenre";
import Pagination from "../../components/pagination/Pagination";
import {Select} from "../../components/select/Select"
import {categories, years} from '../../data/data'
import {genre} from '../../data/data'
import {RequestGenre} from '../../components/Network';
import './MoveFilter.css';

function MoveFilter() {
  const [genres, setGenries] = useState([]); //храним данные с сервера в genries
  const [isGetGenre, setIsGetGenre] = useState(false);
  //массив id выделенных элементов галочками (создается на основании всего списка жанров json файла)
  const [selectedGenresIds, setSelectedGenresIds] = useState([]);

  //переменные состояния хранения селектов фильтров
  const [selectSort, setSelectSort] = useState('');
  const [selectYear, setSelectYear] = useState('');

  useEffect(() => { //запрос данных только после рендера всей страницы
    RequestGenre()
      .then((jsonGenre) => {
        console.log('Данные по жанрам с сервера'); //`Данные по жанрам с сервера ${jsonGenre.genres}` При преобразовании массива объектов в строку с помощью шаблонных строк (``), каждый объект преобразуется в строку "[object Object]".
        console.log('Данные по жанрам с сервера');
        //Чтобы вывести содержимое объектов в виде читаемых значений, можно использовать метод JSON.stringify() с параметром null для отступов. 
        //Это преобразует объекты в строку JSON с отступами, делая их более читаемыми.
        //2 - количество отступов 
        console.log(JSON.stringify(jsonGenre.genres, null, 2));
        setGenries(jsonGenre.genres); //сохранили жанры, пришедшие с сервера
        setIsGetGenre(true);
      })
  }, []); //пустой массив чтобы перерендер не зациклился
  
  //создаем и обновляем массив id элементов с выбранными элементами из списка жанров
  function handleChangeItem(nextGenre){
    const updatedSelectedIds = [...selectedGenresIds]; //создаем новый массив updatedSelectedIds, который копирует элементы из selectedGenresIds.
    const index = updatedSelectedIds.indexOf(nextGenre.id); //если элемент не найден, вернется -1

    if (index !== -1) { 
      updatedSelectedIds.splice(index, 1); // Удалить идентификатор, если уже выбран
    } else {
      updatedSelectedIds.push(nextGenre.id); // Добавить идентификатор, если еще не выбран
    }

    setSelectedGenresIds(updatedSelectedIds);
    console.log(updatedSelectedIds); // Вывод обновленного массива идентификаторов выбранных жанров
  }

  function handleChangeSelectSort(selectSort) {
    setSelectSort(selectSort);
    console.log(selectSort);
  }

  function handleChangeSelectYear(selectYear) {
    setSelectYear(selectYear);
    console.log(selectYear);
  }

  //console.log(genres);
  return (
    <div className="filter">
      <h1>Фильтры:</h1>
      <div className="filtr-block-btn">
        <button className="button-filter">Сбросить</button>
        <button className="button-filter">Применить</button>
      </div>
      <Select headerSelect = {'Сортировать по:'} options = {categories} onChangeSelect={handleChangeSelectSort}></Select>
      <Select headerSelect = {'Год релиза:'} options = {years} onChangeSelect={handleChangeSelectYear}></Select>
      {isGetGenre && <CheckGenre 
        genres={genres}
        selectedGenresIds={selectedGenresIds} // Передаем selectedGenresIds в CheckGenre
        onChangeItem={handleChangeItem}
      />}     
      <Pagination />
    </div>
  );
}

export default MoveFilter;

// В этом примере используется массив selectedGenresIds, в котором хранятся идентификаторы выбранных жанров. В функции handleChangeItem происходит следующее:

// Создается копия массива selectedGenresIds с помощью оператора расширения [...selectedGenresIds].
// Проверяется наличие идентификатора жанра в массиве selectedGenresIds с использованием indexOf(nextGenre.id).
// Если идентификатор уже присутствует в массиве (index > -1), то он удаляется из массива с помощью splice(index, 1).
// Если идентификатор отсутствует в массиве (index === -1), то он добавляется в конец массива с помощью push(nextGenre.id).
// Обновленный массив идентификаторов выбранных жанров присваивается состоянию selectedGenresIds с помощью setSelectedGenresIds(updatedSelectedIds).
// Выводится обновленный массив идентификаторов в консоль для отслеживания изменений.
// Теперь selectedGenresIds представляет собой массив с выбранными жанрами, и он будет обновляться по мере выделения/снятия выделения чекбоксов.