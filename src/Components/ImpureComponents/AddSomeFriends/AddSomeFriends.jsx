import { Box, Button, Typography } from "@mui/material";

export default function AddSomeFriends() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography>Sorry, You have no friends to show.</Typography>
      <Typography>Add Some Friends</Typography>
      <Button variant="contained">Add Friends</Button>
    </Box>
  );
}
