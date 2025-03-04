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

interface SearchAndActionsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchAndActions: React.FC<SearchAndActionsProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", xl: "45%" },
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
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
          maxWidth: { xs: "100%", md: "258px" },
          width: "100%",
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f5f5f5",
            border: "none",
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
              border: "none",
            },
          },
        }}
      />
      <Box
        sx={{
          gap: "12px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Button
          variant="contained"
          color="success"
          sx={{ color: "white", fontSize: "12px" }}
          startIcon={<ArrowIcon />}
        >
          Bulk Manage Holiday Hours
        </Button>
        <Button
          sx={{ color: "white", fontSize: "12px" }}
          variant="contained"
          color="secondary"
          startIcon={<IgnoreIconSvg />}
        >
          Ignore Websites from Listing
        </Button>

        <Button
          sx={{ display: { xs: "flex", sm: "none" } }}
          variant="contained"
          color="primary"
        >
          View Connections
        </Button>
      </Box>
    </Box>
  );
};

export default SearchAndActions;
