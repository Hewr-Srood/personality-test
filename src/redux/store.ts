// import feature from './features/feature';
// import service from './services/service';

import { configureStore, combineReducers } from '@reduxjs/toolkit';

const reducers = combineReducers({
  reducer: () => null,
});

export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
