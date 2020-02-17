import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;

  width: calc(100% - 200px);
  height: calc(100% - 75px);
  margin-left: 200px;
  margin-top: 75px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Product = styled.div`
  width: 80%;
  margin-top: 50px;
  padding: 15px;
  background: #fff;
  height: 50px;

  border-radius: 10px;

  strong {
    font-size: 18px;
  }
`;

export const StockProduct = styled.ul`
  width: 80%;
  margin-top: 50px;
  padding: 15px;
  background: #fff;
  height: 300px;

  border-radius: 10px;
`;

export const Prod = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;

  ${props =>
    props.quant < 3 &&
    css`
      span {
        color: #ff0000;
      }
    `}

  span {
    font-size: 18px;
  }

  strong {
    font-size: 18px;
  }

  &:nth-child(2n) {
    background: #eee;
  }
`;
