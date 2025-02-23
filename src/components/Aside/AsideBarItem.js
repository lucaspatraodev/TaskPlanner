import { useNavigation } from "@/context/NavigationContext";
import React from "react";

const AsideBarItem = ({ icon, label, route }) => {
  const { navigate } = useNavigation();

  return (
    <li
      className="flex items-center gap-2 h-[40px] w-full p-[10px] mx-auto text-[#D3D3D3] text-[15px] rounded-lg hover:bg-yellow-600 hover:text-black hover:cursor-pointer"
      onClick={() => {
        navigate(route);
      }}
    >
      <div className="flex items-center gap-2 w-full h-[18px]">
        <span>{icon}</span>
        {label}
      </div>
    </li>
  );
};

export default AsideBarItem;
