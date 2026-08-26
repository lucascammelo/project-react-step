import axios from "axios";
import { useState } from "react";

function Registrar(){

const [nome, setNome] = useState('');
const [preco, setPreco] = useState('');
const [descricao, setDescricao] = useState('');



const cadastrarProduto = () => {

    axios

    .post('https://projeto-node-step-t5i1.vercel.app/registrar', {
        nome: nome,
        preco: preco,
        descricao: descricao,
    })
    .then((response) => {
        console.log('Cadastrado:', response.data)
    })
}    

return (

    <form action="">

        <div>
            <label >Nome</label>
            <input type="text" />
        </div>


        <div>
            <label >Preço</label>
            <input type="text" />
        </div>


        <div>
            <label >Descrição</label>
            <input type="ematextil" />
        </div>

       
        
    </form>

)

}



export default Registrar;