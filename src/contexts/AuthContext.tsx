import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
import { toast } from "react-hot-toast";

type User = {
  id: string;
  name: string | null;
  avatar?: string | undefined;
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
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
  logOut(): void;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

type PropsAuth = {
  children: ReactNode;
};

const AuthProvider = (props: PropsAuth) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = !!user;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        const { uid, email, displayName, photoURL } = currentUser;

        if (!displayName || !photoURL) {
          throw new Error("Faltam algumas informações da conta!");
        }

        setUser({
          id: uid,
          name: displayName,
          email: email,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = useCallback(async () => {
    try {
      setIsLoading(true);
      await signOut(auth).then(() => setIsLoading(false));
    } catch (error) {
      toast.error("Erro ao fazer logout.", {
        duration: 4000,
        position: "top-right",
      });
      console.log("Erro ao fazer logout:", error);
    }
  }, []);

  const signUp = useCallback(
    async ({ email, name, password }: SignUpCredentials) => {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) => {
          await addDoc(collection(firestore, "users"), {
            id: result.user.uid,
            email: result.user.email,
            name: name,
          });
          const usersRef = collection(firestore, "users");
          const q = query(usersRef, where("id", "==", result.user.uid));
          const querySnapshot = await getDocs(q);
          querySnapshot.docs.forEach((doc) => {
            const userData = doc.data();
            const mappedUser = mapDocumentToUser(userData);
            setUser(mappedUser);
          });

          toast.success("Usuário cadastrado com sucesso!", {
            position: "top-right",
          });
          setIsLoading(false);
        })
        .catch((error) => {
          toast.error("Já existe um usuário vinculado à este e-mail!", {
            duration: 3000,
            position: "top-right",
          });
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
      });
    },
    [user, setUser]
  );

  const values = useMemo(
    () => ({
      user: user,
      signIn,
      signUp,
      logOut,
      isAuthenticated,
      toast,
      isLoading: isLoading,
    }),
    [user, signIn, signUp, signOut, isLoading]
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
