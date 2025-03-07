import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";
import Input from "../ui/Input";
import { RootState, updateField } from "@/store";
import { useNavigate } from "react-router-dom";

const ReliabilityComponents = () => {
  // redux store
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
      <div className="bg-white shadow w-full md:w-3/4 xl:w-2/3 p-4 rounded space-y-4">
        <h2 className="text-2xl font-semibold">Services: Reliability</h2>

        <hr className="my-4" />
        <div className="space-y-4">
          <h2 className="">Objective</h2>

          <Input
            type="radio"
            name=""
            label="Optimise DER Size/operation for reliability "
          />

          <Input
            type="radio"
            name=""
            label="Only Calculate the reliability benefit of the DERs"
            value={tags.Reliability[""].keys.post_facto_only.opt_value}
            onChange={handleChange(
              `tags.Reliability[""].keys.post_facto_only.opt_value`,
              "1"
            )}
            checked={
              tags.Reliability[""].keys.post_facto_only.opt_value === "1"
            }
          />
        </div>

        <Input
          name=""
          label="Maximum Outage Duration to Plot (hours)"
          value={tags.Reliability[""].keys.max_outage_duration.opt_value}
          onChange={handleChange(
            `tags.Reliability[""].keys.max_outage_duration.opt_value`
          )}
        />

        <div className="space-y-4">
          <p className="">
            Upload the critical Load (kW) as a .csv file that contains a reading
            for each timestep ona separate line. The selected data year is 2025
            and selected data frequency is 60 minutes, so we require an input
            file with 8760 entries.
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

export default ReliabilityComponents;
