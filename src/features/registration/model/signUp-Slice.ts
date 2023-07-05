import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: SignUpState;
};

type SignUpState = {
  clientPhone: string;
};

const initialState = {
  value: {
    clientPhone: '',
  } as SignUpState,
} as InitialState;

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setClientPhone: (state, action: PayloadAction<string>) => {
      state.value = {
        clientPhone: action.payload,
      };
    },
  },
});

export const { setClientPhone } = signUpSlice.actions;
export default signUpSlice.reducer;
