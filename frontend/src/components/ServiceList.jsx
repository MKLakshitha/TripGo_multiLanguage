import React from "react";
import ServiceCard from "./ServiceCard";
import { Hotel, Plane, Pyramid } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServiceList = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <Hotel className="text-blue-500" />,
      title: t("services.flightTitle"),
      desc: t("services.flightDesc"),
    },
    {
      icon: <Plane className="text-blue-500" />,
      title: t("services.hotelTitle"),
      desc: t("services.hotelDesc"),
    },
    {
      icon: <Pyramid className="text-blue-500" />,
      title: t("services.adventureTitle"),
      desc: t("services.adventureDesc"),
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((item, index) => (
        <ServiceCard item={item} key={index} />
      ))}
    </div>
  );
};

export default ServiceList;
