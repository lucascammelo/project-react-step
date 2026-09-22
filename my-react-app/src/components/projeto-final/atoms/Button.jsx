import './Button.css';

const Button = ({ children, onClick, type = 'button', variante = 'primario' }) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variante}`}>
      {children}
    </button>
  );
};

export default Button;
