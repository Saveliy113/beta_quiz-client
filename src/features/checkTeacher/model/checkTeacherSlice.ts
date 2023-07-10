import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  domain: string;
  phone: string;
};

const initialState: InitialState = {
  domain: '',
  phone: '',
};

export const checkTeacherSlice = createSlice({
  name: 'checkTeacher',
  initialState,
  reducers: {
    setClientInfo: (state, action: PayloadAction<InitialState>) => {
      console.log(action.payload);
      state.phone = action.payload.phone;
      state.domain = action.payload.domain;
    },
  },
});

export const { setClientInfo } = checkTeacherSlice.actions;
export default checkTeacherSlice.reducer;
