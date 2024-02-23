import React from "react";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div
        className="container flex flex-row h-screen items-center text-[#0f0f0f]
       dark:text-white  relative
       "
      >
        <div className="w-full lg:w-1/2 ">
          <div className="max-w-md">
            <h1 className="text-start font-bold text-3xl mb-5 lg:text-5xl md:text-6xl">
              <span className=" break-all block md:hidden lg:hidden">
                TRANSFORMANDO
              </span>
              <span className="hidden lg:block">TRANSFORMANDO</span>
              DESAFIOS EM SOLUÇÕES DIGITAIS INOVADORAS.
            </h1>
          </div>
          <p className="max-w-sm text-start text-sm font-medium mb-10 opacity-75">
            Implementando soluções de ponta a ponta, com atendimento humanizado
            e comprometimento com o sucesso do seu projeto.
          </p>
          <div className="max-w-xl ">
            <ul className="grid gap-2 list-none grid-cols-1 lg:grid-cols-3">
              <li className="text-start text-sm font-bold">
                DESENVOLVIMENTO WEB
              </li>
              <li className="text-start text-sm font-bold">UX/UI DESIGN</li>
              <li className="text-start text-sm font-bold">CLOUD COMPOUNG</li>
              <li className="text-start text-sm font-bold">WEB DESIGN</li>
              <li className="text-start text-sm font-bold">PERFORMANCE</li>
              <li className="text-start text-sm font-bold">
                QA (QUALITY ASSURANCE)
              </li>
            </ul>
          </div>
        </div>

        <div className=" my-2 w-full  justify-end hidden lg:flex">
          <div className="max-w-[355px] relative">
            <img
              src="https://flowbite.com/docs/images/blog/image-4.jpg"
              className="w-[355px] h-[543px] mb-10 rounded-lg "
              alt="avatar foto"
            />

            <div className="bg-black opacity-50 h-[20px] filter blur"></div>
          </div>
        </div>
        <div
          id="divisão"
          className="absolute h-[10vh] w-full left-0 bottom-0 bg-gradient-to-t from-white dark:from-[#0f0f0f]"
        ></div>
      </div>
    </>
  );
};
