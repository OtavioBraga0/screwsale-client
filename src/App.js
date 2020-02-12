import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routes from './routes';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));

    if (userLocalStorage) {
      setUser(userLocalStorage);
    } else {
      setUser({ user: {}, logged: false });
    }
  }, []);

  return (
    <BrowserRouter>
      {user.logged ? (
        <>
          <Header />
          <Sidebar />
        </>
      ) : null}
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
