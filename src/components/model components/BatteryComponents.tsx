import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";
import Input from "../ui/Input";
import SelectInput from "../ui/SelectInput";
import { RootState, updateField } from "@/store";

const BatteryComponents = () => {
  // redux store
  const { tags } = useSelector((state: RootState) => state.form);

  const dispatch = useDispatch();

  const handleChange =
    (path: string, customValue?: any) =>
    (event?: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        customValue !== undefined ? customValue : event?.target.value;
      dispatch(updateField({ path, value }));
    };

  return (
    <div>
      <h2 className="">Technology: Battery Storage</h2>

      <hr className="my-4" />

      <div className="">
        <Input
          name=""
          label="Component Name"
          value={
            tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.name
              .opt_value
          }
          onChange={handleChange(`tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.name
              .opt_value`)}
        />
        <Input name="" label="Component Description" />
      </div>

      <div className="">
        <h2 className="">Energy Capacity Sizing</h2>

        <Input type="radio" name="" label="Have DER-VET Size the Energy" />
        <Input type="radio" name="" label="Known Size" />
      </div>

      <div className="">
        <h2 className="">Power Capacity Sizing</h2>

        <Input type="radio" name="" label="Have DER-VET Size the Power" />
        <Input type="radio" name="" label="Known Size" />
      </div>

      <div className="">
        <h2 className="">Include limits on capacity sizing?</h2>

        <Input type="radio" name="" label="Yes" />
        <Input type="radio" name="" label="No" />
      </div>

      <div className="">
        <h2 className="">Set the max duration of the size?</h2>

        <Input type="radio" name="" label="Yes" />
        <Input type="radio" name="" label="No" />
      </div>

      <Input name="" label="Toundtrip Efficiency" />

      <div className="">
        <h2 className="">State of Charge</h2>

        <Input name="" label="Upper SOC Limit (%)" />
        <Input name="" label="Target SOC (%)" />
        <Input name="" label="Lower SOC Limit (%)" />
        <Input name="" label="Self-Discharge Rate (%/hour)" />
      </div>

      <div className="">
        <h2 className="">Limit daily Cycling?</h2>

        <Input type="radio" name="" label="Yes" />
        <Input type="radio" name="" label="No" />
      </div>

      <div className="">
        <h2 className="">Include Degradation due to cycling?</h2>

        <Input type="radio" name="" label="Yes" />
        <Input type="radio" name="" label="No" />
      </div>

      <div className="">
        <h2 className="">Include Housekeeping Calculations?</h2>

        <Input type="radio" name="" label="Yes" />
        <Input type="radio" name="" label="No" />
      </div>

      <div className="">
        <h2 className="">Cost Function</h2>

        <Input name="" label="Capital Cost ($)" />
        <Input name="" label="Capital Cost per kW - power capacity ($/kW)" />
        <Input name="" label="Capital Cost per kWh - energy capacity ($/kW)" />
      </div>

      <Input name="" label="Fixed O&M Costs ($/kW-year)" />
      <Input name="" label="Variable O&M Costs ($/MWh)" />

      <Input name="" label="Construction Year" />
      <Input name="" label="Operation Year" />
      <Input name="" label="Expected lifetime Year (years)" />

      <div className="">
        <h2 className="">Replaceable</h2>

        <Input type="radio" name="" label="Yes" />
        <Input type="radio" name="" label="No" />
      </div>

      <Input name="" label="Decommisisioning Cost" />

      <SelectInput
        options={[{ label: "User Defined", value: "User defined" }]}
        label="Salvage Value"
      />

      <Input name="" label="User defined Salvage Value ($)" />

      <Input name="" label="Technology Escalation Rate (%)" />

      <SelectInput
        options={[{ label: "3", value: "3" }]}
        label="MACRS Term (years)"
      />

      <hr className="my-3" />

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

export default BatteryComponents;
