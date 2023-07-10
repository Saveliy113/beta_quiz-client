import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: CheckTeacherState;
};

type CheckTeacherState = {
  clientPhone: string;
};

const initialState = {
  value: {
    clientPhone: '',
  } as CheckTeacherState,
} as InitialState;

export const checkTeacherSlice = createSlice({
  name: 'checkTeacher',
  initialState,
  reducers: {
    setClientPhone: (state, action: PayloadAction<string>) => {
      state.value = {
        clientPhone: action.payload,
      };
    },
  },
});

export const { setClientPhone } = checkTeacherSlice.actions;
export default checkTeacherSlice.reducer;
