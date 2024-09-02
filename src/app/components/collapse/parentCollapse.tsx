import React, { useState } from "react";
import CollapseAccountDetails from ".";
import { images } from "@/theme";

const theArray = [
    {
      id: 1,
      title: "Personal Account",
      subcopy:
        "An account for companies to manage and invest surplus funds, manage treasury, and achieve business-related financial objectives.",
      icon: images.personal,
    },
    {
      id: 2,
      title: "Corporate Account",
      subcopy:
        "An account for companies to manage and invest surplus funds, manage treasury, and achieve business-related financial objectives.",
      icon: images.Corporate,
    },
    {
      id: 3,
      title: "Institutional Account",
      subcopy:
        "An account for companies to manage and invest surplus funds, manage treasury, and achieve business-related financial objectives.",
      icon: images.Institutional,
    },
    {
      id: 4,
      title: "Enterprise Account",
      subcopy:
        "An account for companies to manage and invest surplus funds, manage treasury, and achieve business-related financial objectives.",
      icon: images.Enterprise,
    },
  ];
const parentCollapse = () => {

  const [openedTabId, setOpenedtabId] = useState(1);
  
  return (
    <div className="min-w-full flex flex-col justify-start items-start gap-4 mt-6">
      {theArray.map((value, index) => {
        return (
          <CollapseAccountDetails
            setOpenedtabId={setOpenedtabId}
            openedTabId={openedTabId}
            theObject={value}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default parentCollapse;
