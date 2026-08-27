import ThemeCard from './components/aula07/deverDeCasa/ThemeCard';

function App() {
  return (
    <div>
        <ThemeCard title="Tema Dark" description="Essa é a descrição com thema sem passar o parametro light, ou seja, dark" />
        <ThemeCard title="Tema Light" description="essa é a descricao do com theme passando 'light' " theme='light'/>
    </div>
  );
}

export default App;