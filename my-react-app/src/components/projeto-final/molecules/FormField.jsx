import Label from '../atoms/Label';
import Input from '../atoms/Input';
import './FormField.css';

const FormField = ({ rotulo, tipo, valor, aoMudar, nome, erro }) => {
  return (
    <div>
      <Label>{rotulo}</Label>
      <Input tipo={tipo} valor={valor} aoMudar={aoMudar} nome={nome} />
      {erro && <span className="erro-campo">{erro}</span>}
    </div>
  );
};

export default FormField;
