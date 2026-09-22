import Label from '../atoms/Label';
import Input from '../atoms/Input';

const FormField = ({ rotulo, tipo, valor, aoMudar, nome }) => {
  return (
    <div>
      <Label>{rotulo}</Label>
      <Input tipo={tipo} valor={valor} aoMudar={aoMudar} nome={nome} />
    </div>
  );
};

export default FormField;
