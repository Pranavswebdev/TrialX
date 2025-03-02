import React, { useState } from "react";
import { Box, Typography, Button, Tabs, Tab } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCards from "./components/SummaryCard";
import PropertyTable from "./components/PropertyTable";
import NotepadSvg from "./components/NotepadSvg";

const App: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ p: 2 }}>
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
            <Button variant="contained" color="primary" sx={{ ml: 2 }}>
              View Connections
            </Button>
          </div>

          <Tabs
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
            sx={{ mb: 2 }}
          >
            <Tab label="Property Management" />
            <Tab label="Scheduled Updates" />
            <Tab label="Analytics" />
          </Tabs>
          <SummaryCards />
          <Box sx={{ mt: 2 }}>
            <PropertyTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
