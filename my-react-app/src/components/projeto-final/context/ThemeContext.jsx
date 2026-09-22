import { createContext, useState, useContext, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
  };

  const temaMui = useMemo(
    () => createTheme({ palette: { mode: tema === 'escuro' ? 'dark' : 'light' } }),
    [tema]
  );

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      <MuiThemeProvider theme={temaMui}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTema = () => useContext(ThemeContext);
