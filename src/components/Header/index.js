import React from 'react';

import { MdExitToApp } from 'react-icons/md';
import { Container, LogoContainer, Logout } from './styles';

import logo from '../../assets/logo.jpg';

export default function Header() {
  const handleLogout = async () => {
    const user = { user: {}, logged: false };
    await localStorage.setItem('user', JSON.stringify(user));

    window.location.reload(false);
  };

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="ScrewSale" />
      </LogoContainer>
      <Logout to="/login" onClick={handleLogout}>
        <MdExitToApp size={30} color="#1f1f1f" />
        <span>Logout</span>
      </Logout>
    </Container>
  );
}
