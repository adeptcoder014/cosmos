import {
  Button,
  Grid,
  Typography,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import CodeIcon from "@mui/icons-material/Code";
//======================================

const testimonials = [
  {
    icon: <ApartmentIcon sx={{ color: "#D3D3D4", fontSize: 32 }} />,
    stat: 4,
    desc: "Year of operation",
  },
  {
    icon: <AccountTreeIcon sx={{ color: "#D3D3D4", fontSize: 32 }} />,
    stat: 55,
    desc: "Project delivered",
  },
  {
    icon: <Diversity2Icon sx={{ color: "#D3D3D4", fontSize: 32 }} />,
    stat: 1000,
    desc: "Community",
  },
  {
    icon: <CodeIcon sx={{ color: "#D3D3D4", fontSize: 32 }} />,
    stat: 40000,
    desc: "Lines of codes",
  },
];

export default function ProjectStats() {
  const theme = useTheme();
  return (
    <>
      <Grid
        fullWidth
        container
        sx={{
          background: "linear-gradient(45deg, #0080FF, #57a3ed)",
          p: 10,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Grid
          item
          xl={12}
          lg={12}
          md={1}
          sm={12}
          xs={12}
          sx={{
            background: "linear-gradient(45deg, #0080FF, #57a3ed)",
            borderRadius: 2,
            p: 2,
            
          }}
        >
          <Typography
            sx={{
              color: "#C75C6F",
              fontWeight: "bolder",
              mb: 2,
              textAlign: "center",
            }}
          >
            Facts and Figures
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              mb: 5,
              textAlign: "center",
              fontWeight: "bolder",
              [theme.breakpoints.down("sm")]: {
                width: "150%",
                fontSize:55,
                ml:-5
              },
            }}
          >
            To know us in brief
          </Typography>
        </Grid>

        {testimonials.map((x) => (
          <Grid key={x} item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Box
              sx={{
                // backgroundColor: "#27272e",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                p: 5,
                // mr: 2,
                // width: "100%",
                [theme.breakpoints.down("sm")]: {
                  width: "90%",
                  ml: -3,
                  mb: 2,
                },
                "&:hover": {
                  background: "#2f2f34",
                },
              }}
            >
              {/* <Image src="/digital.png" width={90} height={90} /> */}
              {x.icon}
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontFamily: "poppins",
                  mt: 3,
                  mb: 3,
                  fontWeight: "bolder",
                }}
              >
                {x.stat}
                {"+"}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#D3D3D4",
                  fontFamily: "poppins",
                  fontWeight: "bolder",
                }}
              >
                {x.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
