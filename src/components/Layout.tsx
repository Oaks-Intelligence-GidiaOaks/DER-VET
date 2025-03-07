import { Outlet } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Layout = () => {
  const { form, files } = useSelector((state: RootState) => state);

  const submitForm = () => {
    fetch(`https://ai-dervet.onrender.com/use-case/ebr`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ebr_parameter: form,
        files: files.files,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <div className="w-full h-[56px] border flex items-center px-10">
        <div
          onClick={submitForm}
          className="p-3 border rounded-md ml-auto bg-blue-500 cursor-pointer"
        >
          <FaPlay color="white" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
