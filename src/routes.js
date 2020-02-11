import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

import { Context as UserContext } from './context/UserContext';

export default function Routes() {
  const { state } = useContext(UserContext);

  return (
    <Switch>
      {state.logged ? <Redirect to="/" /> : <Redirect to="/login" />}
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
