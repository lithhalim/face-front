import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const statusVediocall = createSlice({
  name: 'vediocall',
  initialState,
  reducers: {
    StatusVedioCall: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {StatusVedioCall } = statusVediocall.actions

export default statusVediocall.reducer

