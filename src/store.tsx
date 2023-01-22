import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './reducers/messageSlice'

export default configureStore({
  reducer: {
    message: messageSlice
  },
})