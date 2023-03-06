import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import Image from "next/image";
//========================================
const content = [
  {
    title: "Interact",
    desc: "Listen to client needs and understand what they really require.",
    icon: "interact",
  },
  {
    title: "Progression",
    desc: "Updation of the ongoing work and progress duely ",
    icon: "progress",
  },
  {
    title: "Deliveries",
    desc: "Delivery of project without crossing the deadline & with higest qulaity ",
    icon: "deliver",
  },
];

export default function HowItWorks() {
  //========================================

  const theme = useTheme();
  //========================================
  return (
    <Container
      maxWidth="xl"
      sx={{
        background: "linear-gradient(45deg, #0080FF, #57a3ed)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 8,
        [theme.breakpoints.down("sm")]: {
          p: "0px 2px 50px 2px ",
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "#a8f2fe", fontWeight: "bolder", p: 4 }}
      >
        How does it works ?
      </Typography>
      <Grid container>
        {content.map((x) => (
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            sx={{
              p: 5,
            }}
          >
            <Box
              sx={{
                width: "75%",
                backgroundColor: "white",
                boxShadow: "0px 0px 12px 0px #c8e8f7",
                p: 4,
                height: "95%",
                borderRadius: 4,
              }}
            >
              <Box>
                <Image src={`/${x.icon}.png`} width={200} height={200} />
              </Box>
              <Typography
                variant="h4"
                sx={{ color: "#68b3cb", fontWeight: "bolder", mb: 1, mt: 3 }}
              >
                {x.title}
              </Typography>
              <Typography
                variant="h7"
                sx={{ color: "gray", fontWeight: "bolder" }}
              >
                {x.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
