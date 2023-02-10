import { createSlice } from '@reduxjs/toolkit'
import { RootStore } from '../store'

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {projects: []},
  reducers: {
    setProjectsState: (state, action) => {
      state.projects =  action.payload
    }
  },
})

export const { setProjectsState } = projectsSlice.actions
export const selectProjects = (state:RootStore) =>state.projects.projects

export default projectsSlice.reducer