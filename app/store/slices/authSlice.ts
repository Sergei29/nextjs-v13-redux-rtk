import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isAuth: boolean;
  jid: string;
}

const initialState: IAuthState = {
  isAuth: false,
  jid: "",
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setJid: (state, action: PayloadAction<string>) => {
      state.jid = action.payload;
    },
  },
});

/**
 * @description Here we get the actions and reducer to play around with the auth state. Notice the two keys isAuth and jid. These are the ones we persisted in the store.
 */

// Action creators are generated for each case reducer function
export const { setAuth, setJid } = authSlice.actions;

export const authReducer = authSlice.reducer;