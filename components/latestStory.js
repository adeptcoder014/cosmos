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

const content = [
  {
    icon: (
      <Image
        src="/marketing.jpg"
        width={450}
        height={200}
        style={{
          maxWidth: "100%",
          borderRadius: 25,
          marginTop: 26,
          boxShadow: "0px 0px 6px 0px #80808047",
        }}
      />
    ),
    title: "How To Use a Remarketing Strategy To Get More",
    sub: "Demand generation is a constant struggle for any business. Each marketing strategy you employ has...",
  },
  {
    icon: (
      <Image
        src="/hero.jpg"
        width={450}
        height={200}
        style={{
          maxWidth: "100%",
          borderRadius: 25,
          marginTop: 26,
          boxShadow: "0px 0px 6px 0px #80808047",
        }}
      />
    ),
    title: "How To Use a Remarketing Strategy To Get More",
    sub: "Demand generation is a constant struggle for any business. Each marketing strategy you employ has...",
  },
];

export default function LatestStory() {
  const theme = useTheme();
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
          md={12}
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
              color: "#C75C6F",
              fontWeight: "bolder",
              mb: 2,
              textAlign: "center",
            }}
          >
            Whats Going On
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "black",
              mb: 5,
              textAlign: "center",
              fontWeight: "bolder",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            Latest stories
          </Typography>
          <Typography
            // variant="h7"
            sx={{
              color: "gray",
              mb: 5,
              textAlign: "center",
              //   fontWeight: "bolder",
              width: "50%",
              m: "auto",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            News From Abstrak And Around The World Of Web Design And Complete
            Solution of Online Digital Marketing
          </Typography>
        </Grid>

        {content.map((x) => (
          <>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  mr: 2,
                  alignItems: "center",
                }}
              >
                {x.icon}
              </Box>
            </Grid>

            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              //   sx={{ display: "flex" ,flexDirection:""}}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "black",
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
                    color: "gray",
                    fontFamily: "poppins",
                    fontWeight: "bolder",
                  }}
                >
                  {x.sub}
                </Typography>
              </Box>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}
