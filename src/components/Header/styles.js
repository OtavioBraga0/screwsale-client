import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  width: 100vw;
  height: 75px;
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  width: 200px;
  height: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 75px;
  }
`;

export const Logout = styled(Link)`
  width: 100px;
  height: 50px;
  border: none;
  background: none;
  margin-right: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  span {
    margin-left: 10px;
    color: #1f1f1f;
    font-size: 18px;
    font-weight: bold;
  }
`;
