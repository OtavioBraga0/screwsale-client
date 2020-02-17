import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: absolute;

  width: calc(100% - 200px);
  height: calc(100% - 75px);
  margin-left: 200px;
  margin-top: 75px;

  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.form`
  width: 80%;
  min-height: 500px;
  height: auto;
  max-height: 800px;
  background: #fff;

  border-radius: 10px;
  margin: 30px 0;
  padding-top: 50px;
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-bewteen;

  h1 {
    margin-left: 50px;
    margin-bottom: 30px;
  }

  img {
    margin: 0 auto;
    height: 200px;
  }
`;

export const FormGroup = styled.div`
  flex: 1;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  jusitfy-content: center;
`;

export const FormItem = styled.div`
  display: flex;
  justify-content: center;

  ${props =>
    css`
      width: ${props.width};
    `}

  input {
    background: #eee;
    width: 80%;
    font-size: 18px;
    height: 50px;
    border-radius: 4px;
    margin: 10px;
    border: none;
    padding: 15px;
  }
`;

export const FormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  ${props => css`
    background: ${props.color};

    &:hover {
      background: ${lighten(0.1, props.color)};
    }
  `}

  width: 50%;
  height: 75px;
  border: none;
  margin: 25px 15px;
  color: #fff;
  border-radius: 4px;
  transition: background 0.2s;
`;
