import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import logo from '~/assets/m.svg';

import { Container } from './styles';
import { Wrapper } from '~/components/Wrapper';

export default function Register() {
  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="Meetups" />

        <Form>
          <Input type="text" name="name" placeholder="Nome completo" />
          <Input type="text" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Sua senha secreta"
          />

          <button type="submit">Criar conta</button>
          <Link to="/">Já tenho login</Link>
        </Form>
      </Container>
    </Wrapper>
  );
}
