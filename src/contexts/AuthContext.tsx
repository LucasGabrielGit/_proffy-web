import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { api } from "../service/api";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type AuthState = {
  token: string;
  user: User;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User;
  signIn(credentials: SignInCredentials): void;
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
  const [user, setUser] = useState<User>({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const signOut = useCallback(() => {
    localStorage.removeItem("@proffyToken");
    setIsAuthenticated(false);

    setUser({} as User);
  }, [setUser]);

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const response = await api.post("login", { email, password });

      const { token } = response.data;
      api.defaults.headers.common = { Authorization: `Bearer ${token}` };
      const userLogged = await api.get(`api/user/${email}`);

      if (userLogged) {
        setUser(userLogged.data as User);
        setIsAuthenticated(true);
        console.log(userLogged.data);
      }

      localStorage.setItem("@proffyToken", token);

      if (api.defaults.headers.options) {
        api.defaults.headers.options.Authorization = `Bearer ${token}`;
      }

      return user;
    },
    [user, setUser]
  );

  const values = useMemo(
    () => ({
      user: user,
      signIn,
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
