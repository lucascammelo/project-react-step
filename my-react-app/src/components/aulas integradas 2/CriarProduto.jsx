import { useState } from "react";
import axios from "axios";

function CriarProduto(){

const [nome, setNome] = useState('');
const [preco, setPreco] = useState('');
const [descricao, setDescricao] = useState('');
const [categoria, setCategoria] = useState('');
const [imagem, setImagem] = useState('');
const [nota, setNota] = useState('');
const [quantidade, setQuantidade] = useState('');

const cadastrarProduto = () => {

    axios.post('https://projeto-node-step-t5i1.vercel.app/produtos', {
        nome:nome,
        preco:preco,
        descricao:descricao,
        categoria:categoria,
        imagem:imagem,
        avaliacao:{nota, quantidade},
    },
     {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((response) => {
        console.log('Produto cadastrado', response.data)
    })
}



return(

    <form action="">

        <h1>Cadastrar Produto</h1>

        <div>
            <label htmlFor="">Nome</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Preço</label>
            <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Descrição</label>
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Categoria</label>
            <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Imagem</label>
            <input type="text" value={imagem} onChange={(e) => setImagem(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Nota</label>
            <input type="text" value={nota} onChange={(e) => setNota(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Quantidade</label>
            <input type="text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
        </div>

        <button type="button" onClick={cadastrarProduto}>Cadastrar Produto</button>

    </form>

);


}

export default CriarProduto