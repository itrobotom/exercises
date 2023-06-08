import './StartModal.css';
import { BtnForm } from '../BtnForm/BtnForm';
import { InputForm } from '../InputForm/InputForm';

// можно два файла сделать и по флагу через пропсы передвать имя окна, а можно от флага выводить или разметку регистрации, или разметку авторизации как сейчас и сделано
export function StartModal({ flagRegistr }) {
    if (!flagRegistr){
        return (
            <section className='main-container'>
                <h2>Регистрация</h2>
                <form>
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
                <form>     
                    <InputForm placeholderForm = "логин" />
                    <InputForm placeholderForm = "пароль" />       
                    <BtnForm textBtn = "Войти" />
                </form>       
            </section>     
        );
    }
}