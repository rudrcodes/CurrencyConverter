import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/f1.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})