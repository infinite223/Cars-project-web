import { configureStore } from '@reduxjs/toolkit'
import loadingSlice, { LoadingStore } from './reducers/loadingSlice'
import messageSlice, { MessageStore } from './reducers/messageSlice'

export default configureStore({
  reducer: {
    message: messageSlice,
    loading: loadingSlice
  },
})

export interface RootStore {
    message: {prompt:MessageStore},
    loading: LoadingStore
} 