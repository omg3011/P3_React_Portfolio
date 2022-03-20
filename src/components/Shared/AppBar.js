import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";

import { styled, useTheme } from "@mui/material/styles";
import { Backdrop, Stack } from "@mui/material";

const pages = ["About", "Showcase", "Portfolio", "Contact"];
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <AppBar
        position="static"
        style={{ background: "#2E3B55", height: "7vh" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* PC: Portfolio. */}
              <Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  P<Typography>ortfolio.</Typography>
                </Typography>
              </Box>

              {/* PC: Nav Elements */}
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                {pages.map((page) =>
                  page === "Contact" ? null : (
                    <Button
                      key={page}
                      onClick={handleDrawerClose}
                      sx={{ color: "white" }}
                    >
                      {page}
                    </Button>
                  )
                )}
              </Stack>

              <Box>
                <Button onClick={handleDrawerClose} sx={{ color: "white" }}>
                  Contact
                </Button>
              </Box>
            </Box>

            {/* Mobile */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Mobile: Hamburger */}
              <Box>
                <Backdrop open={open} />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ ...(open && { display: "none" }) }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              {/* Mobile: Portflio. */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: "inline-flex" }}
              >
                P<Typography>ortfolio.</Typography>
              </Typography>

              {/* Mobile: Empty to make space-around works */}
              <Box></Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile: Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {pages.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
export default ResponsiveAppBar;
