import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sex: '',
    weight: 0,
    activity: 1.2,
    demand: 0,
    proteins: 0,
    proteinsKcal: 0,
    fats: 0,
    fatsKcal: 0,
    carbons: 0,
    carbonsKcal: 0,
    dietType: 'normal',
    calories: 0,
    nutrions: {
        proteins: 0,
        carbons: 0,
        fats: 0,
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSex: (state, action) => {
            state.sex = action.payload
        },
        setWeight: (state, action) => {
            state.weight = action.payload
        },
        setActivity: (state, action) => {
            state.activity = action.payload
        },
        setDemand: (state, action) => {
            state.demand = action.payload
            state.proteins = (Math.round(state.weight * 1.8) * 1)
            state.proteinsKcal = (Math.round(state.proteins * 4) * 1)
            state.fats = (Math.round(state.weight * 1.2) * 1)
            state.fatsKcal = (Math.round(state.fats * 9) * 1)
            state.carbonsKcal = state.demand - (state.proteinsKcal + state.fatsKcal)
            state.carbons = (Math.round(state.carbonsKcal / 4) * 1)
        },
        setDietType: (state, action) => {
            state.dietType = action.payload
        },
        setCalories: (state, action) => {
            state.calories = action.payload
        },
        setTotalDemand: (state) => {
            state.dietType === 'lose' ?
            (state.demand -= parseInt(state.calories)) :
            (state.demand += parseInt(state.calories))
        },
        setNutrions: (state, action) => { 
            state.nutrions = action.payload
        }
    },
});

export const { setSex, setWeight, setActivity, setDemand, setDietType, setTotalDemand, setCalories, setNutrions } = userSlice.actions

export default userSlice.reducer