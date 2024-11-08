import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Post } from "../redux/post/postSlice";

type UserData = {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}; // TODO: move to types

export const addUser = async (userId: string, userData: UserData) => {
  try {
    await setDoc(doc(db, "users", userId), userData);
    console.log("User added -> ", userId);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

// Функція для отримання документа з колекції user
export const getUser = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("Not such document!");
  }
};

export const updateUserInFirestore = async (user: any) => {
  try {
    await setDoc(
      doc(db, "users", user.uid),
      {
        email: user.email,
        displayName: user.displayName || "Anonymous", // Якщо displayName недоступний
        lastLogin: new Date().toISOString(), // Додати дату останнього логіну
      },
      { merge: true }, // merge: true - для оновлення існуючого документа або створення нового
    );
    console.log("User data saved to Firestore:", user.uid); // TODO: remove it as not needed
  } catch (error) {
    console.error("Error saving user data to Firestore:", error); // TODO: handle error
  }
};

export const addPost = async (postData: Post) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), postData);
    console.log("Document written with ID: ", docRef.id); // TODO: remove it as not needed
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error; // TODO: handle error
  }
};

export const getPosts = async (uid) => {
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return posts;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
};

export const getPostDocId = async (postId) => {
  try {
    const q = query(collection(db, "posts"), where("id", "==", postId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]; // assuming only one match per ID
      return { docId: doc.id, docData: doc.data() };
    } else {
      console.error("No document found with given postId");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document ID:", error);
    throw error;
  }
};

export const updatePost = async (docId, currentComments, newComment) => {
  try {
    const postRef = doc(db, "posts", docId);
    await updateDoc(
      postRef,
      {
        comments: [...currentComments, newComment],
      },
      { merge: true },
    );
    console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};
