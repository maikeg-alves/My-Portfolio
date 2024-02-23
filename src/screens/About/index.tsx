import React from "react";
import { Paintbrush, Rabbit, Cpu, HeartHandshake } from "lucide-react";
interface AboutProps {
  // TODO: Add prop definitions
}

export const About: React.FC<AboutProps> = () => {
  const items = [
    {
      backgroundColor: "bg-[#F0941F]",
      icon: <Paintbrush />,
      title: "Design Personalizado",
    },
    {
      backgroundColor: "bg-[#90A19D]",
      icon: <Rabbit />,
      title: "Entrega Rápida",
    },
    {
      backgroundColor: "bg-[#586864]",
      icon: <Cpu />,
      title: "Inovação Tecnológica",
    },
    {
      backgroundColor: "bg-[#1E1D1D]",
      icon: <HeartHandshake />,
      title: "Suporte 24/7",
    },
  ];

  return (
    <section className="flex w-full bg-white dark:bg-[#0f0f0f] " id={"drakar"}>
      <div className="container flex flex-col justify-center items-center text-[#0f0f0f] dark:text-white lg:flex-row">
        <div className="w-full mb-10 lg:mb-0">
          <div className="max-w-md">
            <h1 className="font-bold text-3xl lg:text-5xl mb-5">
              SOLUÇÕES DIGITAIS{" "}
              <span className=" break-all block md:hidden lg:hidden">
                PERSONALIZADAS
              </span>
              <span className="hidden lg:block">PERSONALIZADAS</span> PARA O SEU{" "}
              <span className="text-[#F0941F]">SUCESSO!</span>
            </h1>
          </div>
          <div className="w-full lg:max-w-sm">
            <p className="font-medium  text-sm lg:text-md">
              Moldando o amanhã digital. Desde 2023, temos nos dedicado a uma
              missão única: impulsionar os negócios em todo o Brasil para o
              mundo digital com sites que não apenas impressionam, mas também
              geram resultados. Especialistas em e-commerce, websites
              corporativos e landing pages que não só cativam, mas também
              convertem, somos a mente criativa por trás de soluções web que
              capturam a essência e os objetivos exclusivos de cada marca,
              empresa ou profissional. Aqui, cada projeto é mais do que uma
              simples entrega; é a realização da sua visão digital, esculpida
              com precisão técnica e um design inovador.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-end">
          <div className="grid grid-cols-2 items-center gap-10 text-white  ">
            {items.map((item, index) => (
              <div
                key={index}
                className={`${item.backgroundColor} rounded-lg p-3 shadow-lg h-[120px] sm:w-[200px] lg:h-[270px]`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>{item.icon}</div>
                  <div>
                    <p className="font-bold lg:text-2xl">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
