import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';

import { createUserRequest } from '~/store/modules/user/actions';

import logo from '~/assets/m.svg';

import { Container } from './styles';
import { Wrapper } from '~/components/Wrapper';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function Register() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(createUserRequest(name, email, password));
  }

  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="Meetups" />

        <Form schema={schema} onSubmit={handleSubmit}>
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
