import { Menu } from "@/components/menu";
import React from "react";

interface HeaderProps {
  // TODO: Add prop definitions
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="inset-x-0 top-0 z-50 fixed ">
      <Menu />
    </header>
  );
};
