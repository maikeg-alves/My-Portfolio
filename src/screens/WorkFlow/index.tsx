import React from "react";
import { HelpCircle } from "lucide-react";
interface WorkFlowProps {
  // TODO: Add prop definitions
}

export const WorkFlow: React.FC<WorkFlowProps> = () => {
  const [selectedItem, setSelectedItem] = React.useState<number>(0);

  const item = [
    {
      title: "Planejamento e Consulta",
      description:
        "Reunião inicial para entender os objetivos e requisitos do website. Definição de escopo, prazos e orçamento do projeto.",
      detalhe:
        "O planejamento e consulta envolvem uma reunião inicial com o cliente para entender completamente os objetivos e requisitos do projeto. Durante essa fase, também é feita a definição do escopo do projeto, incluindo prazos e orçamento. Este processo é fundamental para estabelecer uma base sólida e garantir que todas as partes envolvidas tenham uma compreensão clara do que será realizado.",
    },
    {
      title: "Design e Prototipagem",
      description:
        "Criação de wireframes e design visual para estruturar o layout e aparência do website. Ajustes com base no feedback do cliente para garantir a satisfação.",
      detalhe:
        "Nesta etapa, focamos na criação dos wireframes e do design visual do website. Isso inclui a definição da estrutura e aparência do site. Ajustes são feitos com base no feedback do cliente para garantir que suas expectativas sejam atendidas. É essencial dedicar tempo suficiente para esta fase, pois ela estabelece a base para o desenvolvimento subsequente, garantindo que o produto final atenda aos requisitos e expectativas do cliente.",
    },
    {
      title: "Desenvolvimento",
      description:
        "Codificação do website com HTML, CSS, JavaScript e possíveis integrações de back-end. Responsividade para compatibilidade com diferentes dispositivos.",
      detalhe:
        "Durante o desenvolvimento, o website é codificado utilizando tecnologias como HTML, CSS e JavaScript. Também pode haver integrações com sistemas de back-end, se necessário. Além disso, garantimos que o site seja responsivo, ou seja, que funcione corretamente em diferentes dispositivos e tamanhos de tela.",
    },
    {
      title: "Testes e Revisões",
      description:
        "Testes de funcionalidade e compatibilidade para garantir um desempenho correto. Revisões finais com o cliente para ajustes necessários.",
      detalhe:
        "Nesta fase, realizamos testes rigorosos para garantir que o website funcione corretamente e seja compatível com diferentes navegadores e dispositivos. Também realizamos revisões finais com o cliente para fazer ajustes conforme necessário.",
    },
    {
      title: "Lançamento e Suporte",
      description:
        "Preparação e implantação do website para o lançamento. Oferta de suporte contínuo e manutenção para garantir o bom funcionamento.",
      detalhe:
        "Finalmente, preparamos o website para o lançamento, garantindo que tudo esteja pronto para ir ao ar. Além disso, oferecemos suporte contínuo e manutenção para garantir que o website continue funcionando sem problemas após o lançamento.",
    },
  ];

  return (
    <section
      className="bg-[#586864] text-white flex  justify-center items-center drakar"
      id="Processo"
    >
      <div className="container flex flex-col justify-center items-center">
        <div
          className="w-full flex flex-col-reverse justify-around items-center mb-16 md:flex-row"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="max-w-md">
            <p className="font-medium  md:text-xl">
              Ao trabalhar em seu projeto, seguimos um fluxo de trabalho
              meticuloso e organizado para garantir que suas necessidades sejam
              atendidas e que o resultado final seja de alta qualidade. Aqui
              está uma visão geral do nosso processo:
            </p>
          </div>
          <div className="max-w-md text-start md:text-end">
            <h2 className="font-bold text-3xl md:text-5xl">
              Nosso Processo de Trabalho
            </h2>
          </div>
        </div>
        <div className="w-full flex flex-col justify-around border-2 p-3 rounded-3xl border-[#ffffff50] leading-7 lg:flex-row ">
          <ul className="w-full grid grid-cols-1 gap-3 mb-10 border-none border-r-2 border-[#ffffff6b] :mb-0  lg:border-dotted lg:mb-0 ">
            {item.map((step, index) => (
              <li
                key={index}
                className="flex items-center cursor-pointer"
                onClick={() => setSelectedItem(index)}
                data-aos="zoom-in"
              >
                <span
                  className={`flex items-center justify-center m-2 h-[60px] w-[60px] rounded-full md:m-3 md:w-[60px] ${
                    selectedItem === index
                      ? "bg-[#f0941e]"
                      : "border-2 border-white opacity-70"
                  } `}
                >
                  <HelpCircle size={31} className="m-4" />
                </span>
                <div className="flex flex-col max-w-sm">
                  <h4
                    className={`font-bold text-sm md:text-lg ${
                      selectedItem === index ? "" : "opacity-75"
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p
                    className={`text-[10px] leading-4 max-w-80 md:text-sm ${
                      selectedItem === index ? "opacity-90" : "opacity-70"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className=" md:mx-4 lg:max-w-lg">
            {item
              .filter((_step, index) => index === selectedItem)
              .map((step, index) => (
                <>
                  <div
                    key={index}
                    className="flex justify-between items-center mb-5"
                  >
                    <div className="max-w-sm">
                      <h1 className="font-bold text-3xl md:text-6xl">
                        <span className="break-all">{step.title}</span>
                      </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                      <span className="font-bold text-xl opacity-75">
                        PASSO
                      </span>
                      <h1 className="font-bold text-center text-6xl">
                        {`0${selectedItem + 1}`}
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div className="flex flex-col ">
                      <p className="font-medium text-sm mt-2 md:text-md">
                        {step.detalhe}
                      </p>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
