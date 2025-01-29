import React from "react";
import TaskHighlight from "./TaskHighlight";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-[100%] overflow-hidden">
      <main className="flex gap-8 flex-grow min-w-full min-h-full bg-[#000000] overflow-y-auto p-6">
        <section className="h-full w-2/6 bg-[#454545] rounded-md p-4">
          <TaskHighlight />
        </section>
        <section className="h-full w-4/6 bg-[#454545] rounded-md p-4">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
