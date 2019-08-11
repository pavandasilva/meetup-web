import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { loginSucess, loginFailure } from './actions';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'auth', {
      email,
      password,
    });

    console.tron.log(response);

    const { user, token } = response.data;

    yield put(loginSucess(user, token));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha no login, verifique seus dados');
    yield put(loginFailure());
  }
}

export default all([takeLatest('auth/LOGIN_REQUEST', login)]);
