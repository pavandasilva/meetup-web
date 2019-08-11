import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { createUserFailure } from './actions';

export function* createUser({ payload }) {
  console.tron.log('createUser({ payload })');

  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    toast.success(`Cadastro realizado com sucesso. Entre com e-mail e senha.`);

    history.push('/');
  } catch (error) {
    let errorMsg;

    if (error.response.status === 400) {
      errorMsg = 'Usuário já cadastrado';
    } else {
      errorMsg = 'Falha no login, verifique seus dados';
    }

    toast.error(errorMsg);
    yield put(createUserFailure());
  }
}

export default all([takeLatest('user/CREATE_USER_REQUEST', createUser)]);
