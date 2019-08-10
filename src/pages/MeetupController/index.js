import React, { useRef, useEffect, useState } from 'react';
import { Form, Input, useField } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';

import Header from '~/components/Header';
import ImageInput from './ImageInput';

import { Container } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt', pt);

export default function MettupController() {
  const ref = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(
    'location'
  );

  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Header />
      <Container>
        <Form>
          <ImageInput />
          <Input type="text" name="title" placeholder="Título do Meetup" />
          <Input
            type="email"
            name="email"
            placeholder="rogerio_pavan@hotmail.com"
          />
          <Input
            multiline
            name="description"
            placeholder="Descrição Completa"
          />

          <ReactDatePicker
            locale="pt"
            dateFormat="dd/MM/yyyy"
            placeholderText="Data do meetup"
            name={fieldName}
            selected={selected}
            onChange={date => setSelected(date)}
            ref={ref}
            autoComplete="off"
          />

          {error && <span>{error}</span>}

          <button type="submit">
            <MdAddCircleOutline size={24} /> Salvar meetup
          </button>
        </Form>
      </Container>
    </>
  );
}
