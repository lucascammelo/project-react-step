import './Input.css';

const Input = ({ tipo = 'text', valor, aoMudar, nome }) => {
  return (
    <input type={tipo} value={valor} onChange={aoMudar} name={nome} className="input" />
  );
};

export default Input;
