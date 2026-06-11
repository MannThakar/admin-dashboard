import clsx from "clsx";
import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

interface SidebarItemProps {
  title: string;
  icon: ReactNode;
  path: string;
}

const SidebarItem = ({ icon, title, path }: SidebarItemProps) => {
  const { pathname } = useLocation();
  const { isSidebarOpen } = useSelector((state) => state.layout);
  const isActive = pathname === path;

  return (
    <span className="relative">
      {isActive && (
        <span className="h-10 w-1.5 bg-[#00DC33] absolute rounded-tr-2xl rounded-br-2xl top-1" />
      )}
      <Link
        to={path}
        className="flex items-center gap-2 border-b border-b-gray-200 p-3"
      >
        {icon}

        <p
          className={clsx(
            "overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out",
            isSidebarOpen ? "max-w-40 opacity-100" : "max-w-0 opacity-0",
          )}
        >
          {title}
        </p>
      </Link>
    </span>
  );
};

export default SidebarItem;
