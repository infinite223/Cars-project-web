import { configureStore } from '@reduxjs/toolkit'
import loadingSlice, { LoadingStore } from './reducers/loadingSlice'
import { CarprojectData } from './utils/types'
import messageSlice, { MessageStore } from './reducers/messageSlice'
import projectsSlice from './reducers/projectsSlice'

export default configureStore({
  reducer: {
    message: messageSlice,
    loading: loadingSlice,
    projects: projectsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export interface RootStore {
    message: {prompt:MessageStore},
    loading: LoadingStore,
    projects: {projects:CarprojectData[] }
} 