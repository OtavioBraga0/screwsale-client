import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routes from './routes';

import {
  Provider as UserProvider,
  Context as UserContext,
} from './context/UserContext';

function App() {
  const { state } = useContext(UserContext);

  return (
    <UserProvider>
      <BrowserRouter>
        {state.logged ? (
          <>
            <Header />
            <Sidebar />
          </>
        ) : null}
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
