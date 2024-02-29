import React from "react";

interface ProjetosProps {
  // TODO: Add prop definitions
}

export const Projetos: React.FC<ProjetosProps> = () => {
  const items = [
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-4.jpg",
      title: "Agencia web site",
      date: "11/12/2023",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-4.jpg",
      title: "Agencia web site",
      date: "11/12/2023",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-4.jpg",
      title: "Agencia web site",
      date: "11/12/2023",
    },
    {
      imgSrc: "https://flowbite.com/docs/images/blog/image-4.jpg",
      title: "Agencia web site",
      date: "11/12/2023",
    },
  ];

  return (
    <section
      className="flex justify-center items-center text-white  bg-[#F0941F] drakar"
      id="projetos"
    >
      <div className="container flex flex-col justify-around items-center ">
        <div
          className="w-auto flex flex-col justify-between items-center mb-20 md:flex-row"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="max-w-lg md:mb-0">
            <h2 className="font-bold text-4xl mb-5 md:text-5xl ">
              ALGUNS DE NOSSOS TRABALHOS{" "}
              <span className="text-black">CRIATIVOS</span>
            </h2>
          </div>

          <div className="max-w-lg md:text-end ">
            <p className="font-medium md:text-xl ">
              Explore abaixo alguns dos projetos recentes em que nossa equipe de
              desenvolvimento trabalhou com criatividade e habilidade técnica:
            </p>
          </div>
        </div>

        <div className="w-auto flex justify-center">
          <div className="grid grid-cols-1 gap-x-32 gap-y-20 lg:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col"
                data-aos="zoom-in"
              >
                <div className="mb-5">
                  <img
                    className="bg-cover bg-center w-[300px] h-[300px] lg:w-[455px] lg:h-[455px] "
                    src={item.imgSrc}
                    alt="banner site"
                  />
                </div>
                <div className="flex flex-row justify-between mb-5">
                  <div>
                    <h3 className="font-bold text-2xl">{item.title}</h3>
                  </div>
                  <div>
                    <p className="text-balance">{item.date}</p>
                  </div>
                </div>
                <div>
                  <a className="underline decoration-2" href="">
                    Visite O Site {">"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
