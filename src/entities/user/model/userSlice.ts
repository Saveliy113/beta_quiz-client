import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  isAuthed: boolean;
  domain: string;
  phone: string;
  name: string;
};

const initialState: InitialState = {
  isAuthed: false,
  domain: '',
  phone: '',
  name: '',
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
      action: PayloadAction<{ domain: string; phone: string; name: string }>
    ) => {
      state.phone = action.payload.phone;
      state.domain = action.payload.domain;
      state.name = action.payload.name;
    },
  },
});

export const { setClientInfo, setAuthed } = userSlice.actions;
export default userSlice.reducer;
