import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";
import Input from "../ui/Input";
import SelectInput from "../ui/SelectInput";
import { RootState, updateField } from "@/store";

const PVComponents = () => {
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
    <div className=" min-h-[100vh] w-full bg-gray-100 p-5 grid place-items-center">
      <div className="bg-white shadow w-full md:w-3/4 xl:w-2/3 p-4 rounded">
        <h2 className="">Technology: Solar PV</h2>

        <hr className="my-4" />

        <div className="space-y-5">
          <Input
            name=""
            label="Component Name"
            value={
              tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.name
                .opt_value
            }
            onChange={handleChange(
              `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.name.opt_value`
            )}
          />
          <Input name="" label="Component Description" />
          <Input
            name=""
            label="Cost per kWac ($/kWac)"
            value={
              tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.ccost_kW
                .opt_value
            }
            onChange={handleChange(
              `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.ccost_kW.opt_value`
            )}
          />

          <div className="space-y-5">
            <h2 className="">Sizing</h2>

            <Input type="radio" name="" label="Have DER-VET Size the solar" />
            <Input type="radio" name="" label="Known Size" />
          </div>

          <Input
            name=""
            label="Rated Capacity (kWac)"
            value={
              tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys
                .rated_capacity.opt_value
            }
            onChange={handleChange(
              `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.rated_capacity.opt_value`
            )}
          />

          <SelectInput
            options={[
              { label: "AC", value: "AC" },
              { label: "DC", value: "DC" },
            ]}
            label="Coupled System Type"
            value={{
              label:
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.loc
                  .opt_value,
              value:
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.loc
                  .opt_value,
            }}
            onChange={(val) =>
              handleChange(
                ` tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.loc
                  .opt_value`,
                val?.value
              )
            }
          />

          <div className="space-y-5">
            <h2 className="">Allow Grid Charging</h2>

            <Input
              type="radio"
              name=""
              label="Yes"
              checked={
                tags?.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys
                  .grid_charge.opt_value === "1"
              }
              value={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.grid_charge
                  .opt_value
              }
              onChange={handleChange(
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.grid_charge
                  .opt_value,
                "1"
              )}
            />

            <Input
              type="radio"
              name=""
              label="No"
              checked={
                tags?.PV?.["6ae6c43d-71c0-42ea-a574-c217e6b56753"]?.keys
                  ?.grid_charge?.opt_value === "0"
              }
              value={
                tags?.PV?.["6ae6c43d-71c0-42ea-a574-c217e6b56753"]?.keys
                  ?.grid_charge?.opt_value
              }
              onChange={handleChange(
                tags?.PV?.["6ae6c43d-71c0-42ea-a574-c217e6b56753"]?.keys
                  ?.grid_charge?.opt_value,
                "0"
              )}
            />
          </div>

          <Input
            name=""
            label="Solar (+storage) inverter Rating (kVA)"
            value={
              tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.inv_max
                .opt_value
            }
            onChange={handleChange(
              `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.inv_max.opt_value`
            )}
          />

          <div className="space-y-5">
            <h2 className="">Allow Curtailment?</h2>

            <Input
              name=""
              label="Yes"
              type="radio"
              value={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.curtail
                  .opt_value
              }
              checked={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.curtail
                  .opt_value === "1"
              }
              onChange={handleChange(
                `  tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.curtail
                  .opt_value`,
                "1"
              )}
            />
            <Input
              name=""
              label="No"
              type="radio"
              value={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.curtail
                  .opt_value
              }
              checked={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.curtail
                  .opt_value === "0"
              }
              onChange={handleChange(
                `  tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.curtail
                  .opt_value`,
                "0"
              )}
            />
          </div>

          <div className="space-y-5">
            <h2 className="">Generation Variation</h2>

            <Input
              name=""
              label="Minimum Percentage of PV Generation"
              value={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.nu
                  .opt_value
              }
              onChange={handleChange(
                `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.nu.opt_value`
              )}
            />

            <Input
              name=""
              label="Timestep Percentage of PV Minimum Gneeration "
              value={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.gamma
                  .opt_value
              }
              onChange={handleChange(
                `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.gamma.opt_value`
              )}
            />
          </div>

          <Input
            name=""
            label="Construction Year"
            value={
              tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys
                .construction_year.opt_value
            }
            onChange={handleChange(
              `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.construction_year.opt_value`
            )}
          />
          <Input
            name=""
            label="Operation Year (years)"
            value={
              tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys
                .operation_year.opt_value
            }
            onChange={handleChange(
              `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.operation_year.opt_value`
            )}
          />

          <Input
            name=""
            label="Expected lifetime Year (Years)"
            value={
              tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys
                .expected_lifetime.opt_value
            }
            onChange={handleChange(
              `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.expected_lifetime.opt_value`
            )}
          />

          <Input
            name=""
            label="Technology Escalation Rate (%)"
            value={
              tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.ter.opt_value
            }
            onChange={handleChange(
              `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.ter.opt_value`
            )}
          />

          <div className="space-y-5">
            <h2 className="">Power Purchasing Agreement?</h2>

            <Input
              type="radio"
              label="Yes"
              name=""
              value={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.PPA
                  .opt_value
              }
              onChange={handleChange(
                `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.PPA.opt_value`,
                "1"
              )}
              checked={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.PPA
                  .opt_value === "1"
              }
            />

            <Input
              type="radio"
              label="No"
              name=""
              value={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.PPA
                  .opt_value
              }
              onChange={handleChange(
                `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.PPA.opt_value`,
                "0"
              )}
              checked={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.PPA
                  .opt_value === "0"
              }
            />
          </div>

          <Input
            name=""
            label="Fixed O&M Costs ($/kW-year)"
            value={
              tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.fixed_om_cost
                .opt_value
            }
            onChange={handleChange(
              `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.fixed_om_cost.opt_value`
            )}
          />

          <div className="space-y-5">
            <h2 className="">Replaceable</h2>

            <Input
              type="radio"
              name=""
              label="Yes"
              value={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.replaceable
                  .opt_value
              }
              onChange={handleChange(
                `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.replaceable.opt_value`,
                "1"
              )}
              checked={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.replaceable
                  .opt_value === "1"
              }
            />
            <Input
              type="radio"
              name=""
              label="No"
              value={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.replaceable
                  .opt_value
              }
              onChange={handleChange(
                `tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.replaceable.opt_value`,
                "0"
              )}
              checked={
                tags.PV["6ae6c43d-71c0-42ea-a574-c217e6b56753"].keys.replaceable
                  .opt_value === "0"
              }
            />
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
            Upload the solar generation profile (kW/rated kW) as a .csv file
            that contains a reading for each timestep on a separate line. The
            Selected data year is 2025 and selected data frequency is 60
            minutes, so we require an input file with 8760 emtries.
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
    </div>
  );
};

export default PVComponents;
