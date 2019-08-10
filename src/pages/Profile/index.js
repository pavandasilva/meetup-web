import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';
import Header from '~/components/Header';

export default function Profile() {
  return (
    <>
      <Header />
      <Container>
        <Form>
          <Input type="text" name="name" placeholder="Rogério Pavan" />
          <Input
            type="email"
            name="email"
            placeholder="rogerio_pavan@hotmail.com"
          />
          <hr />
          <Input type="password" name="oldpassword" placeholder="Senha Atual" />
          <Input type="password" name="newpassword" placeholder="Nova Senha" />
          <Input type="password" name="validation" placeholder="Nova Senha" />

          <button type="submit">
            <MdAddCircleOutline size={24} /> Salvar perfil
          </button>
        </Form>
      </Container>
    </>
  );
}
