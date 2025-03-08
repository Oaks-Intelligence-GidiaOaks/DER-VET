import { useSearchParams } from "react-router-dom";
import { Button } from "./ui/Button";
import Input from "./ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateField } from "@/store";

const Services = () => {
  const [_, setSearchParams] = useSearchParams();

  const { tags } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const handleClick = () => {
    const params = new URLSearchParams({ step: "3" });

    setSearchParams(params);
  };

  const handleChange =
    (path: string, customValue?: any) =>
    (event?: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        customValue !== undefined ? customValue : event?.target.value;
      dispatch(updateField({ path, value }));
    };

  return (
    <div>
      <h2 className="text-2xl font-[600]">Services</h2>

      <div className="space-y-4">
        <h2 className="">Size Equipment in microgrid</h2>

        <Input
          type="radio"
          name=""
          label="Yes"
          value={tags.Scenario[""].keys.binary.opt_value}
          onChange={handleChange(
            `tags.Scenario[""].keys.binary.opt_value`,
            "1"
          )}
          checked={tags.Scenario[""].keys.binary.opt_value === "1"}
        />

        <Input
          type="radio"
          name=""
          label="No"
          value={tags.Scenario[""].keys.binary.opt_value}
          onChange={handleChange(
            `tags.Scenario[""].keys.binary.opt_value`,
            "0"
          )}
          checked={tags.Scenario[""].keys.binary.opt_value === "0"}
        />
      </div>

      <div className="space-y-4">
        <h2 className="">Energy Price Source</h2>

        <Input
          type="radio"
          name=""
          label="Retail, Tariff, PPA or other fixed contract "
          checked
        />

        <Input
          type="radio"
          name=""
          label="Whoesale energy market production"
          checked={false}
        />
      </div>

      <div className="space-y-5">
        <h2 className="">Customer Services </h2>

        <Input type="checkbox" name="" label="Reliability" checked />
        <Input
          type="checkbox"
          name=""
          label="Demand Charge Reduction"
          checked
        />
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
