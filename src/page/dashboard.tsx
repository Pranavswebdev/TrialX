import { Box, Button, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import NotepadSvg from "../assets/NotepadSvg";
import Tabs from "../components/Tabs";
import SummaryCards from "../components/SummaryCard";
import SearchAndActions from "../components/SearchAndActions";
import {
  analyticsColumns,
  analyticsData,
  scheduledUpdateColumns,
  scheduledUpdates,
  properties,
  propertyColumns,
} from "../DummyData";
import ResponsivePropertyDisplay from "../components/ResponsiveDisplay";
interface PropertyData {
  name: string;
  address: string;
  phone: string;
  businessHours: string;
  category: string;
  website: string;
  mismatched: number;
  missing: number;
  lastUpdate: string;
}
const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const [filteredProperties, setFilteredProperties] =
    useState<PropertyData[]>(properties);

  const tabLabels = React.useMemo(
    () => [
      { label: "Analytics", badge: 0 },
      { label: "Property Management", badge: 68 },
      { label: "Scheduled Updates", badge: 0 },
    ],
    []
  );
  const cards = React.useMemo(
    () => [
      {
        title: "Mismatched",
        count: tabValue == 1 ? 27 : 0,
        color: "rgba(51, 7, 168, 0.6)",
      },
      {
        title: "Missing",
        count: tabValue == 1 ? 10 : 0,
        color: "rgba(237, 116, 50, 0.6)",
      },
      {
        title: "Duplicates",
        count: tabValue == 1 ? 10 : 0,
        color: "rgba(56, 62, 76, 0.6)",
      },
      {
        title: "Issues with Updates/Deletions",
        count: tabValue == 1 ? 1 : 0,
        color: "rgba(244, 106, 106, 0.6)",
      },
    ],
    [tabValue]
  );

  useEffect(() => {
    if (searchQuery != "") {
      setFilteredProperties(
        properties.filter((property) =>
          property.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  const handleTabChange = (
    event: React.SyntheticEvent | React.ChangeEvent<{ value: unknown }>,
    newValue: number
  ) => {
    setTabValue(newValue);
  };
  const renderTabContent = useCallback(() => {
    switch (tabValue) {
      case 0:
        return (
          <ResponsivePropertyDisplay
            columns={analyticsColumns}
            properties={analyticsData}
          />
        );

      case 1:
        return (
          <ResponsivePropertyDisplay
            columns={propertyColumns}
            properties={filteredProperties}
          />
        );

      case 2:
        return (
          <ResponsivePropertyDisplay
            columns={scheduledUpdateColumns}
            properties={scheduledUpdates}
          />
        );
      default:
        return null;
    }
  }, [tabValue]);
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box>
          <div
            style={{
              display: "flex",
              margin: "25px 0",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <NotepadSvg />
              <Typography variant="h1">LISTING DASHBOARD</Typography>
            </div>
            <Button
              sx={{ display: { xs: "none", sm: "flex" } }}
              variant="contained"
              color="primary"
            >
              View Connections
            </Button>
          </div>

          <Tabs
            onTabChange={handleTabChange}
            tabValue={tabValue}
            tabsData={tabLabels}
          />

          <div
            style={{
              backgroundColor: "white",
              padding: "24px 0",
              borderRadius: "0 14px 14px",
            }}
          >
            <Box
              sx={{
                flexDirection: { xs: "column", xl: "row" },
                gap: "20px",
                display: "flex",
                padding: "0 24px",
              }}
            >
              <SummaryCards cards={cards} />
              <SearchAndActions
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </Box>
            <Box sx={{ mt: 2 }}>{renderTabContent()}</Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
