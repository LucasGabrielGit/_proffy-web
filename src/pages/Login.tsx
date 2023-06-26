import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../resources/bg.svg";
import "../resources/styles/styles.css";
import { faEye, faEyeSlash, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FormEventHandler, useCallback, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import * as Yup from "yup";
import { Formik } from "formik";

import { useNavigate } from "react-router-dom";
import { stringify } from "querystring";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Campo obrigatório")
    .email("Digite um e-mail válido"),
  password: Yup.string().required("Campo obrigatório"),
});

export const Login = () => {
  const { signIn } = useAuth();
  const [isVisiblePassword, setIsVisiblePassowrd] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleLogin = useCallback<FormEventHandler<HTMLFormElement>>(
  //   async (event) => {
  //     event.preventDefault();

  //     try {
  //       await signIn({
  //         email: email,
  //         password: password,
  //       });

  //       navigate("/home");
  //     } catch (err) {
  //       alert(`Erro inesperado: ${err}`);
  //       return;
  //     }
  //   },
  //   [signIn, navigate]
  // );

  const handleIsVisiblePass = () => {
    setIsVisiblePassowrd(!isVisiblePassword);
  };

  const handleIsHidePass = () => {
    setIsVisiblePassowrd(!!isVisiblePassword);
  };

  return (
    <div className="h-screen flex justify-center">
      <div
        className="flex flex-1 items-center justify-center relative"
        style={{ background: "#8257E5" }}
      >
        <img src={bg} alt="Background" width={520} height={520} />
        <div className="flex flex-col gap-2 absolute ">
          <h1 className="text-8xl font-extrabold text-gray-100">Proffy</h1>
          <p className="text-gray-100 font-medium text-2xl w-52">
            Sua plataforma de estudos online
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={async (values) => {
            try {
              await signIn({
                email: values.email,
                password: values.password,
              });

              navigate("/home");
            } catch (err) {
              alert(`Erro inesperado: ${err}`);
              return;
            }
            alert(`Logado com sucesso ${JSON.stringify(values)}`);
          }}
        >
          {({
            values,
            setFieldValue,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <>
              <form
                className="flex flex-col max-w-xs w-full"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-10 mb-8">
                  <h2 className="text-3xl font-bold">Fazer login</h2>
                  <div className="flex flex-col">
                    <div className="input-block">
                      <input
                        type="text"
                        placeholder="E-mail"
                        className="
                        h-14 border
                        border-zinc-200 
                        rounded-t-md 
                        px-6 py-6 outline-none
                        w-full
                        input-custom"
                        value={values.email}
                        onChange={(e) => {
                          setFieldValue("email", e.target.value);
                        }}
                      />
                    </div>
                    <div className="input-block">
                      <input
                        id="password"
                        type={`${isVisiblePassword ? "text" : "password"}`}
                        placeholder="Senha"
                        className="
                        h-14 border 
                        rounded-t-none 
                      border-zinc-200 
                        rounded-md 
                        px-6 py-6
                        relative
                        outline-none 
                        w-full"
                        value={values.password}
                        onChange={(e) => {
                          setFieldValue("password", e.target.value);
                        }}
                      />
                      <button
                        className="absolute right-4 top-4"
                        onClick={(e) => {
                          e.preventDefault();
                          if (isVisiblePassword) {
                            handleIsHidePass();
                          }
                          handleIsVisiblePass();
                        }}
                        type="submit"
                      >
                        <FontAwesomeIcon
                          icon={isVisiblePassword ? faEyeSlash : faEye}
                          fontSize={16}
                          color="#8257E5"
                        />
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex items-center gap-4 justify-center">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          id="rememberMe"
                          className="h-4 w-4 rememberMe"
                        />
                        <label
                          htmlFor="rememberMe"
                          className="text-zinc-500 toRemember"
                        >
                          Lembrar-me
                        </label>
                      </div>
                      <a href="http#" className="text-zinc-500">
                        Esqueci minha senha
                      </a>
                    </div>
                  </div>

                  <button className="w-full bg-green-500 h-14 rounded-lg text-white flex items-center justify-center hover:bg-opacity-80 transition-all duration-200 text-xl">
                    Entrar
                  </button>
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span>Não tem uma conta?</span>
                    <a
                      href="http#"
                      className="text-base font-medium leading-6"
                      style={{ color: "#8257E5" }}
                    >
                      Cadastre-se
                    </a>
                  </div>
                  <span>
                    É de graça{" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "#8257E5" }}
                    />
                  </span>
                </div>
              </form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};
