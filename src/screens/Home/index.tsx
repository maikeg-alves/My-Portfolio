import React from "react";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="relative" id="/">
      <div
        className=" flex flex-row justify-around h-screen items-center text-[#0f0f0f]
       dark:text-white py-20 m-auto max-w-[1200px] relative  px-5 xl:px-0
       "
      >
        <div
          className="w-auto  lg:w-1/2 "
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <div className="max-w-md">
            <h1 className="text-start font-bold text-4xl mb-5 lg:text-6xl md:text-6xl">
              <span className=" break-all block lg:hidden">TRANSFORMANDO</span>
              <span className="hidden lg:block">TRANSFORMANDO</span>
              DESAFIOS EM SOLUÇÕES DIGITAIS INOVADORAS.
            </h1>
          </div>
          <p className="max-w-sm text-start text-xs font-medium mb-10 opacity-95">
            Implementando soluções de ponta a ponta, com atendimento humanizado
            e comprometimento com o sucesso do seu projeto.
          </p>
          <div className="max-w-lg ">
            <div className="flex flex-wrap text-start text-sm font-bold">
              {[
                "DESENVOLVIMENTO WEB",
                "UX/UI DESIGN",
                "CLOUD COMPOUNG",
                "WEB DESIGN",
                "PERFORMANCE",
                "QA (QUALITY ASSURANCE)",
              ].map((item, index) => (
                <>
                  <div key={index} className="  ">
                    <span className="break-all mb-2">{item}</span>
                    {index !== 5 && <span className="break-all mx-1">-</span>}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div
          className=" my-2 w-auto justify-end hidden lg:flex"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <div className="max-w-[355px] relative">
            <img
              id={"photo-dev"}
              src="https://flowbite.com/docs/images/blog/image-4.jpg"
              className="w-[300px] h-[400px]  rounded-lg float-animation"
              alt="avatar foto"
            />
          </div>
        </div>
      </div>

      <div
        id="divisão"
        className="absolute h-[10vh] w-full left-0 bottom-0 bg-gradient-to-t from-white dark:from-[#0f0f0f]"
      ></div>
    </div>
  );
};
