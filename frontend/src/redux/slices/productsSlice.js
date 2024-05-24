import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    Addproducts: (state, action) => {
      state.arr = action.payload
    },
    deleteProduct: (state, action) => {
      state.arr = state.arr.filter(elem=>elem._id!=action.payload)
    },
    searchProduct: (state, action) => {
      state.arr = state.arr.filter(elem=>elem.title.toUpperCase().includes(action.payload.toUpperCase()))
    },
    AZ: (state, action) => {
      state.arr = state.arr.sort((a,b)=>a.title.localeCompare(b.title))
    },
    ZA: (state, action) => {
      state.arr = state.arr.sort((a,b)=>b.title.localeCompare(a.title))
    },
    LH: (state, action) => {
      state.arr = state.arr.sort((a,b)=>a.price-b.price)
    },
    HL: (state, action) => {
      state.arr = state.arr.sort((a,b)=>b.price-a.price)
    },

  },
})


export const { Addproducts, deleteProduct,searchProduct, AZ,ZA, LH,HL } = productsSlice.actions

export default productsSlice.reducer