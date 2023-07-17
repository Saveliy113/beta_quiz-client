import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  isOpened: boolean;
};

const initialState: InitialState = {
  isOpened: true,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleIsOpened: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { toggleIsOpened } = sidebarSlice.actions;
export default sidebarSlice.reducer;
