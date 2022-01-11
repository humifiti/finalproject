import { createSlice } from '@reduxjs/toolkit'

let initialState: any = {
  isLoading: true,
}

// export const

export const cartSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
})

export const selectCount = (state: any) => state.account

export default cartSlice.reducer
