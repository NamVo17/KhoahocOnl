import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './slices/coursesSlice';
import favoritesReducer from './slices/favoritesSlice';
import historyReducer from './slices/historySlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    favorites: favoritesReducer,
    history: historyReducer,
    ui: uiReducer,
  },
});

export default store;
