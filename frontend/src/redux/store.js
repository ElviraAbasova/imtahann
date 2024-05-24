import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice'
import favoriteSlice from './slices/favoriteSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    favorite: favoriteSlice
  },
})