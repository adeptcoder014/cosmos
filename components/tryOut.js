import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../url";
import ChatBox from "./chatBox";
//===========================================================
export default function TryOut() {
  //===========================================================
  const [content, setContent] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [imagePrompt, setImagePrompt] = useState("");
  const [imgResponse, setImgResponse] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleClick = (e) => {
    console.log(e);
    axios.post(`${SERVER_URL}`, { prompt: content }).then((res) => {
      setBotResponse(res.data.bot);
      e.target.value = "";
    });
  };
  const handleClickImageGeneration = (e) => {
    console.log(e);
    axios
      .post(`${SERVER_URL}/generate-image`, { prompt: imagePrompt })
      .then((res) => {
        setImgResponse(res.data);
      });
  };
  //===========================================================
  return (
    <Grid
      container
      sx={{
        background: "linear-gradient(45deg, #0080FF, #454545)",
      }}
    >
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
        sx={{ display: "flex", justifyContent: "center", p: 5 }}
      >
        <Box
          sx={{
            p: 5,
            backgroundColor: "white",
            width: "fit-content",
            borderRadius: 2,
          }}
        >
          <Typography sx={{ fontWeight: "bolder", color: "#8d99ae" }}>
            Type the scenario you want post for
          </Typography>
          <TextField
            onChange={handleChange}
            placeholder="Type in the prompt for the content ..."
            fullWidth
            multiline
            size="large"
            sx={{ mt: 5 }}
          />
          <Button
            onClick={handleClick}
            sx={{
              mt: 1,
              color: "white",
              fontWeight: "bolder",
              backgroundColor: "#0080FF",

              borderRadius: 1,
              "&:hover": {
                color: "white",
                fontWeight: "bolder",
                backgroundColor: "#0080FF",
                borderRadius: 4,
              },
            }}
          >
            Get
          </Button>
          <ChatBox botResponse={botResponse} />
        </Box>
      </Grid>
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
        sx={{ display: "flex", justifyContent: "center", p: 5 }}
      >
        <Box
          sx={{
            p: 5,
            backgroundColor: "white",
            width: "fit-content",
            borderRadius: 2,
          }}
        >
          <Typography sx={{ fontWeight: "bolder", color: "#8d99ae" }}>
            Type the prompt for image you want
          </Typography>
          <TextField
            placeholder="Type in the prompt for the image ..."
            fullWidth
            size="large"
            sx={{ mt: 5 }}
            onChange={(e) => setImagePrompt(e.target.value)}
          />
          <Button
            onClick={handleClickImageGeneration}
            sx={{
              mt: 1,
              color: "white",
              fontWeight: "bolder",
              backgroundColor: "#0080FF",

              borderRadius: 1,
              "&:hover": {
                color: "white",
                fontWeight: "bolder",
                backgroundColor: "#0080FF",
                borderRadius: 4,
              },
            }}
          >
            Get
          </Button>

          <Box>
            <img
              src={imgResponse ? imgResponse : "/hero.png"}
              height={200}
              width={250}
              style={{
                margin: 20,
              }}
            />
          </Box>

          <Button
            onClick={() => {
              const blob = new Blob([imgResponse], { type: "image/jpeg" });
              const blobUrl = URL.createObjectURL(blob);

              // Create a temporary link to the image

              // Create an image element and set its source to the blob URL
              const img = document.createElement("img");
              img.src = blobUrl;

              // Append the image element to the document body
              document.body.appendChild(img);

              // Clean up the URL and blob objects
              URL.revokeObjectURL(blobUrl);
            }}
            sx={{
              mt: 1,
              color: "white",
              fontWeight: "bolder",
              backgroundColor: "#FF0000",

              borderRadius: 1,
              "&:hover": {
                color: "white",
                fontWeight: "bolder",
                backgroundColor: "#0080FF",
                borderRadius: 4,
              },
            }}
          >
            Download
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        lg={12}
        sm={12}
        xs={12}
        sx={{ display: "flex", justifyContent: "center", p: 5 }}
      >
        <Box
          fullWidth
          sx={{
            p: 5,
            backgroundColor: "white",
            width: "100%",
            borderRadius: 2,
          }}
        >
          <Typography sx={{ fontWeight: "bolder", color: "#8d99ae" }}>
            Type the scenario you want post for
          </Typography>
          <TextField
            placeholder="Type in the Prompts..."
            fullWidth
            multiline
            size="large"
            sx={{ mt: 5 }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
