import { Link } from "react-router-dom";

const postagens = [
    { id: 1, titulo: 'React é incrível'},
    { id:2, titulo:'Aprendendo React Router'},
    { id:3, titulo:'Hooks'},
];


const Blog = () =>{

    return(

        <>

            <h1>Blog</h1>

            <ul>
                {postagens.map((postagem) => (
                    <li key={postagem.id}>
                       <Link to={`/post/${postagem.id}`}>{postagem.titulo}</Link> 

                    </li>
                ))}
            </ul>

        </>

    );
};

export default Blog;