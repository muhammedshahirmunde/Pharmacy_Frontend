// pages/VerticalTabsPage.tsx
import React from "react";
import VerticalTabs from "../layout/TabLayout";
import Drugs from "../components/Drugs";
import ReportsPage from "../components/Reports";
import Stocks from "../components/Stocks";

const DrugsList: React.FC = () => {
  const tabLabels = [
    "All Drugs",
    "In-Stock Drugs",
    "Stock Management",
    "Reports",
  ];
  const tabContents = [
    <Drugs key="a" type="all_drugs" />,
    <Drugs key="b" type="in_stock" />,
    <Stocks/>,
    <ReportsPage />,
  ];

  return <VerticalTabs tabLabels={tabLabels} tabContents={tabContents} />;
};

export default DrugsList;
