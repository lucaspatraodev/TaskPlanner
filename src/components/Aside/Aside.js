import { useState } from "react";
import AsideBarItem from "./AsideBarItem";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { RiMenuFold3Line } from "react-icons/ri";
import { GiTomato } from "react-icons/gi";
import { MdViewKanban } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import SearchBar from "./SearchBar";
// import Image from "next/image";

const Aside = ({ onMenuChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <aside
      className={`${
        isMenuOpen ? "w-[18%]" : "w-[3%]"
      } md:flex md:flex-col h-[94%] my-auto`}
    >
      <div className="flex flex-col h-[80%] w-full">
        <header className="h-[10%] flex justify-between items-center">
          <h1 className={`${isMenuOpen ? "text-yellow-500" : "hidden"}`}>
            TASKPLANNER
          </h1>
          <button
            className="flex justify-center items-center w-[33px] h-[32px] p-[3px] bg-[#363636] text-yellow-500 hover:text-black hover:cursor-pointer hover:bg-yellow-500 transition-all duration-700 ease-in-out rounded-md"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              onMenuChange();
            }}
          >
            {isMenuOpen ? (
              <RiMenuUnfold4Line className="w-[18px] h-[18px]" />
            ) : (
              <RiMenuFold3Line className="w-[18px] h-[18px]" />
            )}
          </button>
        </header>

        <nav className={`${isMenuOpen ? "text-[#999999] mt-2" : "hidden"}`}>
          <ul className="flex flex-col gap-2">
            <SearchBar />
            <AsideBarItem
              route={"Pomodoro"}
              icon={<GiTomato />}
              label="Pomodoro mode"
            />
            <AsideBarItem
              route={"Kanban"}
              icon={<MdViewKanban />}
              label="Kanban mode"
            />
            <AsideBarItem
              route={"Reports"}
              icon={<TbReportSearch />}
              label="Reports"
            />
            <AsideBarItem
              route={"Settings"}
              icon={<IoSettingsSharp />}
              label="Settings"
            />
          </ul>
        </nav>
      </div>

      <footer className={`${isMenuOpen ? "" : "hidden"} w-full h-[19.5%]`}>
        <div className="w-full h-full flex flex-col gap-2 rounded-lg border-[1.5px] border-[#999999] p-[6px]">
          <div className="flex gap-4 items-center">
            <div className="rounded-[100%] h-[50px] w-[60px] bg-white">
              {/* <Image
                width={60}
                height={50}
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmusicboard.app%2Fmshelby%2Freview%2Fartist%2Fjustin-bieber%2F&psig=AOvVaw1hFzB4n75hCWJ8MKv14rrs&ust=1739723641099000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD0lOeNxosDFQAAAAAdAAAAABAE"
                alt="profile"
              /> */}
            </div>

            <div className="flex flex-col gap-[2px] w-3/6">
              <h2 className="text-white font-bold text-[12px]">John Doe</h2>
              <p className="text-[#D3D3D3] text-[10px]">johndoe@gmail.com</p>
            </div>
            <IoIosMore className="text-white text-[25px] w-1/6" />
          </div>
          <div className="grid w-full h-[34px] p-[4px] grid-cols-2 gap-1 m-auto text-[12px] bg-[#363636] rounded-lg">
            <button
              type="button"
              className="flex gap-[5px] items-center justify-center text-white hover:text-black hover:bg-yellow-500 rounded-md"
            >
              <FaSun />
              light
            </button>
            <button
              type="button"
              className="flex gap-[5px] items-center justify-center text-white hover:text-black hover:bg-yellow-500 rounded-md"
            >
              <MdNightlight />
              Dark
            </button>
          </div>
        </div>
      </footer>
    </aside>
  );
};

export default Aside;
