import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { EComponentName } from "@/pages/DynamicComponent";

const DefineComponents = () => {
  const { data } = useSelector((state: RootState) => state.der);

  const services = [
    {
      name: EComponentName.siteInformation,
      text: "Site Information",
    },
    {
      name: EComponentName.reliability,
      text: "Reliability",
    },
  ];

  const Financial = [
    {
      name: EComponentName.miscellaneous,
      text: "Miscellaneous Inputs",
    },
    {
      name: EComponentName.retailTariff,
      text: "Retail Tariff",
    },
  ];

  const PlainCard = (props: { text: string }) => (
    <div className="w-[300px] p-4 rounded my-3 cursor-pointer hover:bg-gray-600 hover:text-white text-white capitalise  bg-red-400">
      {props.text}
    </div>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Define Components</h2>

      <div className="">
        <h2 className="">Technologies</h2>

        <div className="space-y-3">
          {Array.from(data, (item) => (
            <Link
              key={item.name}
              to={`/components/${item.name.toLocaleLowerCase()}`}
            >
              <PlainCard text={item.name} />
            </Link>
          ))}
        </div>
      </div>

      <div className="">
        <h2 className="">Services</h2>

        <div className="space-y-3">
          {Array.from(services, (item) => (
            <Link key={item.name} to={`/components/${item.name}`}>
              <PlainCard {...item} key={item.name} />
            </Link>
          ))}
        </div>
      </div>

      <div className="">
        <h2 className="">Financial</h2>

        <div className="space-y-3">
          {Array.from(Financial, (item, i) => (
            <Link key={item.name} to={`/components/${item.name}`}>
              <PlainCard {...item} key={i} />
            </Link>
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
