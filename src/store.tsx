import { configureStore } from '@reduxjs/toolkit'
import messageSlice, { MessageStore } from './reducers/messageSlice'

export default configureStore({
  reducer: {
    message: messageSlice
  },
})

export interface RootStore {
    message: {prompt:MessageStore}
} 