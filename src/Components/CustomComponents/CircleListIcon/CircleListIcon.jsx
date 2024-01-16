import { ListItemButton } from "@mui/material";
import React from "react";

export default function CircleListIcon({ icon, styles }) {
  return (
    <ListItemButton
      sx={{
        borderRadius: "50%",
        padding: "0.5rem",
        color: "#0976F2",
        fontSize: "1.3rem",
        fontWeight: 900,
        ...styles,
      }}
    >
      {icon}
    </ListItemButton>
  );
}
