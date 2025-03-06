import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { EComponentName } from "@/pages/DynamicComponent";

const DefineComponents = () => {
  // coming from state
  const technologies = ["pv", "battery"];
  const services = ["Site Information", "Reliability"];
  const Financial = [
    "Miscellaneous Inputs",
    "External Incentives",
    "Retail Tariff",
  ];

  const PlainCard = (props: { text: string }) => (
    <div
      className="w-[300px] p-4 rounded cursor-pointer hover:bg-gray-600 hover:text-white text-white
    capitalise  bg-red-400"
    >
      {props.text}
    </div>
  );

  return (
    <div className="space-y-6">
      <h2 className="">DefineComponents</h2>

      <div className="">
        <h2 className="">Technologies</h2>

        <div className="space-y-3">
          {Array.from(technologies, (item) => (
            <Link key={item} to={`/components/${EComponentName.battery}`}>
              <PlainCard text={item} />
            </Link>
          ))}
        </div>
      </div>

      <div className="">
        <h2 className="">Services</h2>

        <div className="space-y-3">
          {Array.from(services, (item) => (
            <PlainCard text={item} key={item} />
          ))}
        </div>
      </div>

      <div className="">
        <h2 className="">Financial</h2>

        <div className="space-y-3">
          {Array.from(Financial, (item, i) => (
            <PlainCard text={item} key={i} />
          ))}
        </div>
      </div>

      <hr className="my-4" />

      <Button type="button" className="bg-blue-500 mt-1 ml-auto">
        <span>Done Defining Components</span>
      </Button>
    </div>
  );
};

export default DefineComponents;
