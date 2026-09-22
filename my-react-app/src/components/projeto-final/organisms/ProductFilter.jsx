import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '../atoms/Button';
import './ProductFilter.css';

const ProductFilter = ({ produtos, aoFiltrar }) => {
  const [nomeSelecionado, setNomeSelecionado] = useState(null);

  const nomesDosProdutos = produtos.map((produto) => produto.nome);

  const filtrar = () => {
    aoFiltrar(nomeSelecionado);
  };

  return (
    <div className="filtro">
      <Autocomplete
        options={nomesDosProdutos}
        value={nomeSelecionado}
        onChange={(e, novoValor) => setNomeSelecionado(novoValor)}
        renderInput={(params) => <TextField {...params} label="Buscar produto por nome" />}
        className="filtro-autocomplete"
      />
      <Button onClick={filtrar}>Filtrar</Button>
    </div>
  );
};

export default ProductFilter;
