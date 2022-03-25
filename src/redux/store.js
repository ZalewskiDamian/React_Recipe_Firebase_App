import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import recipeReducer from './recipeReducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        recipes: recipeReducer,
    },
})