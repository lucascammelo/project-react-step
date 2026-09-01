import { useState } from "react";
import axios from "axios"

function EditarProduto{

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    const [nota, setNota] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const cadastrarProduto = () => {
        axios.post('https://projeto-node-step-t5i1.vercel.app/produto/:id',
            {
                nome: nome,
                preco: preco,
                descricao: descricao,
                categoria: categoria,
                imagem: imagem,
                avaliacao: { nota, quantidade },
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        )
        .then((response) => {
            console.log("Produto editado com sucesso", response.data)
        })
    }




    return (

);

}

export default EditarProduto;
