import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  priceFilter: 'all',
  selectedCourse: null,
  isChatOpen: false,
  isHistoryOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setPriceFilter(state, action) {
      state.priceFilter = action.payload;
    },
    setSelectedCourse(state, action) {
      state.selectedCourse = action.payload;
    },
    setIsChatOpen(state, action) {
      state.isChatOpen = action.payload;
    },
    setIsHistoryOpen(state, action) {
      state.isHistoryOpen = action.payload;
    },
  },
});

export const { setSearchTerm, setPriceFilter, setSelectedCourse, setIsChatOpen, setIsHistoryOpen } = uiSlice.actions;
export default uiSlice.reducer; 