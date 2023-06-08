import './InputForm.css';

export function InputForm({ placeholderForm }) {
    return (
        <div>
            <input placeholder = {placeholderForm} type="text" />
        </div>
    );
}

// добавить логику с типом input (text/password), чтобы по флагу выбиралось, пока по умолчанию всегда текст 
// type="text"
// <input placeholder='пароль' type="password" name="password" class="form-control" id="exampleInputPassword1" />