import { useState } from "react";
import { router } from "@/routers";
import React from "react";
import { Link } from "react-router-dom";
import { Menu as IconMenu } from "lucide-react";

interface MenuProps {
  // TODO: Add prop definitions
}

export const Menu: React.FC<MenuProps> = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-[11vh] flex justify-center text-white dark:text-black ">
      <nav className=" flex items-center justify-center w-full  ">
        <div className="flex items-center justify-between w-full p-1.5 py-3 m-4 bg-white dark:bg-[#202020] max-w-[1150px] shadow-md rounded-lg">
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
          <ul
            className={`space-x-2 flex ${
              showMenu ? "flex-col" : "hidden sm:flex"
            } items-center `}
          >
            {router.map((route, index) => (
              <li
                className="p-3 md:p-1 cursor-pointer"
                id={index.toString()}
                key={index}
              >
                <Link
                  to={route.path || "/"}
                  className="text-black dark:text-white text-lg sm:text-sm md:text-sm lg:text-lg xl:text-xl"
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
            <button className="bg-[#202020] dark:bg-white">Fale Comigo</button>
          </div>
        </div>
      </nav>
    </div>
  );
};
