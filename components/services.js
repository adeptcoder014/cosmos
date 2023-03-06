import {
  Button,
  Grid,
  Typography,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import Image from "next/image";
//======================================

const content = [
  {
    title: "Astrological myths",
    icon: <Image src="/digital.png" width={100} height={100} />,
    desc: "Marketing is not just about good ideas. It is about driving business growth.",
  },
  {
    title: "Spiritual myths",
    icon: <Image src="/web.png" width={90} height={90} />,
    desc: "Got An Business Idea? We Help Transformed Ideas Into Profitable World-class Web Applications!.",
  },
  {
    title: "Occult myths",
    icon: <Image src="/app.png" width={90} height={90} />,
    desc: "Build up trust and transparency for your business with future solutions.",
  },
];

export default function Services() {
  const theme = useTheme();
  return (
    <>
      <Grid
        fullWidth
        container
        sx={{
          backgroundColor: "smokeWhite",
          p: 5,
          display: "flex",
          justifyContent: "space-around",
          boxShadow: "0px 0px 6px 0px #80808047",
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
            backgroundColor: "smokeWhite",
            borderRadius: 2,
            p: 2,
            mb: 5,
            // boxShadow:"0px 0px 6px 0px #80808047"
          }}
        >
          <Typography sx={{ color: "#C75C6F", fontWeight: "bolder", mb: 2 }}>
            What cosmos Can Do For You
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#454545",
              mb: 5,
              // width: "38%",
              fontWeight: "bolder",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            Cosmos helps you with
          </Typography>
        </Grid>

        {content.map((x) => (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "space-around",
            }}
            key={x}
            item
            xl={3}
            lg={3}
            md={3}
            sm={12}
            xs={12}
          >
            <Box
              sx={{
                boxShadow: "0px 0px 6px 0px #80808047",
                background: "linear-gradient(264deg, #97d1ff, #0080FF)",
                borderRadius: 4,
                p: 5,
                height: "80%",
                [theme.breakpoints.down("sm")]: {
                  width: "90%",
                  ml: -3,
                  mb: 2,
                },
              }}
            >
              {/* <Image src="/digital.png" width={90} height={90} /> */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {x.icon}
              </Box>
              <Typography
                variant="h5"
                sx={{ color: "white", fontWeight: "bolder", mt: 5, mb: 3 }}
              >
                {x.title}
              </Typography>
              <Typography
                sx={{
                  color: "#a8f2fe",
                  fontWeight: "bolder",
                  width: "100%",
                  mt: 2,
                  // fontFamily: "poppins",
                  fontSize: 14,
                  mb: 3,
                }}
              >
                {x.desc}
              </Typography>
              <Button
                sx={{
                  fontWeight: "bolder",
                  border: "1px solid royalBlue",
                  backgroundColor: "white",
                  color: "royalBlue",
                }}
              >
                Find out more
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
