import {
  Avatar,
  Card,
  CardHeader,
  ListItem,
} from "@mui/material";
import "./ProfileCard.css";

export default function ProfileCard({
  data: { image, action, title, subheader, styles = {} },
}) {
  return (
    <>
      <ListItem
        sx={{ width: "100%", px: "0.5rem", p: styles.padding }}
        disableGutters
        disablePadding
      >
        <Card
          id="profile-card"
          elevation={0}
          sx={{
            "&:hover": { background: "#f5f5f5" },
            width: "100%",
            position: "relative",
          }}
        >
          {/* this avatar will come from database */}
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  width: "45px",
                  height: "45px",
                  ...styles.avatarStyles
                }}
                alt="Image"
              >
                {image}
              </Avatar>
            }
            action={action && action}
            title={<div style={{ fontWeight: 500 }}>{title}</div>}
            subheader={subheader}
            sx={{
              p: "0.8rem 0.5rem",
              ".MuiCardHeader-avatar": { mr: "9px" },
              ...styles,
            }}
          />
        </Card>
      </ListItem>
    </>
  );
}
