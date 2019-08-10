import React from 'react';

import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';
import { Container, Lista } from './styles';
import { Wrapper } from '~/components/Wrapper';

import Header from '~/components/Header';

export default function Dashboard({ history }) {
  function routeChange(route) {
    history.push(route);
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <div>
            <h1>Meus mettups</h1>
            <button type="button" onClick={() => routeChange('/meetup')}>
              <MdAddCircleOutline size={24} />
              Novo meetup
            </button>
          </div>

          <Lista>
            <li>
              <button type="button" onClick={() => routeChange('/detail?id=2')}>
                <strong>Mettup 1</strong>
                <div>
                  <span>24 de Hunho , às 20</span>

                  <MdKeyboardArrowRight size={24} color="#999" />
                </div>
              </button>
            </li>
            <li>
              <button type="button">
                <strong>Mettup 1</strong>
                <div>
                  <span>24 de Hunho , às 20</span>

                  <MdKeyboardArrowRight size={24} color="#999" />
                </div>
              </button>
            </li>

            <li>
              <button type="button">
                <strong>Mettup 1</strong>
                <div>
                  <span>24 de Hunho , às 20</span>

                  <MdKeyboardArrowRight size={24} color="#999" />
                </div>
              </button>
            </li>
          </Lista>
        </Container>
      </Wrapper>
    </>
  );
}
