import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

const RetailTariffComponents = () => {
  const navigate = useNavigate();

  return (
    <div className=" min-h-[100vh] w-full bg-gray-100 p-5 grid place-items-center">
      <div className="bg-white shadow w-full md:w-3/4 xl:w-2/3 p-4 rounded">
        <h2 className="text-2xl font-semibold">Import Retail Tariff</h2>

        <hr className="my-4" />

        <div className="">
          <span>Note:</span>{" "}
          <span>importing will overite any existing retail definition</span>
        </div>

        <hr className="my-4" />

        <input type="file" name="" id="" />

        <hr className="my-4" />

        <div className="flex justify-between w-fit ml-auto">
          <Button
            size={"sm"}
            type="button"
            onClick={() => {
              navigate(`/?step=4`);
            }}
          >
            <span className="">Save and Continue</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RetailTariffComponents;
