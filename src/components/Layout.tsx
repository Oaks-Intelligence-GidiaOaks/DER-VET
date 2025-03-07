import { Outlet } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";

const Layout = () => {
  return (
    <div>
      <div className="w-full h-[56px] border flex items-center px-10">
        <div className="p-3 border rounded-md ml-auto bg-blue-500 cursor-pointer">
          <FaPlay color="white" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
