import React from "react";

interface ProfessionalProps {
  // TODO: Add prop definitions
}

export const Professional: React.FC<ProfessionalProps> = () => {
  return (
    <section
      className="bg-[#90A19D] flex justify-center items-center"
      id="drakar"
    >
      <div className="container  text-white flex flex-col-reverse justify-center items-center md:flex-row">
        <div className=" w-full flex flex-row justify-start lg:flex-col">
          <div className="max-w-md">
            <div className="w-full mb-5">
              <div className="mb-3 md:mb-5">
                <h1 className="font-bold mb-3 text-4xl md:text-5xl">
                  CONHEÇA O PROFISSIONAL
                </h1>
                <p className="font-medium text-sm text-gray-300 ">
                  Desenvolvedor Web Especializado em Transformar Ideias em
                  Realidade Digital
                </p>
              </div>
              <div className="max-w-sm">
                <p className="font-medium text-sm">
                  Como desenvolvedor web, estou comprometido em trazer suas
                  ideias para o mundo digital. Com uma paixão pela criação e
                  aprimoramento de experiências online, venho trabalhando com
                  uma variedade de clientes para desenvolver sites
                  institucionais, corporativos e comerciais. Utilizo uma ampla
                  gama de tecnologias, incluindo HTML, CSS, JavaScript, PHP e
                  React Native, para construir soluções personalizadas e
                  eficazes. Além da experiência prática, estou constantemente
                  atualizando meus conhecimentos, buscando sempre aprender e
                  melhorar.
                </p>
              </div>
            </div>

            <div>
              <h1 className="font-bold mb-1  text-3xl md:text-4xl">SKILLS</h1>
              <div className="w-full">
                <ul className="grid grid-cols-2">
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 w-full flex justify-end md:mb-10">
          <div className="w-full relative lg:max-w-[355px]">
            <img
              src="https://flowbite.com/docs/images/blog/image-4.jpg"
              className="bg-cover bg-center h-[170px] w-full rounded-lg md:w-[355px] md:h-[543px] "
              alt="avatar foto"
            />

            <div className="bg-black opacity-50 h-[20px] filter blur hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
