import { AppProvider } from "@toolpad/core/AppProvider";
import { useDemoRouter } from "@toolpad/core/internal";
import { theme } from "../theme";
import Drawer from "../components/Drawer";
import { ReactNode } from "react";

export default function DashboardPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useDemoRouter("/dashboard");

  return (
    <AppProvider router={router} theme={theme}>
      <Drawer>{children}</Drawer>
    </AppProvider>
  );
}
