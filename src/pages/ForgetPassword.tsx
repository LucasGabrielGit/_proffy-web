import bg from "../resources/bg.svg";

export const ForgetPassword = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-1 flex-col justify-center items-center">
        <form className="flex flex-col max-w-xs w-full">
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-3xl font-bold">Eita, esqueceu sua senha?</h2>
            <p>Não esquenta, vamos dar um jeito nisso.</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="input-block">
              <input
                type="text"
                placeholder="E-mail"
                className="
                h-14 border
                border-zinc-200 
                rounded-md
                px-6 py-6 outline-none
                w-full
                input-custom"
              />
            </div>
            <button className="w-full bg-green-500 h-14 rounded-lg text-white flex items-center justify-center hover:bg-opacity-80 transition-all duration-200 text-xl disabled:bg-zinc-400">
              Enviar
            </button>
          </div>
        </form>
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
