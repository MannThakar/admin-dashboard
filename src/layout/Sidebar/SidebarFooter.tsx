import { CircleUser } from "lucide-react";
import { useSelector } from "react-redux";
import clsx from "clsx";

const SidebarFooter = () => {
  const { isSidebarOpen } = useSelector((state) => state.layout);

  return (
    <span className="absolute bottom-0 flex h-16 w-full items-center border-t border-t-gray-200 px-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00DC33] cursor-pointer">
        <CircleUser className="h-5 w-5 text-white" />
      </div>

      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isSidebarOpen
            ? "ml-2 max-w-30 opacity-100"
            : "ml-0 max-w-0 opacity-0"
        )}
      >
        <h4 className="whitespace-nowrap text-sm text-gray-800">
          Mann Thakar
        </h4>
        <p className="whitespace-nowrap text-xs text-gray-400">
          Free
        </p>
      </div>
    </span>
  );
};

export default SidebarFooter;