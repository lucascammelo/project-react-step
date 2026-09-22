import './Input.css';

const Select = ({ valor, aoMudar, nome, children }) => {
  return (
    <select value={valor} onChange={aoMudar} name={nome} className="input">
      {children}
    </select>
  );
};

export default Select;
