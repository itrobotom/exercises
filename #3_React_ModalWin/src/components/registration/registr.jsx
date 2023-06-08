import './registr.css';
import { BtnForm } from '../BtnForm/BtnForm';
import { InputForm } from '../InputForm/InputForm';

export function RegistrationForm({ flagRegistr }) {
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
        return null;
    }
}