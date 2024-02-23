import ModeToggle from "@/components/toogleMode";
import React from "react";

interface RootProps {
  children: React.ReactNode;
}

export const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <>
      <main className="relative">
        {children}
        <div className="fixed left-0 bottom-0">
          <ModeToggle />
        </div>
      </main>
    </>
  );
};
