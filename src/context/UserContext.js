import md5 from 'md5';
import createDataContext from './createDataContext';
import api from '../services/api';

const userReducer = (state, action) => {
  const logged = false;

  switch (action.type) {
    case 'login_user': {
      const password = md5(action.payload.password);

      const response = api.get(`/user`, {
        login: action.payload.login,
        password,
      });

      return {
        user: response.data,
        logged: true,
      };
    }
    case 'logout_user':
      return { user: {}, logged: false };
    default:
      return { ...state, logged };
  }
};

const loginUser = dispatch => {
  return (login, password) => {
    dispatch({ type: 'login_user', payload: { login, password } });
  };
};

const logoutUser = dispatch => {
  return () => {
    dispatch({ type: 'logout_user', payload: {} });
  };
};

export const { Context, Provider } = createDataContext(
  userReducer,
  { loginUser, logoutUser },
  []
);
