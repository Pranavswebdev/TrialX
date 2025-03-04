import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PieChartIcon from "@mui/icons-material/PieChart";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import StarIcon from "@mui/icons-material/Star";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PollIcon from "@mui/icons-material/Poll";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import BookIcon from "@mui/icons-material/Book";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate, useLocation } from "react-router-dom";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import { Avatar } from "@mui/material";
import ResponsiveFilterButton from "./ResponsiveFilterButton";
import ResetComponent from "./ResponsiveResetComponent";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

interface MiniDrawerProps {
  children: React.ReactNode;
}

export default function MiniDrawer({ children }: MiniDrawerProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  const items = [
    { label: "Supervisor", icon: <SupervisorAccountIcon /> },
    { label: "Contacts", icon: <PieChartIcon /> },
    { label: "Messages", icon: <KeyboardIcon /> },
    { label: "Settings", icon: <SettingsIcon /> },
    { label: "Profile", icon: <HomeIcon /> },
    { label: "Drafts", icon: <ArticleIcon /> },
    { label: "Projects", icon: <StackedLineChartIcon /> },
    { label: "Starred", icon: <StarIcon /> },
    { label: "Analytics", icon: <AnalyticsIcon /> },
    { label: "Send email", icon: <RateReviewIcon /> },
    { label: "Reports", icon: <PollIcon /> },
    { label: "Notifications", icon: <SystemUpdateAltIcon /> },
    { label: "Tasks", icon: <HourglassEmptyIcon /> },
    { label: "Inbox", icon: <DynamicFeedIcon /> },
    { label: "Users", icon: <GroupAddIcon /> },
    { label: "Calendar", icon: <BookIcon /> },
    { label: "Files", icon: <DashboardIcon /> },
    { label: "Help", icon: <BookIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            aria-label="menu"
            sx={{
              "&:focus": {
                outline: "none",
              },
            }}
          >
            <MenuIcon sx={{ border: 0 }} />
          </IconButton>

          <ResponsiveFilterButton />

          <ResetComponent />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <Typography
              sx={{
                color: "#6B6D82",
                fontSize: "14px",
                fontWeight: "700",
                display: { xs: "none", sm: "block" },
              }}
            >
              John Doe
            </Typography>
            <Avatar
              sx={{
                bgcolor: "#0DA9DE",
                width: 24,
                height: 24,
                justifyItems: "center",
                padding: "0 0 3px",
                position: { xs: "absolute", md: "relative" },
                right: { xs: "16px", md: "0" },
              }}
            >
              s
            </Avatar>
            <IconButton
              sx={{
                color: "#8F95A3",
                display: { xs: "none", sm: "block" },
                height: "40px",
              }}
            >
              <SettingsIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#8F95A3",
                display: { xs: "none", sm: "block" },
                height: "40px",
              }}
            >
              <NotificationImportantIcon sx={{ color: "#C2212A" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            sx={{
              border: "0",
              color: "white",
              "&:focus": {
                outline: "none",
              },
            }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {items.map((item, index) => (
            <ListItem
              sx={{
                cursor: "pointer",
                backgroundColor:
                  location.pathname === `/${item.label.toLowerCase()}`
                    ? "rgba(255, 255, 255, 0.1)"
                    : "inherit",
              }}
              key={index}
              component="li"
              onClick={() => handleNavigation(`/${item.label.toLowerCase()}`)}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={item.label} />
            </ListItem>
          ))}
        </List>
        {/* </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
