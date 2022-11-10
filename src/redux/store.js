import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactAPI';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from './authAPI';
import { filterSlice } from './filter';
import { authSlice } from './authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
