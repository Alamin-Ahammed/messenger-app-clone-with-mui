import { ListItemButton } from "@mui/material";

export default function CircleListIcon({ handler,icon, styles }) {
  return (
    <ListItemButton
    onClick={handler}
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
