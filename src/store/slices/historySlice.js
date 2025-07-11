import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  viewHistory: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setViewHistory(state, action) {
      state.viewHistory = action.payload;
    },
    addToHistory(state, action) {
      const id = action.payload;
      state.viewHistory = [id, ...state.viewHistory.filter(i => i !== id)].slice(0, 10);
    },
  },
});

export const { setViewHistory, addToHistory } = historySlice.actions;
export default historySlice.reducer; 