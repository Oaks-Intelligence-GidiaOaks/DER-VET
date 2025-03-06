import { useSearchParams } from "react-router-dom";
import { Button } from "./ui/Button";
import Input from "./ui/Input";

const Services = () => {
  const [_, setSearchParams] = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams({ step: "3" });

    setSearchParams(params);
  };

  return (
    <div>
      <h2 className="">Services</h2>

      <div className="">
        <h2 className="">Size Equipment in microgrid</h2>

        <Input type="radio" name="" label="Yes" />
        <Input type="radio" name="" label="No" />
      </div>

      <div className="">
        <h2 className="">Energy Price Source</h2>

        <Input
          type="radio"
          name=""
          label="Retail, Tariff, PPA or other fixed contract "
        />
        <Input type="radio" name="" label="Whoesale energy market production" />
      </div>

      <div className="">
        <h2 className="">Customer Services </h2>

        <Input type="checkbox" name="" label="Reliability" />
        <Input type="checkbox" name="" label="Demand Charge Reduction" />
      </div>

      <div className="flex justify-between w-full mt-12">
        <Button
          onClick={handleClick}
          size={"sm"}
          type="button"
          className="border bg-blue-500 cursor-pointer "
        >
          <span className="">Done Adding Technologies</span>
        </Button>
      </div>
    </div>
  );
};

export default Services;
