import { useState } from 'react';
import axios from 'axios';
import ProductForm from '../organisms/ProductForm';
import PageLayout from '../templates/PageLayout';

const CriarProduto = () => {
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    descricao: '',
    categoria: '',
    imagem: '',
    nota: '',
    quantidade: '',
  });

  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const lidarComMudanca = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const cadastrarProduto = () => {
    axios.post('https://projeto-node-step-t5i1.vercel.app/produtos', {
      nome: produto.nome,
      preco: produto.preco,
      descricao: produto.descricao,
      categoria: produto.categoria,
      imagem: produto.imagem,
      avaliacao: { nota: produto.nota, quantidade: produto.quantidade },
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(() => {
        setMensagem('Produto cadastrado com sucesso!');
        setErro('');
      })
      .catch(() => {
        setMensagem('');
        setErro('Erro ao cadastrar produto. Confira os dados e tente novamente.');
      });
  };

  return (
    <PageLayout>
      <ProductForm
        produto={produto}
        aoMudar={lidarComMudanca}
        aoSalvar={cadastrarProduto}
        textoBotao="Cadastrar Produto"
        mensagem={mensagem}
        erro={erro}
      />
    </PageLayout>
  );
};

export default CriarProduto;
