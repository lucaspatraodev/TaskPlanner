import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-[100%] overflow-hidden">
      <main className="flex gap-8 flex-grow min-w-full min-h-full bg-[#000000] overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
