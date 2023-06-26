import backBtn from "../../resources/back-button.svg";
import proffy from "../../resources/logo-proffy.svg";
import smile from "../../resources/smile.svg";
import { useNavigate } from "react-router-dom";

import profile from "../../resources/profile.jpg";
import whatsapp from "../../resources/whatsapp.svg";

export const TeacherList = () => {
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
            Estudar
          </span>
          <img src={proffy} alt="Logo proffy" />
        </header>

        <div className="flex mt-36 flex-col w-full px-48 gap-2">
          <div className="flex items-center justify-between break-words w-full">
            <h1 className="text-white text-3xl font-medium">
              Estes são os <br />
              professores disponíveis.
            </h1>
            <div className="flex w-80 justify-end items-center gap-4">
              <img src={smile} alt="Rocket icon" />
              <p className="text-white w-2/5 font-light">
                Nós temos 32 professores.
              </p>
            </div>
          </div>
          <form>
            <div className="flex w-full items-center justify-between gap-4 mt-9">
              <div className="flex flex-col flex-1 gap-2">
                <label htmlFor="cbxSubjects" className="text-white">
                  Matéria
                </label>
                <select
                  name="subjects"
                  id="cbxSubjects"
                  className="
                w-full px-6 py-4 border 
              border-zinc-200 outline-none
                rounded-md"
                  style={{ background: "#fff", color: "#C1BCCC" }}
                >
                  <option label="Selecione" selected />
                  <option label="Teste 1" />
                  <option label="Teste 2" />
                  <option label="Teste 4" />
                  <option label="Teste 3" />
                  <option label="Teste 5" />
                </select>
              </div>

              <div className="flex flex-col flex-1 gap-2">
                <label htmlFor="cbxSubjects" className="text-white">
                  Dia da semana
                </label>
                <select
                  name="subjects"
                  id="cbxSubjects"
                  className="
                w-full px-6 py-4 border 
              border-zinc-200 outline-none
                rounded-md"
                  style={{ background: "#fff", color: "#C1BCCC" }}
                >
                  <option label="Selecione" selected />
                  <option label="Dia 1" />
                  <option label="Dia 2" />
                  <option label="Dia 4" />
                  <option label="Dia 3" />
                  <option label="Dia 5" />
                </select>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label htmlFor="cbxSubjects" className="text-white">
                  Horário
                </label>
                <select
                  name="subjects"
                  id="cbxSubjects"
                  className="
                w-full px-6 py-4 border 
              border-zinc-200 outline-none
                rounded-md"
                  style={{ background: "#fff", color: "#C1BCCC" }}
                >
                  <option label="Selecione" selected />
                  <option label="Horário 1" />
                  <option label="Horário 2" />
                  <option label="Horário 4" />
                  <option label="Horário 3" />
                  <option label="Horário 5" />
                </select>
              </div>
            </div>
            <div className="flex flex-col my-10">
              <div className="flex flex-col px-8 py-8 rounded-t-md  bg-white">
                <div className="flex flex-row justify-start items-center gap-6">
                  <img
                    src={profile}
                    alt="Profile"
                    style={{ borderRadius: "100%", width: 64, height: 64 }}
                    width={64}
                    height={128}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-xl">Lucas Gabriel</span>
                    <p style={{ color: "#6A6180" }}>Química</p>
                  </div>
                </div>
                <span className="leading-6 my-6 break-words w-9/12 text-justify">
                  Entusiasta das melhores tecnologias de química avançada.
                  Apaixonado por explodir coisas em laboratório e por mudar a
                  vida das pessoas através de experiências. Mais de 200.000
                  pessoas já passaram por uma das minhas explosões.
                </span>
                <div className="flex justify-between items center gap-4">
                  <div
                    className="flex flex-col px-4 py-4 rounded-md w-full"
                    style={{ background: "#E6E6F0" }}
                  >
                    <label>Dia</label>
                    <span className="font-medium">Segunda</span>

                    <div className="w-full border-gray-300 border my-2" />
                    <label>Horário</label>
                    <span className="font-medium">08 - 18h</span>
                  </div>
                  <div
                    className="flex flex-col px-4 py-4 rounded-md w-full"
                    style={{ background: "#E6E6F0" }}
                  >
                    <label>Dia</label>
                    <span className="font-medium">Terça</span>

                    <div className="w-full border-gray-300 border my-2" />
                    <label>Horário</label>
                    <span className="font-medium">08 - 18h</span>
                  </div>
                  <div
                    className="flex flex-col px-4 py-4 rounded-md w-full"
                    style={{ background: "#E6E6F0" }}
                  >
                    <label>Dia</label>
                    <span className="font-medium">Quarta</span>

                    <div className="w-full border-gray-300 border my-2" />
                    <label>Horário</label>
                    <span className="font-medium">08 - 18h</span>
                  </div>
                  <div
                    className="flex flex-col px-4 py-4 rounded-md w-full"
                    style={{ background: "#E6E6F0" }}
                  >
                    <label>Dia</label>
                    <span className="font-medium">Quinta</span>

                    <div className="w-full border-gray-300 border my-2" />
                    <label>Horário</label>
                    <span className="font-medium">08 - 18h</span>
                  </div>
                  <div
                    className="flex flex-col px-4 py-4 rounded-md w-full"
                    style={{ background: "#E6E6F0" }}
                  >
                    <label>Dia</label>
                    <span className="font-medium">Sexta</span>
                    <div className="w-full border-gray-300 border my-2" />
                    <label>Horário</label>
                    <span className="font-medium">08 - 18h</span>
                  </div>
                </div>
              </div>
              <div className="w-full border-gray-200 border" />
              <div
                className="
                flex justify-between
                items-center py-8 
                px-8 rounded-b-md 
                w-full"
                style={{ background: "#fafafc" }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Preço/hora</span>
                  <b style={{ color: "#8257e5" }} className="text-xl">
                    R$ 20,00
                  </b>
                </div>
                <a
                  className="py-4 px-10 bg-green-500 h-14 rounded-md text-white 
                  flex items-center justify-center gap-4 hover:bg-opacity-80 transition-all duration-200 text-xl cursor-pointer"
                  href={`https://wa.me//5599981555572?text=Olá,%20gostaria%20de%20agendar%20um%20horário`}
                  target="_blank"
                >
                  <img
                    src={whatsapp}
                    alt="Whatsapp"
                    style={{ width: 20, height: 20 }}
                  />
                  Entrar em contato
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
