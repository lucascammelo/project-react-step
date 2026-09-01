import './Login.css'
import axios from 'axios';
import { useState } from 'react';


function Login(){

const[email, setEmail] = useState('');
const[senha, setSenha] =useState('');


const realizarLogin = () => {

    axios.post('https://projeto-node-step-t5i1.vercel.app/login', {
        email: email,
        senha: senha,
    })
    .then((response) => {
        localStorage.setItem('token', response.data.token);
        console.log("login reliizado com sucesso", response.data)
    })
    .catch((error) => {
        console.log("Erro ao fazer login", error.response.data)
    })

}


return (

<>
    <h1>Login</h1>
    <form action="" className='form'>

        <div>
            <label >E-mail</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>


        <div>
            <label >Senha</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>

        <button type='button' onClick={realizarLogin}>Entrar</button>
        
    </form>

</>
    
)
}
export default Login;