import { Boxes, Clock, Gauge, Home, MessageCircleQuestionMark } from "lucide-react";

const SidebarData = [
  {
    id: "home",
    icon: <Home />,
    title: "Home",
    path: "/home",
  },

  {
    id: "dashboard",
    icon: <Gauge />,
    title: "Dashborad",
    path: "/dashboard",
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
  {
    id: "about",
    icon: <MessageCircleQuestionMark />,
    title: "About",
    path: "/about",
  },
];

export default SidebarData;
