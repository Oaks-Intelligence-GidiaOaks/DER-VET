import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateField } from "@/store";

const ServicesComponents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tags } = useSelector((state: RootState) => state.form);

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
        <h2 className="text-2xl font-semibold">Services: Site Information</h2>
        <hr className="my-4" />
        <div className="">
          <h2 className="">Apply Interconncection constraints</h2>

          <Input
            type="radio"
            name=""
            label="Yes"
            value={
              tags.Scenario[""].keys.apply_interconnection_constraints.opt_value
            }
            onChange={handleChange(
              `tags.Scenario[""].keys.apply_interconnection_constraints.opt_value`,
              "1"
            )}
            checked={
              tags.Scenario[""].keys.apply_interconnection_constraints
                .opt_value === "1"
            }
          />
          <Input
            type="radio"
            name=""
            label="No"
            value={
              tags.Scenario[""].keys.apply_interconnection_constraints.opt_value
            }
            onChange={handleChange(
              `tags.Scenario[""].keys.apply_interconnection_constraints.opt_value`,
              "0"
            )}
            checked={
              tags.Scenario[""].keys.apply_interconnection_constraints
                .opt_value === "0"
            }
          />
        </div>
        <hr className="my-4" />
        <div className="">
          <p className="">
            Upload the site Load (kW) as a .csv file that contains a reading for
            each timestep ona separate line. The selected data year is 2025 and
            selected data frequency is 60 minutes, so we require an input file
            with 8760 entries.
          </p>

          <p className="">
            "Download a sample siteLoad .csv file with a 60 minute timestep for
            a year with 365 days (8,760 entries).
          </p>
        </div>
        <div className="flex items-center">
          <input type="file" name="" id="" />

          <Button type="button" className="bg-red-500">
            <span>Remove Data</span>
          </Button>
        </div>

        {/* show preview of load file */}

        <hr className="my-3" />

        <div className="flex justify-between w-full">
          <Button size={"sm"} type="button">
            <span className="">Save</span>
          </Button>

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

export default ServicesComponents;
