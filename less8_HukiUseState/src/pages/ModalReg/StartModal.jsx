import './StartModal.css';
import { useState } from 'react';

// можно два файла сделать и по флагу через пропсы передвать имя окна, а можно от флага выводить или разметку регистрации, или разметку авторизации как сейчас и сделано
export function StartModal() {

    const [login, setName] = useState("");
    function handelLoginChange(e){
        setName(e.target.value);
    } 
    console.log(login);

    const [pass, setPass] = useState("");
    function handelPassChange(e){
        setPass(e.target.value);
    } 
    console.log(pass);

    const [email, setEmail] = useState("");
    function handelEmailChange(e){
        setEmail(e.target.value);
    } 
    console.log(email);

    const [pass2, setPass2] = useState("");
    function handelPass2Change(e){
        setPass2(e.target.value);
    } 
    console.log(pass2);

    const [flagRegistr, setFlagRegistr] = useState(false);
    function handleFlagRegistr() {
        setFlagRegistr(!flagRegistr);
    }
    console.log(flagRegistr);

    function handlClick() {
        handleFlagRegistr();
        console.log(flagRegistr);
    }

    function handelChange(event) {
        event.preventDefault();

        //если поля верно заполнены, то сменить флаг flagRegistr для отображения авторизации
        if(login === "" || email=== "" || pass === "" || pass2 === ""){
            alert('Одно из полей не заполнено!');
            return;
        }
        else if (pass.length < 8) {
            alert("Пароль должен быть не менее 8 символов");
            return;
        }
        else if(pass === pass2){ //можно добавить валидацию почты и тд
            handleFlagRegistr();
            alert('Вы успешно зарегистрированы! Пройдите авторизацию!');
            console.log(flagRegistr);
        } else {
            alert("Введенные пароли не совпадают!");
        }
    }

    if (!flagRegistr){
        return (
            <section className='main-container'>
                <h2>Регистрация</h2>
                <form onSubmit={handelChange}>
                    <input placeholder = "логин" typeform = "text" onChange = {handelLoginChange}/>
                    <input placeholder = "почта" typeform = "text" onChange = {handelEmailChange}/>
                    <input placeholder = "пароль" typeform = "password" onChange = {handelPassChange}/>
                    <input placeholder = "подтвердите пароль" typeform = "password" onChange = {handelPass2Change}/>        
                    <button type="submit" className="btn">Зарегистрироваться</button>
                </form>  
                <button onClick={handlClick} type="submit" className="btn-href">У меня уже есть аккаунт</button>     
            </section>     
        );
    } else {
        return (
            <section className='main-container'>
                <h2>Авторизация</h2>
                <form>     
                    <input placeholder = "логин" typeform = "text" onChange = {handelLoginChange}/>
                    <input placeholder = "почта" typeform = "text" onChange = {handelEmailChange}/>     
                    <button type="submit" className="btn">Войти</button>
                </form>       
            </section>     
        );
    }
}