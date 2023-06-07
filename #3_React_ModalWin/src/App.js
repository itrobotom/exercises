
import { LoginForm } from './components/autorization/login.js';
import { RegistrationForm } from './components/registration/registr.jsx';

function App() {
  return (
    <section>
      <LoginForm 
      flagRegistr = {false}
      />
      <RegistrationForm 
      flagRegistr= {false}
      />
    </section>
  )
}

export default App;
