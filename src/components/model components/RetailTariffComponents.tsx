import { Button } from "../ui/Button";

const RetailTariffComponents = () => {
  return (
    <div>
      <h2 className="">Import Retail Tariff</h2>

      <hr className="my-4" />

      <div className="">
        <span>Note:</span>{" "}
        <span>importing will overite any existing retail definition</span>
      </div>

      <hr className="my-4" />

      <input type="file" name="" id="" />

      <hr className="my-4" />

      <div className="flex justify-between w-full">
        <Button size={"sm"} type="button">
          <span className="">Save</span>
        </Button>

        <Button size={"sm"} type="button">
          <span className="">Save and Continue</span>
        </Button>
      </div>
    </div>
  );
};

export default RetailTariffComponents;
