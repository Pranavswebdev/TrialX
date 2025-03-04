import React from "react";

import DashboardPageLayout from "./layouts/DashboardLayout";
import Dashboard from "./page/dashboard";

const App: React.FC = () => {
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     minHeight: "100vh",
    //     background: "#f5f5f5",
    //   }}
    // >
    //   <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
    //   <Box sx={{ flexGrow: 1 }}>
    //     <Header onMenuClick={() => setOpenSidebar(true)} />
    //     <Box sx={{ py: 2, px: 4 }}>
    //       <div
    //         style={{
    //           display: "flex",
    //           margin: "25px 0",
    //           justifyContent: "space-between",
    //           width: "100%",
    //         }}
    //       >
    //         <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    //           <NotepadSvg />
    //           <Typography variant="h1">LISTING DASHBOARD</Typography>
    //         </div>
    //         <Button variant="contained" color="primary">
    //           View Connections
    //         </Button>
    //       </div>

    //       <Tabs
    //         onTabChange={handleTabChange}
    //         tabValue={tabValue}
    //         tabLabels={tabLabels}
    //       />

    //       <div
    //         style={{
    //           backgroundColor: "white",
    //           padding: "24px 0",
    //           borderRadius: "0 14px 14px",
    //         }}
    //       >
    //         <Box
    //           sx={{
    //             flexDirection: { xs: "column", xl: "row" },
    //             gap: "20px",
    //             display: "flex",
    //             padding: "0 24px",
    //           }}
    //         >
    //           <SummaryCards cards={cards} />
    //           <SearchAndActions />
    //         </Box>
    //         <Box sx={{ mt: 2 }}>{renderTabContent()}</Box>
    //       </div>
    //     </Box>
    //   </Box>
    // </Box>

    <DashboardPageLayout>
      <Dashboard />
    </DashboardPageLayout>
  );
};

export default App;
