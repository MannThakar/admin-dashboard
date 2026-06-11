import Environment from "../pages/Environment";
import Home from "../pages/Home";
import Recent from "../pages/Recent";

const allRoutes = [
  {
    name: "home",
    element: Home,
    path: "/home",
  },
  {
    name: "recent",
    element: Recent,
    path: "/recent",
  },
    {
    name: "environment",
    element: Environment,
    path: "/environment",
  },
];

export default allRoutes;