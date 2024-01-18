import { Box, Button, Container, TextField, Typography } from "@mui/material";
import messengerIcon from "../../assets/messenger.svg";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
  return (
    <Container>
      <Box sx={{ maxWidth: "450px", mx: "auto" }} elevation={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            m: "1rem",
          }}
        >
          <img src={messengerIcon} alt="Image" />
          <Typography variant="h3" sx={{ fontSize: "1.5rem", fontWeight: 800 }}>
            Login
          </Typography>
        </Box>
        <Box sx={{ width: "100%" ,div: { width: "100%", my: "0.3rem" }}}>
            <TextField variant="outlined" label="Email"  />
            <TextField variant="outlined" label="Password" type="password"  />
            <Box>
              <Button variant="contained" sx={{ width: "100%" }}>Login</Button>
            </Box>
        </Box>
        <Box sx={{ mt: "1rem" }}>
          <Typography sx={{ fontSize: "0.9rem" }}>
            Don't have an account?{" "}
            <Button variant="Text" onClick={() => navigate("/register")}>
              <Typography
                sx={{
                  borderBottom: "1px solid #1565C0",
                  fontSize: "0.9rem",
                  color: "#1565C0",
                }}
              >
                Register
              </Typography>
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
