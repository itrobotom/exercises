import './login.css';
import { BtnForm } from '../BtnForm/BtnForm';
import { InputForm } from '../InputForm/InputForm';

export function LoginForm({ flagRegistr }) {
    if(flagRegistr) {
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
    } else  {
        return null;
    }    
}