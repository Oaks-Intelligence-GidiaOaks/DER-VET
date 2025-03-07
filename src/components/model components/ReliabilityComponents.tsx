import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";
import Input from "../ui/Input";
import { RootState, updateField, updateFile } from "@/store";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const ReliabilityComponents = () => {
  // redux store
  const { tags } = useSelector((state: RootState) => state.form);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["update-file"],
    mutationFn: async (formData: FormData) => {
      axios.post(`https://ai-api-staging.pollsensei.ai/files`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: (sx: any) => {
      console.log(sx);
      toast.success("upload successful");

      // dispatch to state
      // dispatch(updateFile(sx.data))
    },
    onError: (ex: any) => {
      toast.error(
        ex?.response?.data?.message || "Error uploading Critical Load file"
      );
    },
  });

  const handleChange =
    (path: string, customValue?: any) =>
    (event?: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        customValue !== undefined ? customValue : event?.target.value;
      dispatch(updateField({ path, value }));
    };

  const handeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    // change name
    const file = files?.[0];

    if (file) {
      console.log(file);

      const formData = new FormData();

      formData.append("file", file);

      // make request and update
      mutateAsync(formData);
    }
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
            checked={false}
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
            "Download a sample CriticalLoad .csv file with a 60 minute timestep
            for a year with 365 days (8,760 entries).
          </p>
        </div>

        <div className="flex items-center">
          <input
            type="file"
            name=""
            id=""
            className="w-fit"
            onChange={handeFileChange}
          />

          <Button type="button" className="bg-red-500">
            <span>Remove Data</span>
          </Button>
        </div>

        {/* show preview of load file */}

        <hr className="my-3" />

        <div className="flex justify-between w-fit ml-auto">
          <Button
            disabled={isPending}
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
