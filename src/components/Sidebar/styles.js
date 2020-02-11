import styled from 'styled-components';

import { lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #1f1f1f;
  width: 200px;
  height: calc(100vh - 75px);
  position: fixed;
  top: 75px;
`;

export const Menu = styled.ul`
  width: 200px;
  list-style: none;

  li {
    height: 50px;
    margin-top: 15px;
    padding: 0 10px;

    button {
      width: 200px;
      height: 50px;
      background: none;
      border: none;

      margin-left: -10px;

      padding: 0 15px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background: ${lighten(0.1, '#1f1f1f')};
      }

      span {
        font-size: 16px;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    span {
      color: #fff;
      margin-left: 10px;
    }
  }
`;

export const Submenu = styled.ul`
  list-style: none;
  height: 0;
  margin: -15px -10px 0 -10px;

  li {
    display: none;
  }

  &.show {
    height: auto;
    background: ${lighten(0.1, '#1f1f1f')};

    li {
      display: block;
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  width: 200px;
  height: 50px;
  font-size: 16px;

  margin-left: -10px;
  padding: 0 10px;

  display: flex;
  align-items: center;
`;

export const UserContainer = styled.div`
  color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 0 15px;
  background: ${lighten(0.2, '#1f1f1f')};

  span {
    margin-left: -15px;
  }
`;
