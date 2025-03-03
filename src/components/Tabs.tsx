import React from "react";
import { Tabs, Tab } from "@mui/material";

interface CustomTabsProps {
  tabLabels: string[];
  tabValue: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabLabels,
  tabValue,
  onTabChange,
}) => {
  return (
    <Tabs value={tabValue} onChange={onTabChange}>
      {tabLabels.map((label, index) => (
        <Tab
          key={index}
          label={label}
          sx={{
            width: "auto",
            height: "48px",
            backgroundColor:
              tabValue === index ? "#FFFFFF" : "rgba(107, 109, 130, 0.14)",
            "&.Mui-selected": {
              color: "#C2212A",
              border: "1px solid #D9D5EC",
              ":focus": "border: 0px ",
            },
            borderRadius: "10px 10px 0px 0px",
            mr: "1px",
            border: "0",
            ":focus": {
              outline: "none",
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default CustomTabs;
