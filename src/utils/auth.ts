import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { addUser, updateUserInFirestore, getUser } from "./firestore";
import { AppDispatch } from "../redux/store";
import { setUserInfo, clearUserInfo } from "../redux/user/userSlice";

type AuthCredentials = {
  email: string;
  password: string;
  displayName?: string;
  photoURL?: string;
};

export const registerDB = async ({
  email,
  password,
  displayName = "Anonymous",
  photoURL = "",
}: AuthCredentials) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const { user } = credentials;

    console.log("registerDB -> res: ", credentials);

    const res = await updateProfile(user, {
      displayName,
      photoURL,
    });

    console.log("registerDB -> updateProfile res: ", res);

    await addUser(user.uid, {
      email: user.email || "",
      uid: user.uid,
      displayName,
      photoURL,
    });
  } catch (error) {
    console.log("RegisterDB error -> ", error);
  }
};

export const loginDB = async ({ email, password }: AuthCredentials) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log("loginDB -> res: ", credentials);
  } catch (error) {
    console.log("LoginDB error -> ", error);
  }
};

export const logoutDB = async (dispatch: AppDispatch) => {
  try {
    await signOut(auth);
    dispatch(clearUserInfo());
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const authStateChanged = (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, (user) => {
    console.log("Auth state changed:", user);
    if (user) {
      dispatch(
        setUserInfo({
          uid: user.uid,
          email: user.email || "",
          displayName: user.displayName || "Anonymous",
          photoURL: user.photoURL || "",
        }),
      );
    } else {
      dispatch(clearUserInfo());
    }
  });
};

export const updateUserProfile = async (update: {
  displayName?: string;
  photoURL?: string;
}) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};

export const fetchUser = async (dispatch: AppDispatch) => {
  const user = auth.currentUser;
  if (user) {
    try {
      const userInfo = await getUser(user.uid);
      if (userInfo) {
        dispatch(
          setUserInfo({
            ...userInfo,
          }),
        );
      }
    } catch (error) {
      throw error;
    }
  }
};
