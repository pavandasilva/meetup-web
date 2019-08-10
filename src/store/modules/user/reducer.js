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
    default:
      return state;
  }
}
