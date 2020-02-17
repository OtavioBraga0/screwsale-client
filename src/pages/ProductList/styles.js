import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: absolute;

  width: calc(100% - 200px);
  height: calc(100% - 75px);
  margin-left: 200px;
  margin-top: 75px;

  display: flex;
  justify-content: center;
`;

export const ListProduct = styled.ul`
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
`;

export const Product = styled.li`
  list-style: none;
  display: flex;

  border-radius: 10px;

  padding: 15px;

  &:nth-child(2n) {
    background: ${darken(0.2, '#eee')};
  }

  strong {
    font-size: 22px;
  }

  span {
    font-size: 18px;
  }

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
`;

export const DetailProduct = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
