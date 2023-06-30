import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../resources/bg.svg";
import backBtn from "../resources/back-button.svg";
import "../resources/styles/styles.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useAuth } from "../contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

export const Register = () => {
  const [isVisiblePassword, setIsVisiblePassowrd] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const handleIsVisiblePass = () => {
    setIsVisiblePassowrd(!isVisiblePassword);
  };

  const handleIsHidePass = () => {
    setIsVisiblePassowrd(!!isVisiblePassword);
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Campo obrigatório")
      .email("Digite um e-mail válido"),
    password: Yup.string().required("Campo obrigatório"),
  });

  return (
    <div className="h-screen flex justify-center">
      <Toaster />
      <div className="flex flex-1 flex-col justify-center items-center">
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          validationSchema={schema}
          onSubmit={async (values) => {
            try {
              await signUp({
                name: values.name,
                email: values.email,
                password: values.password,
              });
            } catch (err) {
              alert(`Falha ao criar conta! O endereço de e-mail já existe`);
              return;
            }
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form
              className="flex flex-col max-w-xs w-full relative"
              onSubmit={handleSubmit}
            >
              <button
                className="absolute -top-20 left-0"
                type="button"
                onClick={() => navigate("/")}
              >
                <img src={backBtn} alt="Voltar" />
              </button>
              <div className="flex flex-col gap-10 mb-8">
                <h2 className="text-3xl font-bold">Cadastrar</h2>
                <div className="flex flex-col">
                  <div className="input-block">
                    <input
                      id="name"
                      type="text"
                      placeholder="Nome"
                      className="
                      h-14 border
                    border-zinc-200 
                      rounded-t-md 
                      px-6 py-6 outline-none
                      w-full
                      input-custom"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-block">
                    <input
                      id="email"
                      type="email"
                      placeholder="E-mail"
                      className="
                      h-14 border
                    border-zinc-200 
                      px-6 py-6 outline-none
                      w-full
                      input-custom"
                      value={values.email}
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                    >
                      <FontAwesomeIcon
                        icon={isVisiblePassword ? faEyeSlash : faEye}
                        fontSize={16}
                        color="#8257E5"
                      />
                    </button>
                  </div>
                </div>

                <button
                  className="w-full bg-green-500 h-14 rounded-lg text-white flex items-center justify-center hover:bg-opacity-80 transition-all duration-200 text-xl"
                  type="submit"
                >
                  Concluir cadastro
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
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
    </div>
  );
};
