import { useState } from "react";

const FeedbackForm = () => {

    const [dadosFormulario, setDadosFormulario] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [erros, setErros] = useState({});

    const [enviado, setEnviado] = useState(null);

    const lidarComMudanca = (e) => {
        const { name, value } = e.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
    };

    const validar = () => {
        const novosErros = {};

        if (!dadosFormulario.name.trim()) {
            novosErros.name = 'O nome é obrigatório';
        }

        if (!dadosFormulario.email.trim()) {
            novosErros.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(dadosFormulario.email)) {
            novosErros.email = 'email inválido';
        }

        if (!dadosFormulario.message.trim()) {
            novosErros.message = 'mensagem é obrigatória!';
        } else if (dadosFormulario.message.trim().length < 10) {
            novosErros.message = "A mensagemm deve ter no mínimo 10 caracteres!";
        }

        setErros(novosErros);
        return Object.keys(novosErros).length === 0
    }

    const aoEnviar = (e) => {
        e.preventDefault();

        if (validar()) {
            setEnviado(dadosFormulario);
            setDadosFormulario({ name: '', email: '', message: '' })
            setErros({});
        }


    }

    const aoLimpar = () => {
        setDadosFormulario({ name: '', email: '', message: '' });
        setErros({});
        setEnviado(null);
    }



    return (
        <>
           

            <form onSubmit={aoEnviar}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="name" value={dadosFormulario.name} onChange={lidarComMudanca} />
                    {erros.name && <span className="erro">{erros.name}</span>}
                </div>

                <div>
                    <label >Email:</label>
                    <input type="email" name="email" value={dadosFormulario.email} onChange={lidarComMudanca} />
                    {erros.email && <span className="erro">{erros.email}</span>}
                </div>

                <div>
                    <label>Mensagem:</label>
                    <textarea name="message" value={dadosFormulario.message} onChange={lidarComMudanca}></textarea>
                    {erros.message && <span className="erro">{erros.message}</span>}
                </div>

                <button type="submit">Enviar Feedback</button>
                <button type="button" onClick={aoLimpar}>Limpar</button>

            </form>

            {enviado && (
                <div className="feedback-enviado">
                    <h3>Feedback Enviado:</h3>
                    <p><strong>Nome:</strong> {enviado.name}</p>
                    <p><strong>Email:</strong> {enviado.email}</p>
                    <p><strong>Mensagem:</strong> {enviado.message} </p>

                </div>
            )}

        </>

    )
}

export default FeedbackForm;