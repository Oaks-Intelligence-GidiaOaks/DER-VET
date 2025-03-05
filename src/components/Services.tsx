import Input from "./ui/Input";

const Services = () => {
  return (
    <div>
      <h2 className="">Services</h2>

      <div className="">
        <h2 className="">Size Equipment in microgrid</h2>

        <Input type="radio" name="" label="Yes" />
        <Input type="radio" name="" label="No" />
      </div>

      <div className="">
        <h2 className="">Energy Price Source</h2>

        <Input
          type="radio"
          name=""
          label="Retail, Tariff, PPA or other fixed contract "
        />
        <Input type="radio" name="" label="Whoesale energy market production" />
      </div>

      <div className="">
        <h2 className="">Customer Services </h2>

        <Input type="checkbox" name="" label="Reliability" />
        <Input type="checkbox" name="" label="Demand Charge Reduction" />
      </div>
    </div>
  );
};

export default Services;
