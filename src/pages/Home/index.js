import React, { Component } from 'react';

import { Container, Product, StockProduct, Prod } from './styles';
import api from '../../services/api';

export default class Home extends Component {
  state = {
    product: [],
  };

  async componentDidMount() {
    const response = await api.get('/product');

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return (
      <Container>
        <Product>
          <strong>Produtos Adicionados: {product.length} </strong>
        </Product>
        <StockProduct>
          <h2>Estoque</h2>
          {product.map(prod => {
            return (
              <Prod key={prod.id} quant={prod.amount}>
                <strong>{prod.title}</strong>
                <span>{prod.amount}</span>
              </Prod>
            );
          })}
        </StockProduct>
      </Container>
    );
  }
}
