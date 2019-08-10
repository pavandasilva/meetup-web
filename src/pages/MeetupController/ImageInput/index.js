import React from 'react';
import { MdCameraAlt } from 'react-icons/md';

import { Container } from './styles';

export default function ImageInput() {
  return (
    <Container>
      <div>
        <MdCameraAlt color="#999" size={50} />
        <strong>Selecionar imagem</strong>
      </div>
    </Container>
  );
}
