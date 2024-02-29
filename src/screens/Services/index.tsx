import React from "react";

interface ServicesProps {
  // TODO: Add prop definitions
}

export const Services: React.FC<ServicesProps> = () => {
  const [selectedItem, setSelectedItem] = React.useState<number | null>(null);

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
    <section
      className="flex flex-col justify-center items-center relative text-[#0f0f0f] dark:text-white"
      id={"Serviços"}
    >
      <div
        id="divisão"
        className="absolute h-[10vh] w-full top-0 bg-gradient-to-b from-white dark:from-[#0f0f0f]"
      ></div>
      <div className="container flex flex-col justify-around items-center">
        <div
          className="w-auto  flex flex-col-reverse justify-between items-center mb-10 md:flex-row "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="max-w-lg">
            <p className="font-medium md:text-xl">
              Transforme sua presença online com nossos serviços integrados.
              Oferecemos soluções completas para atender às necessidades
              específicas do seu negócio.
            </p>
          </div>
          <div className="max-w-lg md:text-end mb-5">
            <h1 className="font-bold text-3xl md:text-5xl">
              TRANSFORME SEU <span className="destaque">NEGÓCIO</span> COM
              NOSSAS SOLUÇÕES COMPLETAS
            </h1>
          </div>
        </div>
        <div className="w-auto flex justify-center">
          <div className="grid grid-cols-1 gap-10 text-[#00000077] dark:text-[#e9e9e977] md:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col opacity-100 cursor-pointer rounded-lg p-3 w-full py-10 shadow-md bg-[#fff8] ${
                  selectedItem === index ||
                  (selectedItem === null && index === 0)
                    ? "text-[#F0941F] border-2 border-dashed border-[#f0951fb7] selected-border"
                    : ""
                }  dark:bg-[#00000096]  lg:max-w-lg`}
                onClick={() => setSelectedItem(index)}
                data-aos={selectedItem !== null ? null : "zoom-in"}
              >
                <h2 className="font-bold text-xl mb-5 md:text-2xl">
                  {item.title}
                </h2>
                <p className="font-medium text-sm text-[#474747] dark:text-[#e9e9e977]">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
