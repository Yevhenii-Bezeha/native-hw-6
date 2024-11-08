import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../user/userSlice";

type Comment = {
  id: string;
  author: UserState["userInfo"];
  comment: string;
  dateTime: string;
};

export type Post = {
  id: string;
  pictureUrl: string;
  pictureName: string;
  comments: Comment[];
  locality: string;
  geoLocation?: { latitude: number; longitude: number };
  uid: string;
};

export type PostState = {
  data: Post[];
};

const initialState: PostState = {
  data: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<UserState["userInfo"]>) {
      state.data = action.payload;
    },
  },
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
