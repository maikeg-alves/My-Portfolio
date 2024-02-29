import React from "react";

interface ProfessionalProps {
  // TODO: Add prop definitions
}

export const Professional: React.FC<ProfessionalProps> = () => {
  return (
    <section
      className="bg-[#90A19D] flex rl justify-center items-center drakar"
      id="Proficional"
    >
      <div className="container  text-white flex flex-col-reverse justify-around items-center md:flex-row">
        <div
          className=" w-auto flex flex-row justify-start lg:flex-col"
          data-aos="zoom-out-right"
        >
          <div className="max-w-lg">
            <div className="w-full mb-5">
              <div className="mb-3  md:mb-5">
                <h1 className="font-bold mb-3  text-4xl md:text-5xl">
                  CONHEÇA O PROFISSIONAL
                </h1>
                <p className="font-medium max-w-sm text-sm text-gray-300 ">
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

        <div
          className="my-2 w-auto justify-end hidden lg:flex"
          data-aos="fade-left"
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
    </section>
  );
};
