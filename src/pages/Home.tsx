import DefineComponents from "@/components/DefineComponents";
import DER from "@/components/DER";
import ProjectConfig from "@/components/ProjectConfig";
import Services from "@/components/Services";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams] = useSearchParams();

  const currentStep = searchParams.get("step") || "1";

  const getCurrentStep: any = {
    "1": <ProjectConfig />,
    "2": <Services />,
    "3": <DER />,
    "4": <DefineComponents />,
  };

  return (
    <div className=" min-h-[100vh] w-full bg-gray-100 p-5 grid place-items-center">
      <div className="bg-white shadow w-full md:w-3/4 xl:w-2/3 p-4 rounded">
        {getCurrentStep[currentStep]}
      </div>
    </div>
  );
};

export default Home;
