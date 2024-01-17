import { Box, Typography } from "@mui/material";
import MenuIcon from "../../MenuIcon/MenuIcon";

export default function OutletHeadingWithIcon({ headingText, icon,styles }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 1rem 1rem 2rem",
          width: "100%",
          ...styles,
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: 900, fontSize: "1.5rem" }}>
          {headingText}
        </Typography>

        <Box
          sx={{
            div: {
              m: "0px",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "transparent",
              },
            },
          }}
        >
          <MenuIcon icon={icon} />
        </Box>
      </Box>
    </>
  );
}
