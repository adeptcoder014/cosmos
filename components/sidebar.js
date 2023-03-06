import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/material/styles";
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//=======================================================
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
//=======================================================
export default function TemporaryDrawer(props) {
  const theme = useTheme();

  //=======================================================
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        // p: 5,
        backgroundColor: "#4169e1b8",
        height: "100%",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerHeader
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "space-between",
            width: "80%",
          }}
        >
          <Image src="/cd.svg" height={40} width={40} />
          <Typography
            sx={{
              fontWeight: "bolder",
              color: "white",
              alignSelf: "center",
              mr: 8,
            }}
          >
            {" "}
            Clear Digital
          </Typography>
        </Box>
        {/* <IconButton
        //   onClick={props.onClose}
        >
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton> */}
      </DrawerHeader>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {[
          {
            title: "Development",
            sub: [
              "Web App development",
              "Mobile development",
              "API development",
            ],
          },
          {
            title: "Marketing",
            sub: ["SEO marketing", "Content marketing", "Video marketing"],
          },
          {
            title: "Resources",
            sub: ["Blogs", "Portfolio"],
          },
        ].map((text, index) => (
          // <ListItem key={text} disablePadding>
          //   <ListItemButton>
          //     <ListItemIcon sx={{ color: "white" }}>
          //       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          //     </ListItemIcon>
          <Accordion
            key={text.title}
            sx={{
              backgroundColor: "royalBlue",
              width: "90%",
              color: "white",
              fontWeight: "bolder",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: "bolder" }}>
                {text.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {text?.sub?.map((x) => (
                <Typography key={x} sx={{ mt: 1 }}>
                  {x}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
          //   </ListItemButton>
          // </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
    </Box>
  );
  //=======================================================
  return (
    <div>
      <React.Fragment key={"left"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "space-between",
            color: "gray",
            fontWeight: "bolder",
            p: 1,
            // border: "1px solid gray",
            [theme.breakpoints.up("sm")]: {
              display: "none",
            },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Image src={"/cd.svg"} height={50} width={50} />
            <Box>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                  fontFamily: "poppins",
                }}
              >
                Clear Digital
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  mt: -0.5,
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                  color: "gray",
                }}
              >
                Technologies
              </Typography>
            </Box>
          </Box>
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon sx={{ color: "gray", fontSize: 24 }} />
          </Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </Box>
      </React.Fragment>
    </div>
  );
}
