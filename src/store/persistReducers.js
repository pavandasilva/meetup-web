import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

function persistReducers(reducers) {
  const persistedReducer = persistReducer(
    {
      key: 'webMeetups',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
}

export default persistReducers;
