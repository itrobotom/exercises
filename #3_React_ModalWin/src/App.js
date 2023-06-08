
import { LoginForm } from './components/autorization/login.js';
import { RegistrationForm } from './components/registration/registr.jsx';

function App() {
  return (
    <section>
      <LoginForm 
      flagRegistr = {true}
      />
      <RegistrationForm 
      flagRegistr= {true}
      />
    </section>
  )
}

export default App;
