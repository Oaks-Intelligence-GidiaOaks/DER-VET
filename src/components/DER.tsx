import { useState } from "react";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

const DER = () => {
  const [selectedDers, setSelectedDers] = useState<any>([]);
  const navigate = useNavigate();

  const DerCard = (props: {
    text: string;
    count: number;
    action: () => void;
  }) => (
    <div className="border w-[230px] h-auto p-3 pb-0 space-y-4 rounded">
      <h2 className="text-center">{props.count}</h2>

      <p className="text-center">{props.text}</p>

      <div className="bg-gray-200 p-2 rounded grid place-items-center">
        <Button
          type="button"
          onClick={props.action}
          className="border"
          size={"sm"}
        >
          <span>Add</span>
        </Button>
      </div>
    </div>
  );

  const ders = [
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
      <div className="flex gap-6">
        <div className="space-y-6">
          {ders.map((item, i) => (
            <DerCard
              text={item.text}
              action={() =>
                setSelectedDers((prev: any) =>
                  prev.some((der: any) => der.text === item.text)
                    ? prev
                    : [...prev, ders[i]]
                )
              }
              count={0}
            />
          ))}
        </div>

        <div className="">
          {/* @ts-ignore */}
          {Array.from(selectedDers, (item: any, i) => (
            <div
              onClick={() => navigate(`/components/${item.name.toLowerCase()}`)}
              className="flex items-center justify-between cursor-pointer  gap-3 border border-gray-300 rounded px-1 min-w-[250px]"
            >
              <span>{item.name}</span>

              <Button
                // onClick={() =>
                //   setSelectedDers((prev: any) =>
                //     prev.filter((_: any, index: number) => index !== i)
                //   )
                // }
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
