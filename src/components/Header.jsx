import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, useScrollTrigger } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    path: "",
    name: "",
  },
  {
    id: 2,
    path: "about",
    name: "About",
  },
  {
    id: 3,
    path: "projects",
    name: "Projects",
  },
  {
    id: 4,
    path: "blogs",
    name: "Blogs",
  },
  {
    id: 5,
    path: "contact",
    name: "Contact",
  },
];

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 0 : 0,
  });
}

const Header = (props) => {
  const { toggleTheme, theme } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "var(--textColor)" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        SAM
      </Typography>
      <Divider sx={{ bgcolor: "var(--cardBgColor)" }} />
      <List>
        {navItems.map((data) => (
          <NavLink
            className="navLink btnHover"
            key={data.id}
            style={{
              textTransform: "none",
              fontSize: "var(--subHeadingSize)",
              padding: "10px",
            }}
            to={`/${data.path}`}
          >
            <ListItem key={data.id} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={data.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar component="nav" sx={{ background: "none", mt: 2 }}>
          <Container maxWidth="lg">
            <Toolbar
              className="bg-blur"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#ffffff11",
                border: ".5px solid var(--borderColor)",
                borderRadius: "8px",
              }}
            >
              <IconButton
                color="var(--brandColor)"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                  color: "var(--brandColor)",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "var(--headingColor)",
                  fontSize: "var()",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                SAM
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  border: "1.5px solid var()",
                  borderRadius: "40px",
                  px: 2,
                  paddingTop: "6px",
                  paddingBottom: "8px",
                  // background: "var(--cardBgColor)",
                  // boxShadow: "1px 2px 5px var(--shadowColor)",
                }}
              >
                {navItems.map((data) => (
                  <NavLink
                    className="navLink btnHover"
                    key={data.id}
                    style={{
                      textTransform: "none",
                      padding: "0 10px",
                      fontSize: "var(--subHeadingSize)",
                    }}
                    to={`/${data.path}`}
                  >
                    {data.name}
                  </NavLink>
                ))}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
                onClick={() => navigate("/")}
              >
                SAM
              </Typography>

              <IconButton
                disableRipple
                aria-label="theme"
                onClick={toggleTheme}
                sx={{
                  bgcolor: "var(--cardBgColor)",
                  color: "var(--brandColor)",
                }}
              >
                {theme === "darkTheme" ? <DarkMode /> : <LightMode />}
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "var(--drawerBg)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
