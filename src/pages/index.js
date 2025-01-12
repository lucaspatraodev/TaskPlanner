// @ts-nocheck
import { Card } from "@/components/Card";
import DoneTaskSection from "@/components/DoneTasksSection";
import Footer from "@/components/Footer";
import React from "react";

export default function Home() {
  return (
    <>
      <main className="w-full h-full">
        <div className="w-full h-full bg-[#EEF2F5] flex justify-around">
          <div className="flex justify-between w-7/12 p-4"></div>
          <div className="w-5/12 h-full">
            <DoneTaskSection />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
