import React, { useState } from 'react';

import PropTypes from 'prop-types';

import md5 from 'md5';
import { Container, Form, ButtonSubmit, Error } from './styles';
import logo from '../../assets/logo.jpg';

import api from '../../services/api';

export default function Login({ history }) {
  const [login, setLogin] = useState('otaviobraga');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const passwordEncrypted = md5(password);

    const response = await api.get(`/user`, {
      params: {
        login,
        password: passwordEncrypted,
      },
    });

    if (response.data.length > 0) {
      const user = {
        user: response.data[0],
        logged: true,
      };
      setError(false);

      await localStorage.setItem('user', JSON.stringify(user));

      history.push('/');
      window.location.reload(false);
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <Form onSubmit={e => handleSubmit(e)}>
        <img src={logo} alt="ScrewSale" />
        {error ? (
          <Error>
            <span>Login ou senha incorretos!</span>
          </Error>
        ) : (
          <></>
        )}
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <ButtonSubmit type="submit">Entrar</ButtonSubmit>
      </Form>
    </Container>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
