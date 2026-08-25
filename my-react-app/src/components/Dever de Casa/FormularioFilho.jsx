import { useState } from "react";



const FormularioFilho = ({ enviarDados }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        enviarDados(inputValue)
        setInputValue('');
    };

    return (

        <>



               <br />
             <h1>Componente filho:</h1>
            <h3>Esse botão e input estão no componente filho</h3>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />



            <button onClick={handleSubmit} >Enviar do componente filho </button>

        </>

    );
}

export default FormularioFilho;

