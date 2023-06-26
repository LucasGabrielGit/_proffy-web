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
  updateUser(user: User): void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

type PropsAuth = {
  children: ReactNode;
};

const AuthProvider = (props: PropsAuth) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@proffyToken");
    const user = localStorage.getItem("@proffyUser");

    console.log(user)

    if (token && user && api.defaults.headers.options) {
      api.defaults.headers.options.Authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signOut = useCallback(() => {
    localStorage.removeItem("@proffyToken");
    localStorage.removeItem("@proffyUser");

    setData({} as AuthState);
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("login", { email, password });

    console.log(response.data);

    const { token, user } = response.data;

    

    localStorage.setItem("@proffyToken", token);
    localStorage.setItem("@proffyUser", JSON.stringify(user));

    if (api.defaults.headers.options) {
      api.defaults.headers.options.Authorization = `Bearer ${token}`;
    }

    setData({ token, user });
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem("@proffyUser", JSON.stringify(user));

      setData({ token: data.token, user });
    },
    [setData, data.token]
  );

  const values = useMemo(
    () => ({
      user: data.user,
      signIn,
      signOut,
      updateUser,
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
