import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/m.svg';

import { Container, Wrapper, Profile } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src={logo} alt="Meetups" />
        </Link>
        <aside>
          <Profile>
            <strong>Diego Fernandes</strong>
            <Link to="/profile">
              <p>Meu perfil</p>
            </Link>
          </Profile>
          <button type="button">Sair</button>
        </aside>
      </Container>
    </Wrapper>
  );
}
