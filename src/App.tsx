import React from "react";

import DashboardPageLayout from "./layouts/DashboardLayout";
import Dashboard from "./page/dashboard";

const App: React.FC = () => {
  return (
    <DashboardPageLayout>
      <Dashboard />
    </DashboardPageLayout>
  );
};

export default App;
