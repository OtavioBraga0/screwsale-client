import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

export default function Routes() {
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
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      {!user.logged ? <Redirect to="/login" /> : null}
    </Switch>
  );
}
