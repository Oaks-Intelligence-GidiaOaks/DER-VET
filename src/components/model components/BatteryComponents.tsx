import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";
import Input from "../ui/Input";
import SelectInput from "../ui/SelectInput";
import { RootState, updateField } from "@/store";
import { useNavigate } from "react-router-dom";

const BatteryComponents = () => {
  const { tags } = useSelector((state: RootState) => state.form);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any


      (path: string, customValue?: any) =>
      (event?: React.ChangeEvent<HTMLInputElement>) => {
        const value =
          customValue !== undefined ? customValue : event?.target.value;
        dispatch(updateField({ path, value }));
      };

  return (
    <div className=" min-h-[100vh] w-full bg-gray-100 p-5 grid place-items-center">
      <div className="bg-white shadow w-full md:w-3/4 xl:w-2/3 p-4 rounded space-y-5">
        <h2 className="text-2xl font-semibold mb-3">
          Technology: Battery Storage
        </h2>

        <hr className="my-4" />

        <div className="space-y-5">
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

        <div className="space-y-5">
          <h2 className="">Energy Capacity Sizing</h2>

          <Input
            type="radio"
            name=""
            label="Have DER-VET Size the Energy"
            checked
          />

          <Input type="radio" name="" label="Known Size" checked={false} />
        </div>

        <div className="space-y-5">
          <h2 className="">Power Capacity Sizing</h2>

          <Input
            type="radio"
            name=""
            label="Have DER-VET Size the Power"
            checked
          />

          <Input type="radio" name="" label="Known Size" checked={false} />
        </div>

        <div className="space-y-5">
          <h2 className="">Include limits on capacity sizing?</h2>

          <Input type="radio" name="" label="Yes" />
          <Input type="radio" name="" label="No" />
        </div>

        <div className="space-y-5">
          <h2 className="">Set the max duration of the size?</h2>

          <Input type="radio" name="" label="Yes" />
          <Input type="radio" name="" label="No" />
        </div>

        <Input
          name=""
          label="Roundtrip Efficiency"
          value={
            tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.rte
              .opt_value
          }
          onChange={handleChange(`tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.rte
            .opt_value`)}
        />

        <div className="space-y-5">
          <h2 className="">State of Charge</h2>

          <Input
            name=""
            label="Upper SOC Limit (%)"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.ulsoc
                .opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.ulsoc.opt_value`
            )}
          />
          <Input
            name=""
            label="Target SOC (%)"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .soc_target.opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.soc_target.opt_value`
            )}
          />
          <Input
            name=""
            label="Lower SOC Limit (%)"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.llsoc
                .opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.llsoc.opt_value`
            )}
          />

          <Input
            name=""
            label="Self-Discharge Rate (%/hour)"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.sdr
                .opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.sdr.opt_value`
            )}
          />
        </div>

        <div className="space-y-5">
          <h2 className="">Limit daily Cycling?</h2>

          <Input
            type="radio"
            name=""
            label="Yes"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .daily_cycle_limit.opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
              .daily_cycle_limit.opt_value`,
              "1"
            )}
            checked={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .daily_cycle_limit.opt_value === "1"
            }
          />
          <Input
            type="radio"
            name=""
            label="No"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .daily_cycle_limit.opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
              .daily_cycle_limit.opt_value`,
              "0"
            )}
            checked={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .daily_cycle_limit.opt_value === "0"
            }
          />
        </div>

        <div className="space-y-5">
          <h2 className="">Include Degradation due to cycling?</h2>

          <Input
            type="radio"
            name=""
            label="Yes"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .incl_cycle_degrade.opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
              .incl_cycle_degrade.opt_value`,
              "1"
            )}
            checked={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .incl_cycle_degrade.opt_value === "1"
            }
          />

          <Input
            type="radio"
            name=""
            label="No"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .incl_cycle_degrade.opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
              .incl_cycle_degrade.opt_value`,
              "0"
            )}
            checked={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .incl_cycle_degrade.opt_value === "0"
            }
          />
        </div>

        <div className="space-y-5">
          <h2 className="">Include Housekeeping Calculations?</h2>

          <Input
            type="radio"
            name=""
            label="Yes"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.hp
                .opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
              .hp.opt_value`,
              "1"
            )}
            checked={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.hp
                .opt_value === "1"
            }
          />
          <Input
            type="radio"
            name=""
            label="No"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.hp
                .opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
              .hp.opt_value`,
              "0"
            )}
            checked={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.hp
                .opt_value === "0"
            }
          />
        </div>

        <div className="space-y-5">
          <h2 className="">Cost Function</h2>

          <Input
            name=""
            label="Capital Cost ($)"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.ccost
                .opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.ccost.opt_value`
            )}
          />
          <Input
            name=""
            label="Capital Cost per kW - power capacity ($/kW)"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.ccost_kW
                .opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.ccost_kW.opt_value`
            )}
          />
          <Input
            name=""
            label="Capital Cost per kWh - energy capacity ($/kW)"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .ccost_kWh.opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.ccost_kWh.opt_value`
            )}
          />
        </div>

        <Input
          name=""
          label="Fixed O&M Costs ($/kW-year)"
          value={
            tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.fixedOM
              .opt_value
          }
          onChange={handleChange(
            `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.fixedOM.opt_value`
          )}
        />
        <Input
          name=""
          label="Variable O&M Costs ($/MWh)"
          value={
            tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.OMexpenses
              .opt_value
          }
          onChange={handleChange(
            `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.OMexpenses.opt_value`
          )}
        />

        <Input
          name=""
          label="Construction Year"
          value={
            tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
              .construction_year.opt_value
          }
          onChange={handleChange(
            `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.construction_year.opt_value`
          )}
        />
        <Input
          name=""
          label="Operation Year"
          value={
            tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
              .operation_year.opt_value
          }
          onChange={handleChange(
            `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.operation_year.opt_value`
          )}
        />
        <Input
          name=""
          label="Expected lifetime Year (years)"
          value={
            tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
              .expected_lifetime.opt_value
          }
          onChange={handleChange(
            `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.expected_lifetime.opt_value`
          )}
        />

        <div className="space-y-5">
          <h2 className="">Replaceable</h2>

          <Input
            type="radio"
            name=""
            label="Yes"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .replaceable.opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.replaceable.opt_value`,
              "1"
            )}
            checked={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .replaceable.opt_value === "1"
            }
          />

          <Input
            type="radio"
            name=""
            label="No"
            value={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .replaceable.opt_value
            }
            onChange={handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.replaceable.opt_value`,
              "0"
            )}
            checked={
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .replaceable.opt_value === "0"
            }
          />
        </div>

        <Input
          name=""
          label="Decommissioning Cost"
          value={
            tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
              .decommissioning_cost.opt_value
          }
          onChange={handleChange(
            `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.decommissioning_cost.opt_value`
          )}
        />

        <SelectInput
          options={[{ label: "User Defined", value: "0" }]}
          label="Salvage Value"
          value={{
            label: "User Defined",
            value:
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .salvage_value.opt_value,
          }}
          onChange={(e) =>
            handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.salvage_value.opt_value`,
              e?.value
            )
          }
        />

        <Input
          name=""
          label="User defined Salvage Value ($)"
          value={
            tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.sdr
              .opt_value
          }
          onChange={handleChange(
            `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.sdr
            .opt_value`
          )}
        />

        <Input
          name=""
          label="Technology Escalation Rate (%)"
          value={
            tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.ter
              .opt_value
          }
          onChange={handleChange(
            `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.ter
            .opt_value`
          )}
        />

        <SelectInput
          options={[{ label: "3", value: "3" }]}
          label="MACRS Term (years)"
          value={{
            label: "3",
            value:
              tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys
                .macrs_term.opt_value,
          }}
          onChange={(e) =>
            handleChange(
              `tags.Battery["10487cf5-16d9-4b78-8109-440b29e1ef78"].keys.macrs_term.opt_value`,
              e?.value
            )
          }
        />

        <hr className="my-3" />

        <div className="flex justify-between w-fit ml-auto">
          <Button
            onClick={() => {
              navigate(`/?step=4`);
            }}
            size={"sm"}
            type="button"
          >
            <span className="">Save and Continue</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BatteryComponents;
