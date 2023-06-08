import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { CharacterT } from 'src/types'

type Initialstate = {
  searchTerm: string
  recentlyViewed: CharacterT[]
}

const initialState: Initialstate = {
  searchTerm: '',
  recentlyViewed: [],
}

export const appSlide = createSlice({
  name: 'appStore',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => ({
      ...state,
      searchTerm: action.payload,
    }),
    addRecentlyViewed: (state, action: PayloadAction<CharacterT>) => ({
      ...state,
      recentlyViewed: [action.payload, ...state.recentlyViewed.slice(0, 4)],
    }),
  },
})

// Action creators are generated for each case reducer function
export const { setSearchTerm, addRecentlyViewed } = appSlide.actions

export default appSlide.reducer
