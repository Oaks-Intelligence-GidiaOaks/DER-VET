import { Button } from "../ui/Button";
import Input from "../ui/Input";

const MiscellaneousComponents = () => {
  return (
    <div>
      <h2 className="">Technology: Solar PV</h2>

      <hr className="my-4" />

      <Input
        name=""
        label="Discount Rate(for discounted cash flow analysis) (%)"
      />

      <Input name="" label="Inflation Rate (%)" />

      <Input name="" label="Federal Tax Rate (%)" />

      <Input name="" label="State Tax Rate (%)" />

      <Input name="" label="Property Tax Rate (%)" />

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

export default MiscellaneousComponents;
