import { configureStore } from '@reduxjs/toolkit'
import changeValuesReducer from './features/changeValues'

export const store = configureStore({
    reducer: {
        changeValues: changeValuesReducer
    },
})