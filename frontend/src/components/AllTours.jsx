import React from "react";
import { motion } from "framer-motion";
import TourList from "./TourList";
import { useTranslation } from "react-i18next";

const AllTours = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col justify-center items-center my-24 p-6 md:px-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold mb-4 text-center text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {t("allTours.title")} <span className="text-blue-500">{t("allTours.tours")}</span>
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {t("allTours.subtitle")}
      </motion.p>
      <TourList />
    </motion.div>
  );
};

export default AllTours;
