import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  isAuthed: boolean;
  domain: string;
  phone: string;
};

const initialState: InitialState = {
  isAuthed: false,
  domain: '',
  phone: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthed: (state, action: PayloadAction<boolean>) => {
      state.isAuthed = action.payload;
    },
    setClientInfo: (
      state,
      action: PayloadAction<{ domain: string; phone: string }>
    ) => {
      state.phone = action.payload.phone;
      state.domain = action.payload.domain;
    },
  },
});

export const { setClientInfo, setAuthed } = userSlice.actions;
export default userSlice.reducer;
