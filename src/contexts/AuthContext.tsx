import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { auth, firestore } from "../service/firebase";
import { addDoc, collection, setDoc } from "firebase/firestore";

type User = {
  id: string;
  name: string | null;
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

export const AuthContext = createContext({} as AuthContextData);

type PropsAuth = {
  children: ReactNode;
};

const AuthProvider = (props: PropsAuth) => {
  const [user, setUser] = useState<User>({} as User);
  const isAuthenticated = !!user;

  const signOut = useCallback(() => {
    setUser({} as User);
  }, [setUser]);

  const signUp = useCallback(
    async ({ email, name, password }: SignUpCredentials) => {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) => {
          await addDoc(collection(firestore, "users"), {
            id: result.user.uid,
            email: result.user.email,
            name: name,
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    [setDoc]
  );

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const result = await signInWithEmailAndPassword(auth, email, password);

      if (result.user) {
        setUser({
          id: result.user.uid,
          name: user.name,
          email: result.user.email,
        });

        console.log(user);
      }
    },
    [user, setUser]
  );

  const signInWithGoogle = useCallback(() => {}, []);

  const values = useMemo(
    () => ({
      user,
      signIn,
      signUp,
      signInWithGoogle,
      signOut,
      isAuthenticated,
    }),
    []
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
