import {
  Button,
  Grid,
  Typography,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import Image from "next/image";
//==============================================

const clients = [
  {
    name: "B.K.Saraf Jewellers - Lucknow",
    icon: <Image src="/company.png" width={90} height={90} />,
    desc: "BK SARAF JEWELLERS, has been upholding the legacy since its inception in 1935 by the enigmatic Late",
  },
  {
    name: "B.K.Saraf Jewellers - Lucknow",
    icon: <Image src="/company.png" width={90} height={90} />,
    desc: "BK SARAF JEWELLERS, has been upholding the legacy since its inception in 1935 by the enigmatic Late",
  },
  {
    name: "B.K.Saraf Jewellers - Lucknow",
    icon: <Image src="/company.png" width={90} height={90} />,
    desc: "BK SARAF JEWELLERS, has been upholding the legacy since its inception in 1935 by the enigmatic Late",
  },
  {
    name: "Shivnarayan Jewellers - Hyderabad",
    icon: <Image src="/company.png" width={90} height={90} />,
    desc: "BK SARAF JEWELLERS, has been upholding the legacy since its inception in 1935 by the enigmatic Late",
  },
  {
    name: "Sales Jobs India -Banglore",
    icon: <Image src="/company.png" width={90} height={90} />,
    desc: "BK SARAF JEWELLERS, has been upholding the legacy since its inception in 1935 by the enigmatic Late",
  },
  {
    name: "Sales Jobs India -Banglore",
    icon: <Image src="/company.png" width={90} height={90} />,
    desc: "BK SARAF JEWELLERS, has been upholding the legacy since its inception in 1935 by the enigmatic Late",
  },
];

export default function Portfolio() {
  const theme = useTheme();
  //-----------------------------------------
  return (
    <>
      <Grid
        spacing={2}
        // fullWidth
        container
        sx={{
          backgroundColor: "white",
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
            // backgroundColor: "#212121",
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography sx={{ color: "#C75C6F", fontWeight: "bolder", mb: 2 }}>
            Whom We Served
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "black",
              mb: 5,
              // width: "38%",
              fontWeight: "bolder",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            Our Portfolio Clients
          </Typography>
        </Grid>

        {clients.map((x) => (
          <>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Box
                sx={{
                  backgroundColor: "#80808047",
                  boxShadow: "0px 0px 4px 1px white",
                  borderRadius: 4,
                  p: 5,
                  height:"80%",
                  // mr: 2,
                  // width: "100%",
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
                  sx={{ color: "black", fontWeight: "bolder", mt: 5, mb: 3 }}
                >
                  {x.name}
                </Typography>
                <Typography
                  sx={{
                    color: "gray",
                    fontWeight: 600,
                    mt: 2,
                    fontFamily: "poppins",
                    fontSize: 16,
                    mb: 3,
                  }}
                >
                  {x.desc}
                </Typography>
                {/* <Button>Find out more</Button> */}
              </Box>
            </Grid>{" "}
          </>
        ))}
        <Box
          sx={{
            fontWeight: "bolder",
            backgroundColor: "#5956e9",
            borderRadius: 2,
            color: "white",
            width: "fit-content",
            p: "20px 50px",
            mt: 5,
          }}
        >
          Check Our Works
        </Box>
      </Grid>
    </>
  );
}
