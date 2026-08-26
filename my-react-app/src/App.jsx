
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/aulas integradas 2/Login';
import Home from './components/aulas integradas 2/Home';
import Registrar from './components/aulas integradas 2/Registrar';

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
           