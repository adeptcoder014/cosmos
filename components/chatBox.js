import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function ChatBox({ botResponse }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let timerId = null;
    let i = 0;
    const updateText = () => {
      if (i < botResponse.length) {
        setText((text) => text + botResponse.charAt(i));
        i++;
        timerId = setTimeout(updateText, 50);
      }
    };
    updateText();
    return () => {
      clearTimeout(timerId);
    };
  }, [botResponse]);

  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        p: 2,
        mt: 2,
        maxWidth: "100%",
        height: 150,
        overflow: "auto",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: "poppins",
          fontSize: ".8rem",
          fontWeight: "600",
          color: "black",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
