import React from "react";
import {
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const ResponsiveFilterButton: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? (
    <IconButton
      sx={{
        backgroundColor: "#2B3B5C",
        width: "24px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        ml: "26px",
      }}
    >
      <FilterAltOutlinedIcon sx={{ color: "white", fontSize: "16px" }} />
    </IconButton>
  ) : (
    <Button
      variant="outlined"
      startIcon={
        <Box
          sx={{
            backgroundColor: "#2B3B5C",
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
          }}
        >
          <FilterAltOutlinedIcon sx={{ color: "white", fontSize: "16px" }} />
        </Box>
      }
      sx={{
        ml: "26px",
        backgroundColor: "#BDBECC",
        color: "#333333",
        borderColor: "#C0C0C0",
        textTransform: "uppercase",
        borderRadius: "4px",
        padding: "8px 16px",
        gap: "4px",
        "&:hover": {
          backgroundColor: "#C0C0C0",
          borderColor: "#A0A0A0",
        },
      }}
    >
      Filters
    </Button>
  );
};

export default ResponsiveFilterButton;
