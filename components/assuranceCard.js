import {
  Button,
  Grid,
  Typography,
  Container,
  Box,
  useTheme,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useRouter } from "next/router";
//======================================

const socials = [
  {
    icon: (
      <FacebookIcon
        sx={{
          color: "gray",
          fontSize: 35,
          "&:hover": {
            color: "#4267B2",
          },
        }}
      />
    ),
    url: "https://www.facebook.com/",
  },
  {
    icon: (
      <TwitterIcon
        sx={{
          color: "gray",
          fontSize: 35,
          "&:hover": {
            color: "#26a7de",
          },
        }}
      />
    ),
  },
  {
    icon: (
      <InstagramIcon
        sx={{
          color: "gray",
          fontSize: 35,
          "&:hover": {
            color: "#F77737",
          },
        }}
      />
    ),
  },
  {
    icon: (
      <LinkedInIcon
        sx={{
          color: "gray",
          fontSize: 35,
          "&:hover": {
            color: "#0077B5",
          },
        }}
      />
    ),
  },
  {
    icon: (
      <YouTubeIcon
        sx={{
          color: "#D3D3D4",
          fontSize: 35,
          "&:hover": {
            color: "#b2071d",
          },
        }}
      />
    ),
  },
];

export default function   Assurance() {
  const theme = useTheme();

  const router = useRouter();
  return (
    <>
      <Grid
        fullWidth
        container
        sx={{
          backgroundColor: "white",
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
            // backgroundColor: "#212121",
            borderRadius: 2,
            p: 2,
            mb: 5,
          }}
        >
          <Typography
            sx={{
              color: "#ffdc60",
              fontWeight: "bolder",
              mb: 2,
              textAlign: "center",
            }}
          >
            Guaranteed Customer Satisfaction
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "black",
              mb: 5,
              textAlign: "center",
              fontWeight: "bolder",
              [theme.breakpoints.down("sm")]: {
                width: "130%",
                ml:-3
              },
            }}
          >
            We Promise. We Deliver
          </Typography>
          <Typography
            // variant="h7"
            sx={{
              color: "gray",
              mb: 5,
              textAlign: "center",
              fontWeight: "bolder",
              width: "50%",
              fontWeight: "bolder",
              m: "auto",
              [theme.breakpoints.down("sm")]: {
                width: "150%",
                ml:-5
              },
            }}
          >
            Have an idea? Work with us and see how it goes. We promise to go the
            extra mile for every project that we take onboard.
          </Typography>
        </Grid>
        {/* {content.map((x) => (
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                // backgroundColor: "#27272e",
                display: "flex",
                // flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: 4,
                p: 5,
                // mr: 2,
                // width: "100%",
                borderTop: "1px solid gray",
                borderRight: "1px solid gray",
                borderBottom: "1px solid gray",
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
              <Box sx={{ mr: 2, alignItems: "center" }}>{x.icon}</Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#5956e9",
                    fontFamily: "poppins",
                    mt: 3,
                    mb: 3,
                    fontWeight: "bolder",
                  }}
                >
                  {x.title}
                </Typography>

                <Typography
                  variant="h7"
                  sx={{
                    color: "#D3D3D4",
                    fontFamily: "poppins",
                    fontWeight: "bolder",
                  }}
                >
                  {x.sub}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))} */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {socials.map((x) => {
              return (
                <Box
                  key={x}
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "space-around",
                    width: "17vw",
                    cursor: "pointer",
                  }}
                  onClick={() => router.push(x.url)}
                >
                  {x.icon}
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              fontWeight: "bolder",
              backgroundColor: "#5956e9",
              borderRadius: 2,
              color: "white",
              width: "fit-content",
              p: "20px 50px",
              m: "auto",
              mt: 5,
            }}
          >
            Estimate Project
          </Box>
        </Box>
      </Grid>
    </>
  );
}
