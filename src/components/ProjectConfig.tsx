import Input from "./ui/Input";
import SelectInput from "./ui/SelectInput";

const ProjectConfig = () => {
  return (
    <div>
      <h2 className="">Project Configuration</h2>

      <div className="">
        <Input name="" label="Name" />
        <Input name="" label="Description" />
        <Input name="" label="Start Year" />

        <div className="">
          <h2 className="">Analysis Window</h2>
          <Input type="radio" label="User defined" name="" />
          <Input type="radio" label="Shortest DER lifetime" name="" />
          <Input type="radio" label="The longest DER lifetime" name="" />
        </div>

        <div className="">
          <h2 className="">Time Series Data</h2>
          <Input label="Data Year (baseline)" name="" />
          <SelectInput options={[]} label="Timestep" />
        </div>

        <div className="">
          <h2 className="">Grid Domain</h2>
          <Input type="radio" label="Generation" name="" />
          <Input type="radio" label="Transmission" name="" />
          <Input type="radio" label="Distribution" name="" />
        </div>

        <div className="">
          <h2 className="">Ownership</h2>
          <Input type="radio" label="Customer" name="" />
          <Input type="radio" label="Utility" name="" />
          <Input type="radio" label="3rd Party" name="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectConfig;
