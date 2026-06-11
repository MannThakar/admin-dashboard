import clsx from "clsx";
import { ArrowRightFromLine } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slices/layoutSlice";
import SidebarData from "./SidebarData";
import SidebarItem from "./SidebarItem";
import logo from "../../assets/svg/01_LOGO.svg";
import SidebarFooter from "./SidebarFooter";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.layout);

  return (
    <section className="border-r border-gray-200 row-start-1 col-start-1 row-end-3 relative flex flex-col">
      <span className="h-13 border-b border-b-gray-200 flex gap-8 px-2 items-center">
        <img
          src={logo}
          className={clsx("w-8 h-8", isSidebarOpen && "w-9 h-9")}
        />
        {isSidebarOpen && <h2 className="text-xl text-[#00DC33] font-bold">June</h2>}
      </span>
      <button
        className="border border-gray-200 rounded-full p-1.5 absolute -right-3 top-9 z-50 bg-white cursor-pointer"
        onClick={() => dispatch(toggleSidebar())}
      >
        <ArrowRightFromLine
          className={clsx(
            "w-4 h-4 text-gray-500 ",
            isSidebarOpen && "rotate-180",
          )}
        />
      </button>

      {SidebarData?.map((item) => (
        <SidebarItem key={item.id} {...item} />
      ))}

      <SidebarFooter/>
    </section>
  );
};

export default Sidebar;
