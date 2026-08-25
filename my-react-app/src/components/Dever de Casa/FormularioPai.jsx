import { useState } from "react";
import FormularioFilho from "./FormularioFilho";


const FormularioPai = () => {
    const [dados, setDados] = useState('');

    return (

        <>
            <h1>Componente pai</h1>
            <h2>Dados recebidos do filho para aqui no componente pai:   {dados}</h2>
            <FormularioFilho enviarDados={setDados} />

        </>

    );
}

export default FormularioPai;

