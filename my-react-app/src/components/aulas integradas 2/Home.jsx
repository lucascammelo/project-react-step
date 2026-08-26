import { useState, useEffect } from "react";
import axios from 'axios';


function Home() {
    const [produtos, setProdutos] = useState([]);


    useEffect(() => {
        axios
            .get('https://projeto-node-step-t5i1.vercel.app/produtos')

            // "then" - quando a resposta chegar, faça isso...
            .then((response) => {
                setProdutos(response.data);// o 'data' é especifico do AXIOS, é o que contem o conteudo da api
        })
    }, [])

    return (
        <div>
            <h1>LIsta de Produtos</h1>
            <ul>
                {produtos.map( (produtoMap) => (

                    <li key={produtoMap.id}>
                        {produtoMap.nome} - {produtoMap.preco} - {produtoMap.descricao} - {produtoMap.avaliacao.nota}
                    </li>
                ) )}
            </ul>
        </div>

    );
}

export default Home;