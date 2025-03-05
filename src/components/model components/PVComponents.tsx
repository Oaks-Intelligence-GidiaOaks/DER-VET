import { Button } from "../ui/Button";
import Input from "../ui/Input";
import SelectInput from "../ui/SelectInput";

const PVComponents = () => {
  return (
    <div>
      <h2 className="">Technology: Solar PV</h2>

      <hr className="my-4" />

      <div className="">
        <Input name="" label="Component Name" />
        <Input name="" label="Component Description" />
        <Input name="" label="Cost per kWac" />

        <div className="">
          <h2 className="">Sizing</h2>

          <Input type="radio" name="" label="Have DER-VET Size the solar" />
          <Input type="radio" name="" label="Known Size" />
        </div>

        <Input name="" label="Rated Capacity" />

        <SelectInput options={[]} label="Coupled System Type" />

        <div className="">
          <h2 className="">Allow Grid Charging</h2>

          <Input type="radio" name="" label="Yes" />
          <Input type="radio" name="" label="No" />
        </div>

        <Input name="" label="Solar (+storage) inverter Rating (kVA)" />

        <div className="">
          <h2 className="">Allow Curtailment?</h2>

          <Input name="" label="Yes" />
          <Input name="" label="No" />
        </div>

        <div className="">
          <h2 className="">Generation Variation</h2>

          <Input name="" label="Minimum Percentage of PV Generation" />
          <Input
            name=""
            label="Timestep Percentage of PV Minimum Gneeration "
          />
        </div>

        <Input name="" label="Construction Year" />
        <Input name="" label="Operation Year" />
        <Input name="" label="Expected lifetime Year (Years)" />
        <Input name="" label="Technology Escalation Rate (%)" />

        <div className="">
          <h2 className="">Power Purchasing Agreement?</h2>

          <Input type="radio" label="Yes" name="" />
          <Input type="radio" label="No" name="" />
        </div>

        <Input name="" label="Fixed O&M Costs ($/kW-year)" />

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
        <SelectInput
          options={[{ label: "3", value: "3" }]}
          label="MACRS Term (years)"
        />

        <hr className="my-3" />

        <p className="">
          Upload the solar generation profile (kW/rated kW) as a .csv file that
          contains a reading for each timestep on a separate line. The Selected
          data year is 2025 and selected data frequency is 60 minutes, so we
          require an input file with 8760 emtries.
          <p className="">
            Download a sample PV Generation csv file with a 60 minute timestep
            for a year with 3665 days (8,760 entries).
          </p>
        </p>
        <Input type="file" name="" />
        <input type="file" name="" id="" />

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
    </div>
  );
};

export default PVComponents;
