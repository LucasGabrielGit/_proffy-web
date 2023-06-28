import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faBookOpenReader,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import profile from "../resources/profile.jpg";
import illustra from "../resources/Ilustra.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Home = () => {
  const { signOut, user } = useAuth();

  const [connections, setConnections] = useState(0);
  const navigate = useNavigate();

  console.log(user)

  const handleLogout = useCallback<MouseEventHandler<HTMLButtonElement>>(
    async (e) => {
      e.preventDefault();

      try {
        signOut();

        navigate("/");
      } catch (err) {
        alert(`Error: ${err}`);
      }
    },
    []
  );

  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex flex-col flex-1 w-full px-40 py-6"
        style={{ background: "#8257E5" }}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-row justify-start items-center gap-6">
            <img
              src={profile}
              alt="Profile"
              style={{ borderRadius: "100%", width: 48, height: 48 }}
              width={64}
              height={128}
              className="rounded-full object-cover"
            />
            <span className="font-semibold text-white">{user?.name}</span>
          </div>
          <button
            className="w-auto p-2 rounded-md hover:brightness-150 duration-200"
            style={{ background: "#774DD6" }}
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faPowerOff} width={24} color="white" />
          </button>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col flex-1">
            <div className="flex flex-col gap-2 mt-28">
              <h1 className="text-8xl font-extrabold text-gray-100">Proffy</h1>
              <p className="text-gray-100 font-medium text-2xl  w-52">
                Sua plataforma de estudos online
              </p>
            </div>
          </div>
          <img
            src={illustra}
            alt="Imagem representativa"
            width={460}
            height={460}
          />
        </div>
      </div>
      <div className="flex flex-row px-40 py-6 h-1/3 gap-8 items-center">
        <div className="flex mt-4 justify-between w-full">
          <div className="w-full">
            <span>Seja bem-vindo(a).</span>
            <p>O que deseja fazer?</p>
          </div>
          <small className="text-center">
            Total de {connections} conexões já realizadas 💜
          </small>
        </div>
        <div className="flex mt-4 w-full ">
          <div className="flex w-full gap-4">
            <button
              className="flex items-center justify-center gap-6 p-3 w-full h-20 rounded-lg text-white text-xl hover:opacity-80 duration-200"
              style={{ background: "#8257E5" }}
            >
              <FontAwesomeIcon icon={faBookOpenReader} width={28} />
              Estudar
            </button>
            <button
              className="w-full h-20 bg-green-600 flex rounded-lg items-center justify-center gap-6 p-3 text-white text-xl hover:opacity-80 duration-200"
              onClick={() => {
                navigate("/register-class");
              }}
            >
              <FontAwesomeIcon icon={faGraduationCap} width={28} />
              Dar aulas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
