import {useParams} from 'react-router-dom';

const postagens = [
  { id: 1, titulo: 'React é incrível', conteudo: 'React é uma biblioteca para construir interfaces...' },
  { id: 2, titulo: 'Aprendendo React Router', conteudo: 'React Router permite navegação ' },
  { id: 3, titulo: 'Hooks na prática', conteudo: 'Hooks como useState e useEffect são essenciais' },
];

const Post = () => {
    const {id} =  useParams();

    const postagemEncontrada = postagens.find((postagem) => postagem.id === Number(id));

    if(!postagemEncontrada) return <h2>Post Não encontrado</h2>;



    return(

        <div>
            <h1>{postagemEncontrada.titulo}</h1>
            <p>{postagemEncontrada.conteudo}</p>
        </div>

    );
}

export default Post;