import React, { useState, useEffect } from "react";
import CheckGenre from "../../components/checkGenre/CheckGenre";
import Pagination from "../../components/pagination/Pagination";
import Select from "../../components/select/Select"
import {categories, years} from '../../data/data'
import {genre} from '../../data/data'
import {RequestGenre} from '../../components/Network';
import './MoveFilter.css';

function MoveFilter() {
  //1) по идее нам и не надо наверное жанры хранить в переменной состояния?
  const [genries, setGenries] = useState([]); //храним данные с сервера в genries
  const [isGetGenre, setGetGenre] = useState(false);


  useEffect(() => { //запрос данных только после рендера всей страницы
    RequestGenre()
      .then((jsonGenre) => {
        console.log('Данные по жанрам с сервера'); //`Данные по жанрам с сервера ${jsonGenre.genres}` При преобразовании массива объектов в строку с помощью шаблонных строк (``), каждый объект преобразуется в строку "[object Object]".
        console.log('Данные по жанрам с сервера');
        //Чтобы вывести содержимое объектов в виде читаемых значений, можно использовать метод JSON.stringify() с параметром null для отступов. 
        //Это преобразует объекты в строку JSON с отступами, делая их более читаемыми.
        //2 - количество отступов 
        console.log(JSON.stringify(jsonGenre.genres, null, 2));
        setGenries(...genries, jsonGenre.genres); //сохранили жанры, пришедшие с сервера
        setGetGenre(true);
      })
  }, []); //пустой массив чтобы перерендер не зациклился
  
  return (
    <div className="filter">
      <h1>Фильтры:</h1>
      <div className="filtr-block-btn">
        <button className="button-filter">Сбросить</button>
        <button className="button-filter">Применить</button>
      </div>
      <Select headerSelect = {'Сортировать по:'} options = {categories}></Select>
      <Select headerSelect = {'Год релиза:'} options = {years}></Select>
      {isGetGenre && <CheckGenre genre={genries} />}     
      <Pagination />
    </div>
  );
}

export default MoveFilter;
