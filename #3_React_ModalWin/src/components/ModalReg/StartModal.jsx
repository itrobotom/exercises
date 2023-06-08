import './StartModal.css';
import { BtnForm } from '../BtnForm/BtnForm';
import { InputForm } from '../InputForm/InputForm';

// можно два файла сделать и по флагу через пропсы передвать имя окна, а можно от флага выводить или разметку регистрации, или разметку авторизации как сейчас и сделано
export function StartModal({ flagRegistr }) {
    function handleClick(event) {
        event.preventDefault();
        console.log(event.target[0].value)
        for(let i = 0; i < event.target.length; i++) {
            console.log(event.target[i].value)
        }
        console.log(event.target.length);
        //почему-то два поля считает за 3
        (event.target.length > 3) ? alert(`Пользолватель ${event.target[0].value} успешно зарегистрирован на сайте`) :
                                    alert(`Пользолватель ${event.target[0].value} успешно авторизован на сайте`);
    }
    if (!flagRegistr){
        return (
            <section className='main-container'>
                <h2>Регистрация</h2>
                <form onSubmit={handleClick}>
                    <InputForm placeholderForm = "логин" />
                    <InputForm placeholderForm = "почта" />
                    <InputForm placeholderForm = "пароль" />
                    <InputForm placeholderForm = "подтвердите пароль" />        
                    <BtnForm textBtn = "Зарегистрироваться" />
                </form>       
            </section>     
        );
    } else {
        return (
            <section className='main-container'>
                <h2>Авторизация</h2>
                <form onSubmit={handleClick}>     
                    <InputForm placeholderForm = "логин" />
                    <InputForm placeholderForm = "пароль" />       
                    <BtnForm textBtn = "Войти" />
                </form>       
            </section>     
        );
    }
}