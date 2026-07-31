
import ButtonCSS from './components/aula06/ButtonCSS';
import ButtonInline from './components/aula06/ButtonInline';
import ButtonStyled from './components/aula06/ButtonStyled';

function App() {
  return (
    <div>
      <h1>Botão com CSS Externo</h1>
      <ButtonCSS label="CSS Externo" />

      <h1>Botão com Inline Styles</h1>
      <ButtonInline label="Primário" primary="primary" />
      <ButtonInline label="Secundário" />

      <h1>Botão com Styled Components</h1>
      <ButtonStyled label="Primário" primary="primary"/>
      <ButtonStyled label="Secundário" primary="primary"/>
    </div>
  );
}

export default App;
          