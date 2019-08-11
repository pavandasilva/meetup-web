export function createUserRequest(name, email, password) {
  return {
    type: 'user/CREATE_USER_REQUEST',
    payload: { name, email, password },
  };
}

export function createUserFailure() {
  return {
    type: 'user/CREATE_USER_FAILURE',
  };
}
