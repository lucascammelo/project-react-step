import axios from "axios";
import { useState } from "react";
import './Registrar.css';

function Registrar(){

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [role, setRole] = useState('');
const [senha, setSenha] = useState('');
const [mensagem, setMensagem] = useState('');




const cadastrarUsuario = () => {

        axios.post('https://projeto-node-step-t5i1.vercel.app/registrar', {
            nome,
            email,
            senha,
            role,
        })
        .then((response) => {
            console.log('Cadastrado:', response.data);
            setMensagem('Usuário cadastrado com sucesso!');
            setNome('');
            setEmail('');
            setSenha('');
            setRole('');
        })
        .catch((error) => {
            console.error('Erro ao cadastrar:', error);
          
        })
        
    };
 

return (
  

    <form action="" className="form">
        {mensagem && <p>{mensagem}</p>}

        <div>
            <label >Nome</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
        </div>


        <div>
            <label >E-mail</label>
            <input type="email" value={email} onChange = {(e) => setEmail(e.target.value)} />
        </div>


        <div>
            <label >Senha</label>
            <input type="password" value={senha}  onChange = {(e) => setSenha(e.target.value)}/>
        </div>

        <div>
            <label >Função</label>
            {/* <input type="text" value={role} onChange = {(e) => setRole(e.target.value)} /> */}
            <select name="" id="" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">selecione</option>
                <option value="admin">Administrador</option>
                <option value="user">Usuário</option>
            </select>
            
        </div>


        <button type="button" onClick={cadastrarUsuario}>Cadastrar</button>
       
        
    </form>

)

}



export default Registrar;