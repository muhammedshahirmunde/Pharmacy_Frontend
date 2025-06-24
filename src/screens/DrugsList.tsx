// pages/VerticalTabsPage.tsx
import React from "react";
import VerticalTabs from "../layout/TabLayout";
import Drugs from "./Drugs";

const DrugsList: React.FC = () => {
  const tabLabels = ["All Drugs", "In-Stock Drugs", "Reports"];
  const tabContents = [<Drugs key="a" type="all_drugs" />, <Drugs key="b" type="in_stock" />, 
    
  ];

  return <VerticalTabs tabLabels={tabLabels} tabContents={tabContents} />;
};

export default DrugsList;
