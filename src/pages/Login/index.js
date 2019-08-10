import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import logo from '~/assets/m.svg';

import { Container } from './styles';
import { Wrapper } from '~/components/Wrapper';

export default function Login() {
  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="Meetups" />

        <Form>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Sua senha secreta"
          />

          <button type="submit">Entrar</button>
          <Link to="/register">Criar conta grátis</Link>
        </Form>
      </Container>
    </Wrapper>
  );
}
