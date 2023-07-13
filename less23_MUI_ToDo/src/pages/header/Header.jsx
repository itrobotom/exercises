import './Header.css'
import '@fontsource/roboto/500.css';

function Header() {
  return (
    <div className="header">
      <button className="button-home">Домашняя</button>
      <button className="button-login">Войти</button>
    </div>
  );
}

export default Header;
