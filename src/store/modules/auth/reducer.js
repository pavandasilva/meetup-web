import produce from 'immer';

const initial_state = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = initial_state, action) {
  switch (action.type) {
    case 'auth/LOGIN_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });

    case 'auth/LOGIN_SUCESS':
      return produce(state, draft => {
        draft.user = action.payload.user;
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
      });

    case 'auth/LOGIN_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
