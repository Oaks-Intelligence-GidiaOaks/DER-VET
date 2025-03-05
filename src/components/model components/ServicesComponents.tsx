import { Button } from "../ui/Button";
import Input from "../ui/Input";

const ServicesComponents = () => {
  return (
    <div>
      <h2 className="">Services: Site Information</h2>
      <hr className="my-4" />
      <div className="">
        <h2 className="">Apply Interconncection constraints</h2>

        <Input type="radio" name="" label="Yes" />
        <Input type="radio" name="" label="No" />
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
          "Download a sample siteLoad .csv file with a 60 minute timestep for a
          year with 365 days (8,760 entries).
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

        <Button size={"sm"} type="button">
          <span className="">Save and Continue</span>
        </Button>
      </div>
    </div>
  );
};

export default ServicesComponents;
