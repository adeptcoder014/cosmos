import {
  Button,
  Grid,
  Typography,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import Image from "next/image";
//=============================
export default function Youtube() {
  const theme = useTheme();
  return (
    <>
      <Grid
        fullWidth
        container
        sx={{
          backgroundColor: "#212121",
          p: 5,
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
            backgroundColor: "#212121",
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography sx={{ color: "#C75C6F", fontWeight: "bolder", mb: 2 }}>
            What We Can Do For You
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#D3D3D4",
              mb: 5,
              width: "38%",
              fontWeight: "bolder",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            Services we can help you with
          </Typography>
        </Grid>

        {content.map((x) => (
          <Grid key={x} item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Box
              sx={{
                backgroundColor: "#27272e",
                borderRadius: 4,
                p: 5,
                // mr: 2,
                width: "100%",
                [theme.breakpoints.down("sm")]: {
                  width: "90%",
                  ml: -3,
                  mb: 2,
                },
              }}
            >
              {/* <Image src="/digital.png" width={90} height={90} /> */}
              {x.icon}
              <Typography
                variant="h6"
                sx={{ color: "#D3D3D4", fontWeight: "bolder", mt: 5, mb: 3 }}
              >
                {x.title}
              </Typography>
              <Typography
                sx={{
                  color: "#D3D3D4",
                  fontWeight: 500,
                  mt: 2,
                  fontFamily: "poppins",
                  fontSize: 16,
                  mb: 3,
                }}
              >
                {x.desc}
              </Typography>
              <Button>Find out more</Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
