import BatteryComponents from "@/components/model components/BatteryComponents";
import MiscellaneousComponents from "@/components/model components/MiscellaneousComponents";
import PVComponents from "@/components/model components/PVComponents";
import ReliabilityComponents from "@/components/model components/ReliabilityComponents";
import RetailTariffComponents from "@/components/model components/RetailTariffComponents";
import ServicesComponents from "@/components/model components/ServicesComponents";
import { useParams } from "react-router-dom";

export enum EComponentName {
  battery = "battery",
  pv = "pv",
  retailTariff = "retailtariff",
  siteInformation = "siteinformation",
  miscellaneous = "miscellaneous",
  reliability = "reliability",
}

const DynamicComponent = () => {
  const { name } = useParams();

  const getCurrentComponent: any = {
    [EComponentName.battery]: <BatteryComponents />,
    [EComponentName.pv]: <PVComponents />,
    [EComponentName.retailTariff]: <RetailTariffComponents />,
    [EComponentName.siteInformation]: <ServicesComponents />,
    [EComponentName.miscellaneous]: <MiscellaneousComponents />,
    [EComponentName.reliability]: <ReliabilityComponents />,
  };

  return <div>{getCurrentComponent[name!]}</div>;
};

export default DynamicComponent;
