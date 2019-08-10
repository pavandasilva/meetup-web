export function loginRequest(email, password) {
  return {
    type: 'auth/LOGIN_REQUEST',
    payload: { email, password },
  };
}

export function loginSucess(user, token) {
  return {
    type: 'auth/LOGIN_SUCESS',
    payload: { user, token },
  };
}

export function failure() {
  return {
    type: 'auth/FAILURE',
  };
}
