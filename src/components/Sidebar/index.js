import React, { useState, useContext } from 'react';

import {
  MdList,
  MdWork,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdAdd,
  MdLens,
} from 'react-icons/md';

import { FaUser } from 'react-icons/fa';

import { Container, Menu, Submenu, MenuLink, UserContainer } from './styles';
import { Context as UserContext } from '../../context/UserContext';

export default function Sidebar() {
  const [show, setShow] = useState(false);

  const { state } = useContext(UserContext);

  const handleShowList = () => {
    return show ? setShow(false) : setShow(true);
  };

  return (
    <Container>
      <UserContainer>
        <FaUser size={25} color="#FFF" />
        <span>Otávio Braga</span>
        {/* <span>{state.name}</span> */}
        <MdLens size={12} color="#128a0e" />
      </UserContainer>
      <Menu>
        <li>
          <button type="button" onClick={handleShowList}>
            <div>
              <MdWork size={20} color="#FFF" />
              <span>Produtos</span>
            </div>
            {show ? (
              <MdKeyboardArrowDown size={20} color="#FFF" />
            ) : (
              <MdKeyboardArrowLeft size={20} color="#FFF" />
            )}
          </button>
          <Submenu className={show ? 'show' : ''}>
            <li>
              <MenuLink to="/product">
                <MdList size={20} color="#FFF" />
                <span>Lista</span>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/product/add">
                <MdAdd size={20} color="#FFF" />
                <span>Adicionar</span>
              </MenuLink>
            </li>
          </Submenu>
        </li>
      </Menu>
    </Container>
  );
}
