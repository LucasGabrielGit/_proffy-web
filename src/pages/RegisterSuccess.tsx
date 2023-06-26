import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../resources/bg-concluido.svg";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

export const RegisterSuccess = () => {
  return (
    <div
      className="
      flex flex-col
      justify-center
      items-center relative
      h-screen gap-16"
      style={{ background: "#8257E5" }}
    >
      <img
        src={bg}
        alt="Background Sucesso"
        className="absolute max-w-5xl -z-0"
      />
      <FontAwesomeIcon icon={faSquareCheck} color="#04D361" fontSize={96} />
      <div className="flex flex-col justify-center items-center gap-6 z-50">
        <h1 className="text-6xl font-medium text-white">Cadastro concluído</h1>
        <span
          className="text-base break-words w-8/12 text-center"
          style={{ color: "#D4C2FF" }}
        >
          Agora você faz parte da plataforma da Proffy. Tenha uma ótima
          experiência.{" "}
        </span>
      </div>
      <form className="z-50">
        <button className="bg-green-500 py-4 px-10 flex items-center justify-center outline-none text-white rounded-md">
          Fazer login
        </button>
      </form>
    </div>
  );
};
