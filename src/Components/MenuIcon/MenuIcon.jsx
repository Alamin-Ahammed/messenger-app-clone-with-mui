import { ListItemButton, ListItemIcon, SvgIcon } from "@mui/material";

export default function MenuIcon({ icon }) {
  return (
    <>
      <ListItemButton
        disableGutters
        disableTouchRipple
        sx={{
          mx: "0.5rem",
          minHeight: "20px",
          minWidth: "30px",
          padding: "0.5rem",
          borderRadius: "0.5rem",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "28px",
            minHeight: "28px",
          }}
        >
          {typeof icon === "object" ? (
            <SvgIcon>{icon}</SvgIcon>
          ) : (
            <img
              width={"28px"}
              height={"28px"}
              style={{ borderRadius: "0.5rem" }}
              src={icon}
              alt="Image"
            />
          )}
        </ListItemIcon>
      </ListItemButton>
    </>
  );
}
