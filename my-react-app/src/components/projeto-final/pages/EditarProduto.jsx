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
  const [erros, setErros] = useState({});

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

  const validar = () => {
    const novosErros = {};

    if (!String(produto.nome).trim()) novosErros.nome = 'Nome é obrigatório';
    if (!String(produto.descricao).trim()) novosErros.descricao = 'Descrição é obrigatória';
    if (!String(produto.categoria).trim()) novosErros.categoria = 'Categoria é obrigatória';
    if (!String(produto.imagem).trim()) novosErros.imagem = 'Imagem é obrigatória';

    if (!String(produto.preco).trim()) {
      novosErros.preco = 'Preço é obrigatório';
    } else if (isNaN(Number(produto.preco))) {
      novosErros.preco = 'Preço precisa ser um número';
    }

    if (!String(produto.nota).trim()) {
      novosErros.nota = 'Nota é obrigatória';
    } else if (isNaN(Number(produto.nota))) {
      novosErros.nota = 'Nota precisa ser um número';
    }

    if (!String(produto.quantidade).trim()) {
      novosErros.quantidade = 'Quantidade é obrigatória';
    } else if (isNaN(Number(produto.quantidade))) {
      novosErros.quantidade = 'Quantidade precisa ser um número';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const editarProduto = () => {
    if (!validar()) return;

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
        erros={erros}
      />
    </PageLayout>
  );
};

export default EditarProduto;
