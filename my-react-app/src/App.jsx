
//O App.jsx gerencia o estado isLoggedIn e altera o texto do botão com ternário: {isLoggedIn ? 'Logout' : 'Login'}. Quando o estado muda, tanto o App quanto o LoginStatus (que recebe a prop) são re-renderizados.

import { useState } from 'react';
import LoginStatus from './components/aula05/LoginStatus';
import Notification from './components/aula05/Notification';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  return (
    <div>
      <LoginStatus isLoggedIn={isLoggedIn} />
      <Notification showNotification={showNotif} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <button onClick={() => setShowNotif(!showNotif)}>
        {showNotif ? 'Ocultar' : 'Mostrar'} Notificação
      </button>
    </div>
  );
}


export default App;
