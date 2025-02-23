import { React, useState } from "react";
import Aside from "./Aside/Aside";
import { NavigationProvider } from "@/context/NavigationContext";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <NavigationProvider>
      <div
        className={`flex w-full h-full bg-[#262626] max-[500px]:bg-[#000000] ${inter.className}`}
      >
        <div className="w-[98%] h-full flex flex-row gap-4 mx-auto">
          <Aside
            onMenuChange={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
          <main
            className={`${
              isMenuOpen ? "md:w-[80%] lg:w-[82%]" : "w-[100%]"
            } flex flex-col gap-[20px] h-[94%] my-auto bg-[#000000] rounded-xl p-[12px] py-[20px] ${
              roboto.className
            }`}
          >
            {children}
          </main>
        </div>
      </div>
    </NavigationProvider>
  );
};

export default Layout;
