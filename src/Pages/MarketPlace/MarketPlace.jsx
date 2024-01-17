import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function MarketPlace() {
  return (
    <Container sx={{mt: '1rem'}}>
      <Typography variant="h1" sx={{ fontSize: "1.5rem", fontWeight: 800 }}>
        Marketplace chats
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: '90%' }}
      >
        <Typography>No messages found.</Typography>
      </Box>
    </Container>
  );
}
