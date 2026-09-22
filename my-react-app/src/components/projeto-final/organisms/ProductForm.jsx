import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import './ProductForm.css';

const ProductForm = ({ produto, aoMudar, aoSalvar, textoBotao, mensagem, erro }) => {
  return (
    <form className="form">
      <FormField rotulo="Nome" tipo="text" nome="nome" valor={produto.nome} aoMudar={aoMudar} />
      <FormField rotulo="Preço" tipo="text" nome="preco" valor={produto.preco} aoMudar={aoMudar} />
      <FormField rotulo="Descrição" tipo="text" nome="descricao" valor={produto.descricao} aoMudar={aoMudar} />
      <FormField rotulo="Categoria" tipo="text" nome="categoria" valor={produto.categoria} aoMudar={aoMudar} />
      <FormField rotulo="Imagem" tipo="text" nome="imagem" valor={produto.imagem} aoMudar={aoMudar} />
      <FormField rotulo="Nota" tipo="text" nome="nota" valor={produto.nota} aoMudar={aoMudar} />
      <FormField rotulo="Quantidade" tipo="text" nome="quantidade" valor={produto.quantidade} aoMudar={aoMudar} />
      <Button onClick={aoSalvar}>{textoBotao}</Button>
      {mensagem && <p className="sucesso">{mensagem}</p>}
      {erro && <p className="erro">{erro}</p>}
    </form>
  );
};

export default ProductForm;
