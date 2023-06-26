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

export const AppRoutes = () => {
  const { user } = useAuth();

  const isAuthenticated = !!user;

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route element={<RegisterSuccess />} path="/success" />
              <Route element={<ForgetPassword />} path="/forget-password" />
              <Route element={<ResetPasswordSuccess />} path="/reset-success" />

              <Route element={<RegisterClass />} path="/register-class" />
              <Route element={<TeacherList />} path="/teacher-list" />
              <Route element={<TeacherInfo />} path="/teacher-info" />
              <Route element={<Home />} path="/home" />
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
