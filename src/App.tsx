import React, { useState, useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCards from "./components/SummaryCard";
import PropertyTable from "./components/PropertyTable";
import NotepadSvg from "./assets/NotepadSvg";
import Tabs from "./components/Tabs";
import SearchAndActions from "./components/SearchAndActions";

const App: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const tabLabels = React.useMemo(
    () => ["Analytics", "Property Management", "Scheduled Updates"],
    []
  );
  const cards = [
    { title: "Mismatched", count: 27, color: "rgba(51, 7, 168, 0.6)" },
    { title: "Missing", count: 10, color: "rgba(237, 116, 50, 0.6)" },
    { title: "Duplicates", count: 19, color: "rgba(56, 62, 76, 0.6)" },
    {
      title: "Issues with Updates/Deletions",
      count: 10,
      color: "rgba(244, 106, 106, 0.6)",
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const renderTabContent = useCallback(() => {
    switch (tabValue) {
      case 0:
        <div>Analytics Content</div>;

        return;
      case 1:
        return <PropertyTable />;

      case 2:
        return <div>Scheduled Updates Content</div>;
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
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
      <Box sx={{ flexGrow: 1 }}>
        <Header onMenuClick={() => setOpenSidebar(true)} />
        <Box sx={{ py: 2, px: 4 }}>
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
            <Button variant="contained" color="primary">
              View Connections
            </Button>
          </div>

          <Tabs
            onTabChange={handleTabChange}
            tabValue={tabValue}
            tabLabels={tabLabels}
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
              <SearchAndActions />
            </Box>
            <Box sx={{ mt: 2 }}>{renderTabContent()}</Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
