import React from "react";
import { Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const ResetComponent: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? (
    <IconButton sx={{ color: "#0FA9DE" }}>
      <RestartAltIcon />
    </IconButton>
  ) : (
    <Typography variant="h6" sx={{ flexGrow: 1, ml: "18px", color: "#0FA9DE" }}>
      Reset to Default
    </Typography>
  );
};

export default ResetComponent;
