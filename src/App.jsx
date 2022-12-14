import './App.css';
import React, { useState } from 'react';
import Router from './routes';
import LoginContext from './context/LoginContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// CREDENCIAL DE PRUEBA:
//  EMAIL: 'jhoswe.castro@gmail.com'
//  ID: '948254878596202517'


function App() {
  const [token, setToken] = useState(null);
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const loginData = {
    baseUrl: 'https://ms-discord-upy5mhs63a-rj.a.run.app/',
    values: {
      email: [email, setEmail],
      discordId: [id, setId],
    },
    token: [token, setToken],
    logged: [logged, setLogged],
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#387373',
      },
      secondary: {
        main: '#2D3E40',
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LoginContext.Provider value={loginData}>
          <Router  />
        </LoginContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
