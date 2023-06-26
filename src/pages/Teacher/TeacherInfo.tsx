import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import backBtn from "../../resources/back-button.svg";
import proffy from "../../resources/logo-proffy.svg";
import profile from "../../resources/profile.jpg";
import { useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const TeacherInfo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen overflow-auto"
      style={{ background: "#f0f0f7" }}
    >
      <div className="flex relative h-4/5" style={{ background: "#8257E5" }}>
        <header
          className="flex justify-between items-center px-28 py-4 
          absolute top-0 left-0 w-full"
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
            Meu perfil
          </span>
          <img src={proffy} alt="Logo proffy" />
        </header>

        <div
          className="
          flex mt-28 flex-col 
          w-full px-48 gap-2 
          bg-[url('resources/bg-dados.svg')] bg-no-repeat"
        >
          <div className="flex flex-col items-center justify-center w-full gap-2 z-10">
            <img
              src={profile}
              alt="Profile"
              className="rounded-full w-44 h-44 object-cover"
            />
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-3xl font-medium text-white">Lucas Gabriel</h2>
              <span className="text-xl text-white font-light">Química</span>
            </div>
          </div>

          <form>
            <div className="bg-white w-full px-16 py-12 mt-14 rounded-md -top-6 relative">
              <h1 className="mb-2 text-2xl font-medium">Seus dados</h1>
              <div className="w-full border-zinc-200 border mt-4 mb-6" />

              <div className="flex flex-col">
                <div className="flex flex-row gap-8">
                  <div className="flex flex-col w-full">
                    <label htmlFor="txtName">Nome</label>
                    <input
                      id="txtName"
                      type="text"
                      className="
                    h-14 border
                    border-zinc-200 
                    rounded-md 
                    px-6 py-4 outline-none
                    w-full
                    mt-2"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="txtSurname">Sobrenome</label>
                    <input
                      id="txtSurname"
                      type="text"
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
                <div className="flex flex-row gap-8 my-6">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="txtEmail">E-mail</label>
                    <input
                      id="txtEmail"
                      type="text"
                      className="
                      h-14 border
                      border-zinc-200 
                      rounded-md 
                      px-6 py-4 outline-none
                      w-full
                      mt-2"
                    />
                  </div>
                  <div className="flex flex-col w-auto">
                    <label htmlFor="txtWhatsapp">Whatsapp</label>
                    <input
                      id="txtWhatsapp"
                      type="text"
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
                <div className="flex flex-col ">
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
              </div>
              <h1 className="mb-2 text-2xl font-medium mt-4">Sobre a aula</h1>
              <div className="w-full border-zinc-200 border mb-6" />
              <div className="flex justify-between items-center gap-8">
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
              <div className="w-full border-zinc-200 border mb-6" />
              <div className="flex flex-col mt-2">
                <div className="flex justify-between items-center gap-8">
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
                <button className="text-red-500 w-full mt-4 custom-button">
                  Excluir horário
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
