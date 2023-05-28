import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import resultSlice from './features/resultSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
const reducers = combineReducers({
  result: resultSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
