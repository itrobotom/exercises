import React, { useState } from 'react';
import { DATA } from '../../data/data.jsx';
import './Pagination.css';

export default function Pagination() {
    const pagination = {
        totalPages: 30,
        currentPage: 1,  // начальное значение страницы
        itemsPerPage: 5, // по 5 элементов из массива будет выведено
    };

    const stepPage = 1;

    //повешали хук на объект целиком. То есть страница состоит из полей объекта
    const [pages, setPages] = useState(pagination);

	function BackBtn() {

		function backBtnClick() {
			if (pages.currentPage * pages.itemsPerPage > pages.itemsPerPage) {		
                //создаем новую страницу с обновленным полем текущей страницы	
                const newPage = {...pages, currentPage: pages.currentPage - stepPage}
				setPages(newPage)
			}	
		}
		return (
			<button onClick={backBtnClick}> Назад </button>
		)
	}

	function ForwardBtn() {
		function forwardBtnClick() {
            //создаем новую страницу с обновленным полем текущей страницы
			if (pages.totalPages - pages.currentPage * pages.itemsPerPage >= pages.itemsPerPage) {
                const newPage = {...pages, currentPage: pages.currentPage + stepPage}
				setPages(newPage)
			}			
		}
		return (
			<button onClick={forwardBtnClick}> Вперед </button>
		)
	}

	function CreateDiv() {
        //получаем новый массив из 5 чисел исходя из выбранной страницы
        const newArr = DATA.slice(pages.currentPage * pages.itemsPerPage - pages.itemsPerPage, pages.currentPage * pages.itemsPerPage);
        console.log(newArr);
        return (
        <>
            <ul>
            {
                //через map создаем новый массив из разметки, данные для которого берутся из чисел, полуяенных при преобразовании в slice
                newArr.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
          </ul>
          <div>Текущая страница: {pages.currentPage}</div>
        </>
          
        );
    }

	return (
		<>
			<CreateDiv />
            <BackBtn />
			<ForwardBtn />
		</>
	);
}