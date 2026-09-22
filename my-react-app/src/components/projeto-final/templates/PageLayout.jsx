import Header from '../organisms/Header';
import { useTema } from '../context/ThemeContext';
import './PageLayout.css';

const PageLayout = ({ children }) => {
  const { tema } = useTema();

  return (
    <div className={`page page-${tema}`}>
      <Header />
      <main className="page-conteudo">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
