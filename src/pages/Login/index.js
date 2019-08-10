import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '~/assets/m.svg';

import { Container, LoadingButton } from './styles';
import { Wrapper } from '~/components/Wrapper';

import { loginRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(loginRequest(email, password));
  }

  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="Meetups" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Sua senha secreta"
          />
          <LoadingButton type="submit" loading={loading}>
            {loading ? <FaSpinner color="#fff" size={16} /> : 'Entrar'}
          </LoadingButton>
          <Link to="/register">Criar conta grátis</Link>
        </Form>
      </Container>
    </Wrapper>
  );
}
