import ModeToggle from "@/components/toogleMode";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface RootProps {
  children: React.ReactNode;
}

export const Root: React.FC<RootProps> = ({ children }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main className="relative">
        {children}
        <div className="fixed left-0 bottom-0 z-50">
          <ModeToggle />
        </div>
      </main>
    </>
  );
};
