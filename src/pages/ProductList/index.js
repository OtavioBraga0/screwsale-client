import React, { Component } from 'react';

import { MdDelete } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import {
  Container,
  ListProduct,
  Product,
  IconContainer,
  DetailProduct,
} from './styles';

export default class ProductList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getItens();
  }

  async getItens() {
    const response = await api.get('/product');

    let data = response.data.filter(product => {
      if (product.delete_at === null) {
        return product;
      }

      return null;
    });

    data = data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  // eslint-disable-next-line class-methods-use-this
  async handleDelete(product) {
    const { title, price, image, id } = product;
    await api.put(`/product/${id}`, {
      title,
      price,
      image,
      delete_at: new Date(),
    });

    this.getItens();
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ListProduct>
          {products.map(product => (
            <Product key={product.id}>
              <img src={product.image} alt={product.title} />
              <DetailProduct>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </DetailProduct>
              <IconContainer onClick={() => this.handleDelete(product)}>
                <MdDelete color="#ff0000" size={30} />
              </IconContainer>
            </Product>
          ))}
        </ListProduct>
      </Container>
    );
  }
}
