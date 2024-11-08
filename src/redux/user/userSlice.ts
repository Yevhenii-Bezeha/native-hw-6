import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  userInfo:
    | {
        uid: string;
        email: string;
        displayName?: string;
        photoURL?: string;
      }
    | undefined;
};

const initialState: UserState = {
  userInfo: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<UserState["userInfo"]>) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state) {
      state.userInfo = undefined;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;
