import React from "react";

interface ServicesProps {
  // TODO: Add prop definitions
}

export const Services: React.FC<ServicesProps> = () => {
  const [selectedItem, setSelectedItem] = React.useState<number>(0);

  const items = [
    {
      title: "Desenvolvimento web",
      content:
        "Nosso time de desenvolvimento é especializado em criar soluções web sob medida que atendem às suas necessidades exclusivas.",
    },
    {
      title: "Design de Qualidade",
      content:
        "Contamos com uma equipe de designers talentosos que garantem que seu site tenha uma aparência profissional e atraente.",
    },
    {
      title: "Cloud Computing",
      content:
        "Oferecemos soluções em nuvem para garantir que sua infraestrutura digital seja escalável, segura e confiável.",
    },
    {
      title: "Teste de Qualidade (QA)",
      content:
        "Nossa equipe de QA garante que cada aspecto do seu projeto seja minuciosamente testado para garantir a mais alta qualidade.",
    },
    {
      title: "Web Design Responsivo",
      content:
        "Criamos sites com design responsivo para garantir uma experiência consistente e otimizada em todos os dispositivos.",
    },
    {
      title: "Performance Aprimorada",
      content:
        "Nosso foco em performance garante que seu site carregue rapidamente e ofereça uma experiência excepcional aos usuários.",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center relative text-[#0f0f0f] dark:text-white">
      <div
        id="divisão"
        className="absolute h-[10vh] w-full top-0 bg-gradient-to-b from-white dark:from-[#0f0f0f]"
      ></div>
      <div className="container flex flex-col justify-center items-center">
        <div className="w-full flex flex-col-reverse justify-between items-center mb-10 md:flex-row ">
          <div className="max-w-sm">
            <p className="font-medium md:text-xl">
              Transforme sua presença online com nossos serviços integrados.
              Oferecemos soluções completas para atender às necessidades
              específicas do seu negócio.
            </p>
          </div>
          <div className="max-w-sm md:text-end mb-5">
            <h1 className="font-bold text-3xl md:text-5xl">
              TRANSFORME SEU NEGÓCIO COM NOSSAS SOLUÇÕES COMPLETAS
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1  gap-10 text-black md:grid-cols-2 ">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col cursor-pointer p-3 w-full py-10 shadow-md bg-[#D9D9D9] ${
                  selectedItem === index ? "text-[#F0941F]" : ""
                }`}
                onClick={() => setSelectedItem(index)}
              >
                <h2 className="font-bold  mb-5 md:text-2xl">{item.title}</h2>
                <p className="font-medium text-sm ">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
