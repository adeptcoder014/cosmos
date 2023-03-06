import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import Image from "next/image";

export default function Hero() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        backgroundColor: "white",
        mt:4,
        // width: "100vw",
        [theme.breakpoints.down(500)]: {
          //   backgroundColor: "red",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bolder",
          color: "#8d99ae",
          textAlign: "center",
          [theme.breakpoints.down("sm")]: {
            fontSize: 35,
            width: "110%",
            textAlign: "center",
          },
        }}
      >
        Cosmos for developers
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bolder",
          color: "#454545",
          textAlign: "center",
          [theme.breakpoints.down("sm")]: {
            fontSize: 35,
            width: "110%",
            textAlign: "center",
          },
        }}
      >
        Unearthing ancient myths with the power of AI.
      </Typography>

      <Typography
        sx={{
          fontWeight: "bolder",
          color: "white",
          mt: 3,
          [theme.breakpoints.down("sm")]: {
            mb: 4,
            fontSize: 14,
            textAlign: "center",
          },
        }}
      >
        Transform your digital presence and elevate your brand with our powerful
        marketing strategies and expert guidance
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            color: "white",
            fontWeight: "bolder",
            backgroundColor: "#0080FF",

            borderRadius: 4,
            "&:hover": {
              color: "white",
              fontWeight: "bolder",
              backgroundColor: "#0080FF",
              borderRadius: 4,
            },
          }}
        >
          Explore the myths
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <img
          src="/hero.png"
          width={500}
          height={500}
          style={{ borderRadius: 20 }}
        />
      </Box>
    </Container>
  );
}
