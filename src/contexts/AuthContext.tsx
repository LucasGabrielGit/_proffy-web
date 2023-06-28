import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { auth, firestore } from "../service/firebase";
import {
  addDoc,
  collection,
  setDoc,
  where,
  query,
  getDocs,
  DocumentData,
} from "firebase/firestore";

type User = {
  id: string;
  name: string | null;
  avatar?: string | null;
  email: string | null;
  password?: string | null;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type SignUpCredentials = {
  name: string;
  email: string;
  password: string;
};

type AuthContextData = {
  user: User | undefined;
  signIn(credentials: SignInCredentials): void;
  signUp(credentials: SignUpCredentials): void;
  signInWithGoogle: () => void;
  signOut(): void;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

type PropsAuth = {
  children: ReactNode;
};

const AuthProvider = (props: PropsAuth) => {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const { uid, email, displayName, photoURL } = currentUser;

        if (!uid) {
          throw new Error("Faltam algumas informações da conta!");
        }

        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("id", "==", currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          const mappedUser = mapDocumentToUser(userData);
          setUser(mappedUser);
          console.log("User" + JSON.stringify(user?.name));
        });
      }
    });

    return unsubscribe();
  }, []);

  const signOut = useCallback(() => {
    setUser({} as User);
  }, [setUser]);

  const signUp = useCallback(
    async ({ email, name, password }: SignUpCredentials) => {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) => {
          const usersRef = collection(firestore, "users");
          const q = query(usersRef, where("id", "==", result.user.uid));
          const querySnapshot = await getDocs(q);
          querySnapshot.docs.forEach(async (data) => {
            if (data.id) {
              alert("Já existe um usuário cadastrado com esse e-mail!");
            }
            await addDoc(collection(firestore, "users"), {
              id: result.user.uid,
              email: result.user.email,
              name: name,
            }).then((result) => {
              console.log(result);
            });
          });
        })
        .catch((error) => {
          console.log({ ErrorCode: error.code, ErrorMessage: error.message });
        });
    },
    [setDoc]
  );

  const mapDocumentToUser = (documentData: DocumentData): User => {
    const { id, name, avatar, email, password } = documentData;
    return { id, name, avatar, email, password };
  };

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const result = await signInWithEmailAndPassword(auth, email, password);

      const usersRef = collection(firestore, "users");
      const q = query(usersRef, where("id", "==", result.user.uid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        const mappedUser = mapDocumentToUser(userData);
        setUser(mappedUser);
        console.log("User" + userData);
      });
    },
    [user, setUser]
  );

  const signInWithGoogle = useCallback(async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleAuthProvider);

    const { uid, email, displayName, photoURL } = result.user;

    if (!uid || !photoURL || displayName) {
      throw new Error("Faltam algumas informações da conta!");
    }

    setUser({
      id: uid,
      email: email,
      name: displayName,
      avatar: photoURL,
    });
  }, [user, setUser]);

  const values = useMemo(
    () => ({
      user: user,
      signIn,
      signUp,
      signInWithGoogle,
      signOut,
      isAuthenticated,
    }),
    [user, signIn, signUp, signInWithGoogle, signOut]
  );

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
export { AuthProvider, useAuth };
