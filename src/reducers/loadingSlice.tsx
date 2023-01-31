import { createSlice } from '@reduxjs/toolkit'
import { RootStore } from '../store'

export interface LoadingStore {
   loading:boolean
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loading:false
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  },
})

export const { setLoading } = loadingSlice.actions
export const selectLoading = (state:RootStore) => state.loading

export default loadingSlice.reducer