import React from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Box,
} from "@mui/material";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#1e3a8a",
          color: "#fff",
          width: 240,
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <List>
          <ListItemButton sx={{ "&:hover": { backgroundColor: "#3b82f6" } }}>
            <ListItemText primary="Analytics" />
          </ListItemButton>
          <ListItemButton sx={{ "&:hover": { backgroundColor: "#3b82f6" } }}>
            <ListItemText
              primary="Property Management"
              sx={{
                "& .MuiTypography-root": { borderBottom: "2px solid #ef4444" },
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ "&:hover": { backgroundColor: "#3b82f6" } }}>
            <ListItemText primary="Scheduled Updates" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
