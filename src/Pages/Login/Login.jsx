import { Box, Button, Container, TextField, Typography } from "@mui/material";
import messengerIcon from "../../assets/messenger.svg";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useAuthInfo } from "../../Context/authContext/useAuthInfo";

export default function Login() {
  const { authInfo, setAuthInfo } = useAuthInfo();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
    signInWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    ).then((userCredential) => {
      // navigate if email has been verified
      if (userCredential.user.emailVerified) {
        const { displayName, email, photoURL, uid } = userCredential.user;
        setAuthInfo({ displayName, email, photoURL, uid });
        navigate("/");
      }
    });
  };
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
        <Box sx={{ width: "100%", div: { width: "100%", my: "0.3rem" } }}>
          <form onSubmit={handleLogin}>
            <TextField
              name="email"
              variant="outlined"
              label="Email"
              type="email"
            />
            <TextField
              name="password"
              variant="outlined"
              label="Password"
              type="password"
            />
            <Box>
              <Button type="submit" variant="contained" sx={{ width: "100%" }}>
                Login
              </Button>
            </Box>
          </form>
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
