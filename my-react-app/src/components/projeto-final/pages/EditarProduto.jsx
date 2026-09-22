import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductForm from '../organisms/ProductForm';
import PageLayout from '../templates/PageLayout';

const EditarProduto = () => {
  const { id } = useParams();

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

  useEffect(() => {
    axios.get(`https://projeto-node-step-t5i1.vercel.app/produtos/${id}`)
      .then((response) => {
        const dados = response.data;
        setProduto({
          nome: dados.nome,
          preco: dados.preco,
          descricao: dados.descricao,
          categoria: dados.categoria,
          imagem: dados.imagem,
          nota: dados.avaliacao.nota,
          quantidade: dados.avaliacao.quantidade,
        });
      })
      .catch(() => {
        setErro('Não foi possível carregar esse produto.');
      });
  }, [id]);

  const lidarComMudanca = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const editarProduto = () => {
    axios.put(`https://projeto-node-step-t5i1.vercel.app/produtos/${id}`, {
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
        setMensagem('Produto editado com sucesso!');
        setErro('');
      })
      .catch(() => {
        setMensagem('');
        setErro('Erro ao salvar alterações. Tente novamente.');
      });
  };

  return (
    <PageLayout>
      <ProductForm
        produto={produto}
        aoMudar={lidarComMudanca}
        aoSalvar={editarProduto}
        textoBotao="Salvar Alterações"
        mensagem={mensagem}
        erro={erro}
      />
    </PageLayout>
  );
};

export default EditarProduto;
