import { Button } from "./ui/Button";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeDer, RootState, updateDer } from "@/store";

const DER = () => {
  const [_, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.der);

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
      <h2 className="text-2xl font-semibold mb-6">
        {" "}
        Distributed Energy Resources (DERs){" "}
      </h2>
      <div className="flex gap-6">
        <div className="space-y-6">
          {ders.map((item, i) => (
            <DerCard
              key={i}
              text={item.text}
              action={() => {
                dispatch(updateDer(item));
              }}
              count={0}
            />
          ))}
        </div>

        <div className="space-y-4">
          {Array.from(data, (item, i) => (
            <div
              key={i}
              onClick={() => {}}
              className="flex items-center justify-between cursor-pointer  gap-3 border border-gray-300 rounded px-1 min-w-[250px]"
            >
              <span>{item.name}</span>

              <Button
                onClick={() => {
                  dispatch(removeDer(item));
                }}
                className="bg-red-500 w-[30px] h-[30px] rounded-full"
                size={"icon"}
              >
                🗑️
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className=" mt-10 w-fit ml-auto">
        <Button
          onClick={() => {
            setSearchParams(new URLSearchParams({ step: "4" }));
          }}
          type="button"
        >
          <span>Done Adding Technologies</span>
        </Button>
      </div>
    </div>
  );
};

export default DER;
