import produce from 'immer';

const initial_state = {
  user: null,
  loading: false,
};

export default function user(state = initial_state, action) {
  switch (action.type) {
    case 'auth/LOGIN_SUCESS':
      return produce(state, draft => {
        draft.user = action.payload.user;
      });

    case 'user/USER_SUCESS':
      return produce(state, draft => {
        draft.user = action.payload.user;
      });

    case 'user/CREATE_USER_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });

    case 'user/CREATE_USER_SUCCES':
      return produce(state, draft => {
        draft.loading = false;
      });

    case 'user/CREATE_USER_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
