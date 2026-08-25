import { useEffect, useState } from "react";

const RelogioDigital = () => {

    // hook state, a variavel horario será setada atraves da funcao 'sethorario', e ja iniciará com um valor padrão  atual atraves da função 'newDate()'    
    const [horario, setHorario] = useState(new Date());




    useEffect(() => {

        const interval = setInterval(() => {
            setHorario(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, []);



    // tudo dentro do return é jsx (html + javascript)
    return (

        <>
            <h1>Relógio Digital</h1>
            <h2>{horario.toLocaleTimeString()}</h2>
            <h3></h3>

        </>



    );

}

export default RelogioDigital;