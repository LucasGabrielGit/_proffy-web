import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import backBtn from "../../resources/back-button.svg";
import proffy from "../../resources/logo-proffy.svg";
import rocket from "../../resources/rocket.svg";
import warningIcon from "../../resources/warning.svg";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const RegisterClass = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-screen overflow-auto"
      style={{ background: "#f0f0f7" }}
    >
      <div className="flex relative h-80" style={{ background: "#8257E5" }}>
        <header
          className="flex justify-between items-center px-28 py-4 absolute top-0 left-0 w-full"
          style={{ background: "#774DD6" }}
        >
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={backBtn} alt="Voltar" className="brightness-150" />
          </button>
          <span className="leading-4 text-base font-medium text-white">
            Dar aulas
          </span>
          <img src={proffy} alt="Logo proffy" />
        </header>

        <div className="flex mt-20 flex-col w-full px-48 gap-2">
          <div className="flex flex-col break-words w-80">
            <h1 className="text-white text-3xl font-medium">
              Que incrível que você quer dar aulas.
            </h1>
          </div>
          <div className="flex justify-between">
            <p className="text-white font-light flex-1 text-xl">
              O primeiro passo, é preencher esse <br /> formulário de inscrição.
            </p>

            <div className="flex w-80 justify-end items-center gap-4">
              <img src={rocket} alt="Rocket icon" />
              <p className="text-white w-2/5 font-light">
                Preparare-se! <br /> vai ser o máximo
              </p>
            </div>
          </div>

          <form>
            <div className="bg-white w-full px-16 py-12 mt-14 rounded-md -top-6 relative">
              <h1 className="mb-2 text-2xl font-medium">Seus dados</h1>
              <div className="w-full border-zinc-200 border" />
              <div className="flex  justify-between items-center mt-2">
                <div className="flex gap-6 items-center justify-between">
                  <img
                    src={`https://source.unsplash.com/featured/300x201`}
                    alt="Profile"
                    className="rounded-full w-20 object-cover h-20"
                  />
                  <span className="font-medium">Nome Professor</span>
                </div>
                <div>
                  <label htmlFor="txtWhatsapp" className="">
                    WhatsApp
                  </label>
                  <input
                    id="txtWhatsapp"
                    type="text"
                    placeholder="(  ) _ ____ ____"
                    className="
                    h-14 border
                    border-zinc-200 
                    rounded-md 
                    px-6 py-4 outline-none
                    w-full
                    mt-2"
                  />
                </div>
              </div>
              <div className="my-7">
                <label htmlFor="txtBio">
                  Biografia <small>(Máximo 300 caracteres)</small>
                </label>
                <textarea
                  id="txtBio"
                  rows={6}
                  className="
                  w-full border
                border-zinc-200
                  rounded-md pl-2 
                  text-sm outline-none mt-2 py-1"
                />
              </div>
              <h1 className="mb-2 text-2xl font-medium">Sobre a aula</h1>
              <div className="w-full border-zinc-200 border" />
              <div className="flex justify-between items-center mt-2 gap-8">
                <div className="flex flex-col flex-auto fle-1">
                  <label htmlFor="cbxSubjects">Matéria</label>
                  <select
                    name="subjects"
                    id="cbxSubjects"
                    className="
                    w-full px-6 py-4 border 
                  border-zinc-200 outline-none
                    rounded-md"
                  >
                    <option label="Selecione qual você vai ensinar" selected />
                    <option label="Teste 1" />
                    <option label="Teste 2" />
                    <option label="Teste 4" />
                    <option label="Teste 3" />
                    <option label="Teste 5" />
                  </select>
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="txtCost">Custo da aula por hora</label>
                  <input
                    id="txtCost"
                    type="text"
                    placeholder="R$"
                    className="
                    h-14 border
                    border-zinc-200 
                    rounded-md 
                    px-6 py-4 outline-none
                    w-full"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between  mt-7">
                <h1 className="mb-2 text-2xl font-medium">
                  Horários disponíveis
                </h1>
                <a
                  href="http#"
                  className="flex items-center gap-4"
                  style={{ color: "#8257E5" }}
                >
                  <FontAwesomeIcon icon={faPlus} color="#8257e5" />
                  Novo horário
                </a>
              </div>
              <div className="w-full border-zinc-200 border" />
              <div className="flex justify-between items-center mt-2 gap-8">
                <div className="flex flex-col flex-auto">
                  <label htmlFor="cbxSubjects">Dia da semana</label>
                  <select
                    name="subjects"
                    id="cbxSubjects"
                    className="
                    w-full px-6 py-4 border 
                  border-zinc-200 outline-none
                    rounded-md"
                  >
                    <option label="Selecione o dia" selected />
                    <option label="Dia 1" />
                    <option label="Dia 2" />
                    <option label="Dia 4" />
                    <option label="Dia 3" />
                    <option label="Dia 5" />
                  </select>
                </div>
                <div className="flex flex-col w-48">
                  <label htmlFor="from">Das</label>
                  <input
                    id="from"
                    type="text"
                    className="
                    h-14 border
                    border-zinc-200 
                    rounded-md 
                    px-6 py-4 outline-none
                    w-full"
                  />
                </div>
                <div className="flex flex-col w-48">
                  <label htmlFor="to">Até</label>
                  <input
                    id="to"
                    type="text"
                    className="
                    h-14 border
                    border-zinc-200 
                    rounded-md 
                    px-6 py-4 outline-none
                    w-full"
                  />
                </div>
              </div>
              <div className="w-full border-zinc-200 border my-12" />
              <footer className="flex justify-between items-center">
                <div className="flex gap-4 w-auto flex-1">
                  <img src={warningIcon} alt="Importante" />
                  Importante!
                  <br />
                  Preencha todos os dados corretamente
                </div>
                <button
                  type="submit"
                  className="w-56 py-4 px-10 bg-green-500 h-14 rounded-lg text-white 
                  flex items-center justify-center hover:bg-opacity-80 transition-all duration-200 text-xl"
                >
                  Salvar cadastro
                </button>
              </footer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
