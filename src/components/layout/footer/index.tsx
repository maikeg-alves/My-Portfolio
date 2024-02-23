import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

interface FooterProps {
  // TODO: Add prop definitions
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <section className="bg-[#1E1D1D] py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="container flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col max-w-md w-full text-white">
            <h1 className="text-3xl font-bold mb-4 lg:text-4xl">
              FALE CONOSCO
            </h1>
            <p className="text-sm  mb-6 opacity-75 lg:text-lg">
              Receba nossas últimas atualizações diretamente em sua caixa de
              entrada. Insira seu e-mail abaixo:
            </p>
            <div className="flex items-center w-full max-w-xs bg-white rounded-lg overflow-hidden">
              <input
                type="text"
                className="py-2 px-4 w-full outline-none"
                placeholder="Seu e-mail"
              />
              <button className="bg-gray-800 text-white px-4">Enviar</button>
            </div>
          </div>
          <div className="flex flex-row sm:flex-row justify-between max-w-md w-full mt-6 sm:mt-0 text-white ">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold mb-4">Links Úteis</h2>
              <ul className="cursor-pointer font-medium">
                <li className="mb-2 opacity-70 hover:opacity-100">Inicio</li>
                <li className="mb-2 opacity-70 hover:opacity-100">Serviços</li>
                <li className="mb-2 opacity-70 hover:opacity-100">Processos</li>
                <li className="mb-2 opacity-70 hover:opacity-100">Processos</li>
                <li className="mb-2 opacity-70 hover:opacity-100">Contato</li>
                <li className="mb-2 opacity-70 hover:opacity-100">Sobre</li>
                <li className="mb-2 opacity-70 hover:opacity-100">
                  Profissional
                </li>
              </ul>
            </div>
            <div className="flex flex-col ">
              <h2 className="text-lg font-bold mb-4">Redes Sociais</h2>
              <ul className="cursor-pointer font-medium">
                <li className="mb-2 opacity-70 hover:opacity-100">Instagram</li>
                <li className="mb-2 opacity-70 hover:opacity-100 ">Facebook</li>
                <li className="mb-2 opacity-70 hover:opacity-100 ">Github</li>
                <li className="mb-2 opacity-70 hover:opacity-100 ">Linkedin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col justify-between w-full inset-x-0 bottom-0 bg-[#292727] text-white p-4 text-center lg:flex-row">
        <div className="flex justify-center lg:items-center">
          <p className="mr-2">Siga-nos nas redes:</p>
          <ul className="flex flex-row">
            <li className="mr-2">
              <Facebook />
            </li>
            <li className="mr-2">
              <Twitter />
            </li>
            <li className="mr-2">
              <Instagram />
            </li>
            {/*  <li>
              <LinkedIn />
            </li> */}
          </ul>
        </div>
        <p>&copy; 2024 Maicon Gabriel Alves. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};
