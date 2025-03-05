import DefineComponents from "@/components/DefineComponents";
import DER from "@/components/DER";
import ProjectConfig from "@/components/ProjectConfig";
import Services from "@/components/Services";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentStep = searchParams.get("step") || "1";

  const onSubmit = (data: any) => {};

  const getCurrentStep: any = {
    "1": <ProjectConfig />,
    "2": <Services />,
    "3": <DER />,
    "4": <DefineComponents />,
  };

  return <div className="">{getCurrentStep[currentStep]}</div>;
};

export default Home;
