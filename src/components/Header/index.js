import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '~/assets/m.svg';

import { Container, Wrapper, Profile } from './styles';

export default function Header() {
  const { user } = useSelector(state => state.auth);

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src={logo} alt="Meetups" />
        </Link>
        <aside>
          <Profile>
            <strong>{user.name}</strong>
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
