import React from "react";
import Panel from "./Panel";
import { PanelProvider } from "@/context/PanelContext";

const Layout = ({ children }) => {
  return (
    <PanelProvider>
      <div className="flex flex-col w-full h-[100%] overflow-hidden ">
        <main className="flex items-center justify-center gap-8 flex-grow min-w-full min-h-full bg-[#000000] overflow-y-auto p-6">
          <section className="h-full w-3/12 bg-[#454545] rounded-md p-4">
            <Panel />
          </section>
          <section className="h-full w-9/12 bg-[#454545] rounded-md p-4">
            {children}
          </section>
        </main>
      </div>
    </PanelProvider>
  );
};

export default Layout;
