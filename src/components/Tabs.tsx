import React from "react";
import {
  Tabs,
  Tab,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
  Badge,
  Box,
} from "@mui/material";

interface CustomTabsProps {
  tabsData: { label: string; badge: unknown }[];
  tabValue: number;
  onTabChange: (
    event: React.SyntheticEvent | React.ChangeEvent<{ value: unknown }>,
    newValue: number
  ) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabsData,
  tabValue,
  onTabChange,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? (
    <Select
      value={tabValue}
      onChange={(e) =>
        onTabChange(
          e as React.ChangeEvent<{ value: unknown }>,
          (e.target as HTMLInputElement).value as unknown as number
        )
      }
      fullWidth
      variant="outlined"
      sx={{
        mb: 2,
        backgroundColor: "#FFFFFF",
        borderRadius: "10px 10px 0px 0px",
        border: "1px solid #D9D5EC",
      }}
    >
      {tabsData.map((data, index) => (
        <MenuItem key={index} value={index}>
          {data.label}
        </MenuItem>
      ))}
    </Select>
  ) : (
    <Tabs value={tabValue} onChange={onTabChange} sx={{ mb: 2 }}>
      {tabsData.map((tab, index) => (
        <Tab
          key={index}
          label={
            tabValue === index && tab.badge ? (
              <Box sx={{ position: "relative", overflow: "visible" }}>
                <Badge
                  badgeContent={tab.badge as number}
                  color="error"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  sx={{
                    "& .MuiBadge-badge": {
                      transform: "translate(50%, -60%)",
                    },
                  }}
                >
                  {tab.label}
                </Badge>
              </Box>
            ) : (
             tab.label
            )
          }
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
