import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NotepadSvg from "../assets/NotepadSvg";
import Tabs from "../components/Tabs";
const dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
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

export default dashboard;
