import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../resources/bg-concluido.svg";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

export const ResetPasswordSuccess = () => {
  return (
    <div
      className="flex flex-col justify-center items-center relative h-screen gap-16"
      style={{ background: "#8257E5" }}
    >
      <img
        src={bg}
        alt="Background Sucesso"
        className="absolute max-w-5xl -z-0"
      />
      <FontAwesomeIcon icon={faSquareCheck} color="#04D361" fontSize={96} />
      <div className="flex flex-col justify-center items-center gap-6 z-50">
        <h1 className="text-6xl font-medium text-white">Redefinição enviada</h1>
        <span
          className="text-base break-words w-8/12 text-center"
          style={{ color: "#D4C2FF" }}
        >
          Boa, agora é só checar o e-mail que foi enviado para você redefinir
          sua senha e aproveitar os estudos.
        </span>
      </div>
      <form className="z-50">
        <button className="bg-green-500 py-4 px-10 flex items-center justify-center outline-none text-white rounded-md">
          Voltar ao login
        </button>
      </form>
    </div>
  );
};
