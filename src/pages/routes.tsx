import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";
import { Register } from "./Register";
import { RegisterSuccess } from "./RegisterSuccess";
import { ForgetPassword } from "./ForgetPassword";
import { ResetPasswordSuccess } from "./ResetPasswordSuccess";
import { RegisterClass } from "./Class/RegisterClass";
import { TeacherList } from "./Teacher/TeacherList";
import { TeacherInfo } from "./Teacher/TeacherInfo";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { PrivateRoute } from "../components/Router/PrivateRoutes";

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <>
              <PrivateRoute element={<RegisterSuccess />} path="/success" />
              <PrivateRoute
                element={<ForgetPassword />}
                path="/forget-password"
              />
              <PrivateRoute
                element={<ResetPasswordSuccess />}
                path="/reset-success"
              />

              <PrivateRoute
                element={<RegisterClass />}
                path="/register-class"
              />
              <PrivateRoute element={<TeacherList />} path="/teacher-list" />
              <PrivateRoute element={<TeacherInfo />} path="/teacher-info" />
              <PrivateRoute element={<Home />} path="/home" />
            </>
          ) : (
            <>
              <Route element={<Login />} path="/" />
              <Route element={<Register />} path="/register" />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
