// import './Pagination.css';
import React, { useState } from 'react';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

  const pagination = {
    totalPages: 10,
    currentPage: 1,
    itemsPerPage: 10,
  };

  // Обработчик переключения страницы
  const handlePageChange = function(pageNumber){
    setCurrentPage(pageNumber);
  };

  // Получение данных для текущей страницы
  const getDataForCurrentPage = () => {
    // Ваша логика получения данных для текущей страницы
    // Можно использовать currentPage и itemsPerPage для рассчета индексов начала и конца данных
    // и получить соответствующую порцию данных для отображения
  };

  // Получение данных для текущей страницы
  const currentItems = getDataForCurrentPage();

  return (
    <div>
      {/* Отображение данных текущей страницы */}
      {currentItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}

      {/* Кнопки для переключения страниц */}
      <div>
        {Array.from({ length: pagination.totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
}

// export default Pagination;