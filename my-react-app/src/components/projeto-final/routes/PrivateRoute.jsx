import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const autenticado = localStorage.getItem('token');
  return autenticado ? children : <Navigate to="/Login" />;
};

export default PrivateRoute;
