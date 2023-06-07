import './login.css';

export function LoginForm() {
    return (
    <section className='main-container'>
        <h2>Авторизация</h2>
        <form>
            <div>
                {/* <label for="exampleInputEmail1" class="form-label">Логин</label> */}
                <input placeholder='логин' type="text" name="username" className='' />
            </div>
            <div>
                {/* <label for="exampleInputPassword1" class="form-label">Пароль</label> */}
                <input placeholder='пароль' type="password" name="password" class="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" class="btn">Войти</button>
        </form>
    
    </section>
    
    );
}