import {
  Button,
  Grid,
  Typography,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
//======================================

const footerDevelopment = [
  "Product Development",
  "Web Developement",
  "App Development",
  "SAAS Developement",
  "UI/UX Designing Services",
];
const footerMarketing = [
  "Social Media Marketing",
  "SEO Services",
  "Digital Marketing Services",
];
const footerCompany = ["About Us", "Portfolio", "Blogs", "Contact"];

export default function Footer() {
  const theme = useTheme();
  return (
    <>
      <Grid
        fullWidth
        container
        sx={{
          background: "linear-gradient(45deg, #0080FF, #454545)",
          p: 10,
          display: "flex",
          justifyContent: "space-around",
          [theme.breakpoints.down("sm")]: { p: 5 },
          // backgroundImage: `url("/bg.jpg")`,
        }}
      >
        <Grid
          item
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{ mr: 20, [theme.breakpoints.down("sm")]: { mr: 0 } }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Get in touch!
            </Typography>
            <Typography
              sx={{
                color: "white",
                mt: 2,
              }}
            >
              Are you ready to partner with a team of experts dedicated to
              turning your dreams into reality?
            </Typography>

            <Box
              className="subscribe-box"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  // backgroundColor: "red",
                  display: "flex",
                  flexDirection: "column",
                  zoom: "60%",
                },
              }}
            >
              <form action="#">
                <Box class="input-group" sx={{ display: "flex", ml: -10 }}>
                  <span class="input-group-addon">
                    <EmailIcon />
                  </span>
                  <input type="email" placeholder="Enter your email address" />
                </Box>
                <button type="submit" style={{ marginTop: 2 }}>
                  Subscribe
                </button>
              </form>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Grid container sx={{ display: "flex" }}>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Box>
                <Typography
                  variant="h7"
                  sx={{
                    color: "white",
                    fontWeight: "bolder",
                    lineHeight: 5,
                  }}
                >
                  Development Services
                </Typography>
                {footerDevelopment.map((x) => (
                  <Box key={x}>
                    <Typography
                      key={x}
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        lineHeight: 2,
                        cursor: "pointer",
                      }}
                    >
                      {x}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bolder",
                    lineHeight: 5,
                  }}
                >
                  Marketing Services
                </Typography>
                {footerMarketing.map((x) => (
                  <Typography
                    key={x}
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      lineHeight: 2,
                      cursor: "pointer",
                    }}
                  >
                    {x}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bolder",
                    lineHeight: 5,
                  }}
                >
                  Contacts
                </Typography>
                {footerCompany.map((x) => (
                  <Typography
                    key={x}
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      lineHeight: 2,
                      cursor: "pointer",
                    }}
                  >
                    {x}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid gray",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "space-between",
            width: "90vw",
            fontFamily: "poppins",
            mt: 8,
            mb: -5,
          }}
        >
          <Typography sx={{ fontWeight: "bolder", fontSize: 14, mt: 2 }}>
            © 2023. All rights reserved by ClearDigital Technologies Private
            Limited.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "space-around",
              width: "30vw",
            }}
          >
            <Typography sx={{ fontWeight: "bolder", fontSize: 14, mt: 2 }}>
              Sitemap |
            </Typography>
            <Typography sx={{ fontWeight: "bolder", fontSize: 14, mt: 2 }}>
              Privacy Policy |
            </Typography>
            <Typography sx={{ fontWeight: "bolder", fontSize: 14, mt: 2 }}>
              Term of use |
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
