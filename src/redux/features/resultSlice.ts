import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnswer, IResult } from 'src/interfaces';

const initialState: IResult = {};

export const resultSlice = createSlice({
  initialState,
  name: 'resultSlice',
  reducers: {
    clearResult: () => initialState,
    setResult: (state, action: PayloadAction<IAnswer>) => {
      const payload = action.payload;
      state[payload.question_id] = payload;
    },
  },
});

export default resultSlice.reducer;

export const { clearResult, setResult } = resultSlice.actions;
