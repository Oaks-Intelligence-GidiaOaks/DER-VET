import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateField } from "@/store";

const MiscellaneousComponents = () => {
  const navigate = useNavigate();
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
        <h2 className="text-2xl font-semibold">Technology: Solar PV</h2>

        <hr className="my-4" />

        <Input
          name=""
          label="Discount Rate(for discounted cash flow analysis) (%)"
          value={tags.Finance[""].keys.npv_discount_rate.opt_value}
          onChange={handleChange(
            `tags.Finance[""].keys.npv_discount_rate.opt_value`
          )}
        />

        <Input
          name=""
          label="Inflation Rate (%)"
          value={tags.Finance[""].keys.inflation_rate.opt_value}
          onChange={handleChange(
            `tags.Finance[""].keys.inflation_rate.opt_value`
          )}
        />

        <Input
          name=""
          label="Federal Tax Rate (%)"
          value={tags.Finance[""].keys.federal_tax_rate.opt_value}
          onChange={handleChange(
            `tags.Finance[""].keys.federal_tax_rate.opt_value`
          )}
        />

        <Input
          name=""
          label="State Tax Rate (%)"
          value={tags.Finance[""].keys.state_tax_rate.opt_value}
          onChange={handleChange(
            `tags.Finance[""].keys.state_tax_rate.opt_value`
          )}
        />

        <Input
          name=""
          label="Property Tax Rate (%)"
          value={tags.Finance[""].keys.property_tax_rate.opt_value}
          onChange={handleChange(
            `tags.Finance[""].keys.property_tax_rate.opt_value`
          )}
        />

        <hr className="my-4" />

        <div className="flex justify-between w-fit ml-auto cursor-pointer">
          <Button
            size={"sm"}
            onClick={() => {
              navigate(`/?step=4`);
            }}
            type="button"
          >
            <span className="">Save and Continue</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiscellaneousComponents;
