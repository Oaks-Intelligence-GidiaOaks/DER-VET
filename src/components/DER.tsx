import { Button } from "./ui/Button";

const DER = () => {
  const DerCard = (props: {
    text: string;
    count: number;
    action: () => void;
  }) => (
    <div className="border w-[230px] h-auto p-3 pb-0 space-y-4 rounded">
      <h2 className="text-center">{props.count}</h2>

      <p className="text-center">{props.text}</p>

      <div className="bg-gray-200 p-2 rounded grid place-items-center">
        <Button className="border" size={"sm"}>
          <span>Add</span>
        </Button>
      </div>
    </div>
  );

  const ders = [
    {
      name: "ICE",
      text: "Internal Combustion Engine (ICE) Generator Sets",
    },
    {
      name: "PV",
      text: "Solar Photovoltaic (PV) Systems",
    },
    {
      name: "Battery",
      text: "Battery Energy Storage Systems (BESS)",
    },
  ];

  const selectedDers = [
    {
      name: "PV",
      text: "Solar Photovoltaic (PV) Systems",
    },
    {
      name: "Battery",
      text: "Battery Energy Storage Systems (BESS)",
    },
  ];

  return (
    <div>
      <h2 className=""> Distributed Energy Resources (DERs) </h2>
      <div className="flex">
        <div className="">
          {ders.map((item) => (
            <DerCard text={item.text} action={() => {}} count={0} />
          ))}
        </div>

        <div className="">
          {Array.from(selectedDers, (item) => (
            <div className="flex items-center gap-3 border border-gray-300 rounded px-1">
              <span>{item.name}</span>

              <Button size={"sm"} className="ml-auto">
                <span className="">Deactivate</span>
              </Button>

              <Button
                className="bg-red-500 w-[30px] h-[30px] rounded-full"
                size={"icon"}
              >
                🗑️
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DER;
