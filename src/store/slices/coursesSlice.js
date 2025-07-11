import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  filteredCourses: [],
  suggestions: [],
  isLoadingSuggestions: false,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
      state.filteredCourses = action.payload;
    },
    setFilteredCourses(state, action) {
      state.filteredCourses = action.payload;
    },
    setSuggestions(state, action) {
      state.suggestions = action.payload;
    },
    setIsLoadingSuggestions(state, action) {
      state.isLoadingSuggestions = action.payload;
    },
  },
});

export const { setCourses, setFilteredCourses, setSuggestions, setIsLoadingSuggestions } = coursesSlice.actions;
export default coursesSlice.reducer; 