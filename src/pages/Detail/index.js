import React from 'react';
import { MdEvent, MdLocationOn, MdDeleteForever, MdEdit } from 'react-icons/md';

import Header from '~/components/Header';
import { Container, Button, Card } from './styles';
import { Wrapper } from '~/components/Wrapper';
import calendario from '~/assets/calendario.png';

export default function Detail({ history }) {
  function routeChange(route) {
    history.push(route);
  }

  function handleCancel(id) {
    alert(`handleCancel ${id}`);
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <div>
            <h1>Meetup de React Native</h1>
            <div>
              <Button
                onClick={() => routeChange('/meetup?id=2')}
                background="#4dbaf9"
              >
                <MdEdit size={20} />
                <span>Editar</span>
              </Button>

              <Button onClick={() => handleCancel(1)}>
                <MdDeleteForever size={20} />
                <span>Cancelar</span>
              </Button>
            </div>
          </div>

          <Card>
            <img src={calendario} alt="evento calendário" />

            <p>
              O Mettup de React Native é um evento que reúne a comunidade de
              desenvolvimento mobile utilizando REact a fim de compartilhar
              conhecimento. Todos são convidados.
            </p>

            <span>
              Caso queira participar como palestrante do meetup envie um e-mail
              para rogerio_pavan@hotmail.com
            </span>

            <footer>
              <MdEvent size={24} />
              24 de Junho, às 20h
              <MdLocationOn size={24} />
              Rua Guilherme Gembala, 260
            </footer>
          </Card>
        </Container>
      </Wrapper>
    </>
  );
}
