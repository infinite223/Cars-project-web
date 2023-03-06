import { configureStore } from '@reduxjs/toolkit'
import loadingSlice, { LoadingStore } from './reducers/loadingSlice'
import { CarprojectData, Chat, Message } from './utils/types'
import messageSlice, { MessageStore } from './reducers/messageSlice'
import projectsSlice from './reducers/projectsSlice'
import creatingProjectSlice from './reducers/creatingProjectSlice'
import chatsSlice from './reducers/chatsSlices';

export default configureStore({
  reducer: {
    message: messageSlice,
    loading: loadingSlice,
    projects: projectsSlice,
    createProject: creatingProjectSlice,
    chats: chatsSlice
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
    creatingProject: CarprojectData,
    chats:{chats: Chat[]}
} 