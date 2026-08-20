
import { useNavigate } from "react-router-dom";


//crie um arquivo chamado Login.jsx
const Login = () => {
  const navigate = useNavigate();
    
  
  useNavigate();
  return (

    <>
    <h1>Página de Login</h1>

    <input type="text" name="userName" id="iuserName" />
    <input type="password" name="password" id="iPassword" />



    <button onClick={() => navigate("/home")}>Clique para se logar</button>
    
    </>




    
  );
};
export default Login;

