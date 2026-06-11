import { useSelector } from "react-redux";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import clsx from "clsx";
import allRoutes from "./routes";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const { isSidebarOpen } = useSelector((state) => state.layout);

  return (
    <main
      className={clsx(
        "grid h-screen w-screen grid-cols-[52px_1fr] grid-rows-[52px_1fr] transition-all ease-in",
        isSidebarOpen && "grid-cols-[182px_1fr]"
      )}
    >
      <Header />
      <Sidebar />

      <Routes>
        {allRoutes?.map((route) => {
          return (
            <Route
              key={route.name}
              path={route.path}
              element={< route.element />}
            />
          );
        })}
      </Routes>
    </main>
  );
};

export default App;