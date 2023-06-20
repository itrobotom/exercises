import './Genderaze.css';
import { useState } from 'react';
import { RequestGenderize } from '../components/network/Network'
import { useEffect, useRef } from 'react';

export function Genderize() {
    const [name, setName] = useState("");
    const [enteredNames, setEnteredNames] = useState([]);

    useEffect(() => {
        if(name !== '') { //предоплагается, что мы можем имет уже имя в поле, но при первой отрисовки страницы его еще не будет
            console.log('Запрашиваем данные на сервер с именем');
            console.log(`Сейчас передадим данные имени в функцию запроса на сервер ${name}`)
            RequestGenderize(name)
                .then((genderazePers) => {
                    console.log(`Вытаскиваем имя из json с сервера: ${genderazePers.gender}`);
                    setEnteredNames([...enteredNames, `${name} is ${genderazePers.gender}`]);
                })
                // Если произойдет ошибка во время выполнения запроса или получения ответа от сервера, выполнится обработчик .catch(), который выведет ошибку в консоль.
                .catch((error) => {
                    console.log(`Ошибка ${error}`);
                });
            
        } 
        //не работает как надо, сразу выскакивает при первом рендере имя не введено
        //НАДО ПОФИКСИТЬ!!!
        /*else {
            alert('Имя не заполнено!');
        }*/
    }, [name]); //}, [name] если не указать это, то призойдет зацикливание и рендер будет постояноо добавлять одно и тоже


    function handleClick(event) {
        event.preventDefault();
        console.log(event.target.form[0].value); //данные формы
        setName(event.target.form[0].value);
        console.log(`Имя: ${name}`);
    }

    return (
        <div className="obj-center">
            <form>
                {/* в input добавлено value={name} чтобы после ввода имени и нажатия кнопки принималось актуально значение
                выше name отчищается после обновления массива на новый */}
                <input placeholder="Введите имя" type="text"  />
                <button onClick={handleClick} type="submit" >узнать пол</button>
            </form>
            {/* Это выражение проверяет условие enteredName. 
            Если enteredName имеет непустое значение (true), 
            то возвращается JSX-элемент <div>{name}</div>. 
            Если name равно пустой строке или null (false), 
            то возвращается значение false и <div>{name}</div> 
            не будет отображаться. */}
            {/* {enteredNames && <div>{enteredNames}</div>} */}
            {/* отображение имени происходит в реальном времени при вводе т.к. в input onChange */}

            <div>
                <h2>Введенные имена:</h2>
                <ul>
                    {enteredNames.map((enteredName, index) => (
                        <li key={index}>{enteredName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}