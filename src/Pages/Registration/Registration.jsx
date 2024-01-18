import { Box, Button, Container, TextField, Typography } from "@mui/material";
import messengerIcon from "../../assets/messenger.svg";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        p: "1rem",
      }}
    >
      <Box sx={{ maxWidth: "450px", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            m: "1rem",
          }}
        >
          <img src={messengerIcon} />
          <Typography variant="h3" sx={{ fontSize: "1.5rem", fontWeight: 800 }}>
            Registration
          </Typography>
        </Box>
        <Box sx={{ width: "100%", div: { width: "100%", my: "0.3rem" } }}>
          <TextField variant="outlined" label="Name" />
          <TextField variant="outlined" label="Email" />
          <TextField variant="outlined" label="Phone Number" />
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <TextField variant="outlined" label="Country" />
            <TextField variant="outlined" label="City" />
          </Box>
          <TextField helperText="Must be at least 6 characters" variant="outlined" label="Password" type="password" />
          <TextField
            variant="outlined"
            label="Confirm Password"
            type="password"
          />
          <Box>
            <Button variant="contained" sx={{ width: "100%" }}>
              Register
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: "1rem" }}>
          <Typography sx={{ fontSize: "0.9rem" }}>
            Already have an account?{" "}
            <Button variant="Text" onClick={() => navigate("/login")}>
              <Typography
                sx={{
                  borderBottom: "1px solid #1565C0",
                  fontSize: "0.9rem",
                  color: "#1565C0",
                }}
              >
                Login
              </Typography>
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
