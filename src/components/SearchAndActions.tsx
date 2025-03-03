import React from "react";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowIcon from "../assets/ArrowSvg";
import IgnoreIconSvg from "../assets/IgnoreIconSvg";

const SearchAndActions: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", xl: "40%" },
        justifyContent: { xl: "flex-end" },
        gap: "10px",
        display: "flex",
        height: "100%",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <TextField
        placeholder="Search"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                sx={{
                  backgroundColor: "#8F95A3",
                  height: "37px",
                  width: "35px",
                  borderRadius: "5px",
                }}
              >
                <SearchIcon
                  sx={{
                    color: "#FFFFFF",
                    "&:hover": {
                      color: "#8F95A3",
                    },
                  }}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          maxWidth: "258px",
          width: "100%",
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f5f5f5",
            "& fieldset": {
              borderColor: "#e0e0e0",
              borderRadius: "8px",
            },
            "&:hover fieldset": {
              borderColor: "#e0e0e0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#e0e0e0",
            },
            "& input::placeholder": {
              color: "#757575",
              opacity: 1,
            },
          },
        }}
      />
      <Box
        sx={{
          gap: "12px",
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          color="success"
          sx={{ color: "white" }}
          startIcon={<ArrowIcon />}
        >
          Bulk Manage Holiday Hours
        </Button>
        <Button
          sx={{ color: "white" }}
          variant="contained"
          color="secondary"
          startIcon={<IgnoreIconSvg />}
        >
          Ignore Websites from Listing
        </Button>
      </Box>
    </Box>
  );
};

export default SearchAndActions;
