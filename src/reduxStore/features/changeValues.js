import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    USD: 1.05,
    AUD: 0.67,
    INR: 80.05,
}

export const changeValues = createSlice({
    name: 'changeValues',
    initialState,
    reducers: {
        increment: (state) => {
            state.USD = state.USD + (0.03 * state.USD)
            state.AUD = state.AUD + (0.03 * state.AUD)
            state.INR = state.INR + (0.03 * state.INR)
        },
        decrement: (state) => {
            state.USD = state.USD - (0.03 * state.USD)
            state.AUD = state.AUD - (0.03 * state.AUD)
            state.INR = state.INR - (0.03 * state.INR)
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = changeValues.actions

export default changeValues.reducer