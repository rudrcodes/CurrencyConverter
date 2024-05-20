import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    USD: 1.05,
    AUD: 0.67,
    INR: 80.05,
}
let constantValues = {
    USD: 1.05,
    AUD: 0.67,
    INR: 80.05,
}
export const changeValues = createSlice({
    name: 'changeValues',
    initialState,
    reducers: {
        increment: (state) => {
            //yeh change bhi randomly lena hai
            let change = Math.floor(Math.random() * 3) * (0.01)
            state.USD = constantValues.USD + (change * constantValues.USD)

            state.AUD = constantValues.AUD + (change * constantValues.AUD)

            state.INR = constantValues.INR + (change * constantValues.INR)
        },
        decrement: (state) => {
            let change = Math.floor(Math.random() * 3) * (0.01)
            state.USD = (constantValues.USD - (change * constantValues.USD)) >= 0 ? (constantValues.USD - (change * constantValues.USD)) : constantValues.USD + (change * constantValues.USD)

            state.AUD = (constantValues.AUD - (change * constantValues.AUD)) >= 0 ? (constantValues.AUD - (change * constantValues.AUD)) : constantValues.AUD + (change * constantValues.AUD)

            state.INR = (constantValues.INR - (change * constantValues.INR)) >= 0 ? (constantValues.INR - (change * constantValues.INR)) : constantValues.INR + (change * constantValues.INR)
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = changeValues.actions

export default changeValues.reducer