import { Boxes, Clock, Home } from "lucide-react";

const SidebarData = [
  {
    id: "home",
    icon: <Home />,
    title: "Home",
    path: "/home",
  },
  {
    id: "recent",
    icon: <Clock />,
    title: "Recent",
    path: "/recent",
  },
  {
    id: "environment",
    icon: <Boxes />,
    title: "Environment",
    path: "/environment",
  },
];

export default SidebarData;
