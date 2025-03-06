import { useSearchParams } from "react-router-dom";
import { Button } from "./ui/Button";
import Input from "./ui/Input";
import SelectInput from "./ui/SelectInput";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState, updateField } from "@/store";

const ProjectConfig = () => {
  const [_, setSearchParams] = useSearchParams();
  const { name, tags } = useSelector(
    (state: RootState) => state.form,
    shallowEqual
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    const params = new URLSearchParams({ step: "2" });
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
      <h2 className="text-2xl font-[600] mb-3">Project Configuration</h2>

      <div className="space-y-5">
        <Input
          name="name"
          label="Name"
          value={name}
          onChange={handleChange("name")}
        />

        <Input name="" label="Description" />

        <Input
          name={`tags.Scenario[""].keys.start_year.opt_value`}
          label="Start Year"
          value={tags.Scenario[""]?.keys.start_year.opt_value}
          onChange={handleChange('tags.Scenario."".keys.start_year.opt_value')}
        />

        <div className="space-y-5">
          <h2 className="">Analysis Horizon Mode</h2>
          <Input
            type="radio"
            label="User defined"
            name=""
            onChange={handleChange(
              'tags.Finance[""].keys.analysis_horizon_mode.opt_value',
              "1"
            )}
            value={tags.Finance[""].keys.analysis_horizon_mode.opt_value}
            checked={
              tags.Finance[""].keys.analysis_horizon_mode.opt_value === "1"
            }
          />

          <Input
            type="radio"
            label="Shortest DER lifetime"
            name=""
            onChange={handleChange(
              'tags.Finance[""].keys.analysis_horizon_mode.opt_value',
              "2"
            )}
            value={tags.Finance[""].keys.analysis_horizon_mode.opt_value}
            checked={
              tags.Finance[""].keys.analysis_horizon_mode.opt_value === "2"
            }
          />

          <Input
            type="radio"
            label="The longest DER lifetime"
            name=""
            onChange={handleChange(
              'tags.Finance[""].keys.analysis_horizon_mode.opt_value',
              "3"
            )}
            value={tags.Finance[""].keys.analysis_horizon_mode.opt_value}
            checked={
              tags.Finance[""].keys.analysis_horizon_mode.opt_value === "3"
            }
          />

          <Input
            name=""
            label="Analysis Horizon"
            onChange={handleChange(
              "tags.PV.6ae6c43d-71c0-42ea-a574-c217e6b56753.keys.expected_lifetime.opt_value"
            )}
            value={
              tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys
                .expected_lifetime.opt_value
            }
          />
        </div>

        <div className="space-y-5">
          <h2 className="">Time Series Data</h2>
          <Input
            label="Data Year (baseline)"
            name=""
            value={tags.Scenario[""].keys.opt_years.opt_value}
            onChange={handleChange(
              'tags.Scenario[""].keys.opt_years.opt_value}'
            )}
          />

          <SelectInput
            options={[{ label: "60", value: "60" }]}
            label="Timestep (minutes)"
          />
        </div>

        <div className="space-y-5">
          <h2 className="">Grid Domain</h2>

          <Input
            type="radio"
            label="Generation"
            name=""
            value={tags.Scenario[""].keys.location.opt_value}
            onChange={handleChange(
              'tags.Scenario[""].keys.location.opt_value}',
              "generation"
            )}
            checked={tags.Scenario[""].keys.location.opt_value === "generation"}
          />

          <Input
            type="radio"
            label="Transmission"
            name=""
            value={tags.Scenario[""].keys.location.opt_value}
            onChange={handleChange(
              'tags.Scenario[""].keys.location.opt_value}',
              "transmission"
            )}
            checked={
              tags.Scenario[""].keys.location.opt_value === "transmission"
            }
          />

          <Input
            type="radio"
            label="Customer"
            name=""
            value={tags.Scenario[""].keys.location.opt_value}
            onChange={handleChange(
              'tags.Scenario[""].keys.location.opt_value}',
              "customer"
            )}
            checked={tags.Scenario[""].keys.location.opt_value === "customer"}
          />
        </div>

        <div className="space-y-5">
          <h2 className="">Ownership</h2>
          <Input
            type="radio"
            label="Customer"
            name=""
            value={tags.Scenario[""].keys.location.opt_value}
            onChange={handleChange(
              'tags.Scenario[""].keys.ownership.opt_value}',
              "customer"
            )}
            checked={tags.Scenario[""].keys.ownership.opt_value === "customer"}
          />
          <Input
            type="radio"
            label="Utility"
            name=""
            value={tags.Scenario[""].keys.ownership.opt_value}
            onChange={handleChange(
              'tags.Scenario[""].keys.ownership.opt_value}',
              "utility"
            )}
            checked={tags.Scenario[""].keys.ownership.opt_value === "utility"}
          />

          <Input
            type="radio"
            label="3rd Party"
            name=""
            value={tags.Scenario[""].keys.ownership.opt_value}
            onChange={handleChange(
              'tags.Scenario[""].keys.ownership.opt_value}',
              "3rd party"
            )}
            checked={tags.Scenario[""].keys.ownership.opt_value === "3rd party"}
          />
        </div>

        <div className="flex justify-between w-full mt-12">
          <Button size={"sm"} type="button" className="border bg-blue-500">
            <span className="">Save</span>
          </Button>

          <Button
            onClick={handleClick}
            size={"sm"}
            type="button"
            className="border bg-blue-500"
          >
            <span className="">Save and Continue</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectConfig;
