import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Home() {
    const [produtos, setProdutos] = useState([]);

    const navigate = useNavigate();


    const deletarProduto = async (id) => {
        try{
            const token = localStorage.getItem('token');
            await axios.delete(
                `https://projeto-node-step-t5i1.vercel.app/produtos/${id}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }

            );
            carregarProdutos();
        }catch (err) {
            console.error('Erro ao deletar', err)
            alert('Erro ao deletar o produto')
        }
    }


    const carregarProdutos = () => {
        axios.get('https://projeto-node-step-t5i1.vercel.app/produtos')
            // "then" - quando a resposta chegar, faça isso...
            .then((response) => {
                setProdutos(response.data);// o 'data' é especifico do AXIOS, é o que contem o conteudo da api
            })
    };

    useEffect(() => {
        carregarProdutos();
    }, [])

    return (
        <div>
            <h1>LIsta de Produtos</h1>
            <ul>
                {produtos.map((produtoMap) => (

                    <li key={produtoMap._id}>
                        {produtoMap.nome} - {produtoMap.preco} - {produtoMap.descricao} - {produtoMap.avaliacao.nota} <button onClick={() => deletarProduto(produtoMap._id)}>Deletar</button>
                        <button onClick={() => navigate(`/EditarProduto/${produtoMap._id}`)}>Editar</button>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default Home;