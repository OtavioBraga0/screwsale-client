import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import api from '../../services/api';

import {
  Container,
  FormContainer,
  FormGroup,
  Button,
  FormItem,
  FormFooter,
  ImageContainer,
} from './styles';

export default function ProductAdd({ history }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const { addToast } = useToasts();

  const handleSubmit = async e => {
    e.preventDefault();
    if (title && price !== 0 && image) {
      await api.post('product', {
        title,
        price,
        image,
      });

      addToast('Produto Salvo', { appearance: 'success' });

      setTimeout(() => {
        history.push('/product');
      }, 1000);
    } else {
      addToast('Preencha os campos corretmante', { appearance: 'error' });
    }
  };

  const handleCancel = () => {
    history.push('/');
  };

  return (
    <Container>
      <FormContainer onSubmit={e => handleSubmit(e)}>
        <h1>Adicionar Produto</h1>
        <FormGroup>
          <FormItem>
            <input
              type="text"
              placeholder="Titulo"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <input
              type="number"
              placeholder="Preço (R$)"
              value={price}
              onChange={e =>
                e.target.value < 0 ? setPrice(0) : setPrice(e.target.value)
              }
            />
          </FormItem>
          <FormItem>
            <input
              type="text"
              placeholder="Imagem"
              value={image}
              onChange={e => setImage(e.target.value)}
            />
          </FormItem>
          <ImageContainer>
            {image ? <img src={image} alt="Imagem do Produto" /> : null}
          </ImageContainer>
        </FormGroup>
        <FormFooter>
          <Button color="#911800" type="type" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit" color="#008f11">
            Adicionar
          </Button>
        </FormFooter>
      </FormContainer>
    </Container>
  );
}

ProductAdd.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
