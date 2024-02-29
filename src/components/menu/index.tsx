import { useEffect, useState } from "react";
import { router } from "@/routers";
import React from "react";
import { Link } from "react-router-dom";
import { Menu as IconMenu } from "lucide-react";

interface MenuProps {
  // TODO: Add prop definitions
}

export const Menu: React.FC<MenuProps> = () => {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]"); // Seleciona todas as seções da página

      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect(); // Obtém as coordenadas da seção na tela

        if (
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.5
        ) {
          currentSection = section.id; // Define a seção atual como a que está visível na metade da tela
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(activeSection);

  return (
    <>
      <div className="w-full h-[11vh] flex justify-center text-white dark:text-black ">
        <nav className=" flex items-center justify-center w-full  ">
          <div className="flex items-center justify-between w-full p-1.5 py-3 m-4 bg-[#fafafa] dark:bg-[#202020] max-w-[1150px] shadow-md rounded-lg">
            {/* Avatar */}
            <div className="ml-4 hidden sm:block">
              <img
                className="w-10 h-10 rounded-full ring-2 ring-yellow-500 dark:ring-yellow-500"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Bordered avatar"
              />
            </div>

            {/* Menu de hamburguer - Visível em telas menores */}
            <div className="sm:hidden mr-4">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className=" font-bold text-xl bg-white dark:bg-[#202020] text-black dark:text-white"
              >
                <IconMenu />
              </button>
            </div>

            {/* Links do menu - Visível em telas maiores */}
            <ul className={`space-x-2 items-center hidden md:flex `}>
              {router.map((route, index) => (
                <li
                  className="p-3 md:p-1 cursor-pointer"
                  id={index.toString()}
                  key={index}
                >
                  <Link
                    to={route.path || "/"}
                    className="text-black dark:text-white text-lg sm:text-sm md:text-sm lg:text-lg xl:text-xl"
                    style={{
                      color: `${
                        route.path?.slice(1) === activeSection ? "red" : ""
                      }`,
                    }}
                  >
                    {route.path === "/"
                      ? "Home".charAt(0).toUpperCase() + "Home".slice(1)
                      : route.path
                      ? route.path?.slice(1).charAt(0).toUpperCase() +
                        route.path?.slice(2)
                      : null}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Botão */}
            <div className="mr-4 flex justify-center items-center">
              <button className="bg-[#202020] dark:bg-white">
                Fale Comigo
              </button>
            </div>
          </div>
        </nav>
      </div>

      {showMenu && (
        <div className="fixed inset-0 -z-50 bg-opacity-50 backdrop-blur backdrop-filter bg-gray-200 dark:bg-opacity-50 dark:bg-black dark:backdrop-filter dark:backdrop-blur-sm md:hidden">
          <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 text-center grid grid-cols-1 gap-5">
            {router.map((route, index) => (
              <li
                className="text-white text-xl menu-item cursor-pointer opacity-0 transform scale-75 transition-transform duration-300 ease-in-out"
                id={index.toString()}
                key={index}
                onClick={() => setShowMenu(false)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Link
                  to={route.path || "/"}
                  className="font-bold text-black dark:text-white"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {route.path === "/" ? "Home" : route.path?.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
