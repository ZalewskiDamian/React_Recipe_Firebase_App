import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: [],
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            state.recipes.push(action.payload);
        },
        removeRecipe: (state, action) => {
            const id = action.payload;
            state.recipes = [...state.recipes.filter((recipe) => recipe.id !== id)]
        }
    }
});

export const { addRecipe, removeRecipe} = recipeSlice.actions

export default recipeSlice.reducer