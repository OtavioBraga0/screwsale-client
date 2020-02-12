import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1f1f1f;
`;

export const Form = styled.form`
  flex: 1;
  background: #fff;
  height: 500px;
  max-width: 500px;
  margin: 0 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    background: #eee;
    width: 80%;
    font-size: 18px;
    height: 50px;
    border-radius: 4px;
    margin: 10px 50px;
    border: none;
    padding: 15px;
  }

  img {
    width: 200px;
    margin-bottom: 50px;
    margin-top: 25px;
  }
`;

export const ButtonSubmit = styled.button`
  font-size: 18px;
  font-weight: bold;
  background: #1f1f1f;
  width: 80%;
  height: 75px;
  border: none;
  margin: 25px 50px;
  color: #fff;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${lighten(0.1, '#1f1f1f')};
  }
`;

export const Error = styled.div`
  background: #ffa1a1;
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  span {
    font-weight: bold;
    font-size: 14px;
    color: #ff0000;
  }
`;
