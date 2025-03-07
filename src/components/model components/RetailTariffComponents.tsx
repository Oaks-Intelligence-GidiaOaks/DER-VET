import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import toast from "react-hot-toast";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const RetailTariffComponents = () => {
  const navigate = useNavigate();

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
        ex?.response?.data?.message || "Error uploading Retail Tariff file"
      );
    },
  });

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
      <div className="bg-white shadow w-full md:w-3/4 xl:w-2/3 p-4 rounded">
        <h2 className="text-2xl font-semibold">Import Retail Tariff</h2>

        <hr className="my-4" />

        <div className="">
          <span>Note:</span>{" "}
          <span>importing will overite any existing retail definition</span>
        </div>

        <hr className="my-4" />

        <input type="file" name="" id="" onChange={handeFileChange} />

        <hr className="my-4" />

        <div className="flex justify-between w-fit ml-auto">
          <Button
            disabled={isPending}
            size={"sm"}
            type="button"
            onClick={() => {
              navigate(`/?step=4`);
            }}
          >
            <span className="">Save and Continue</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RetailTariffComponents;
