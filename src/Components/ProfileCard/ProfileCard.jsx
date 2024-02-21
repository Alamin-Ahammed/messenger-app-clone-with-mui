import { Avatar, Box, Card, CardHeader, ListItem } from "@mui/material";
import "./ProfileCard.css";

export default function ProfileCard({
  data: { image, action, title, subheader, styles = {} },
  active,
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
            "&:hover": styles?.background ? { background: styles.background }:{ background: "#f5f5f5" },
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
                  ...styles.avatarStyles,
                  img: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  },
                  svg: {
                    color: '#172B4D',
                    fontSize: '5rem'
                  },
                  position: "relative",
                  overflow: "visible",
                }}
                alt="Image"
              >
                {image}
                <Box
                  sx={{
                    width:
                      (active === "sm" && "11px") ||
                      (active === "md" && "12px") ||
                      (active === "lg" && "18px"),
                    height:
                      (active === "sm" && "11px") ||
                      (active === "md" && "12px") ||
                      (active === "lg" && "18px"),
                    background: "#56CD37",
                    border: "2px solid #fff",
                    borderRadius: "50%",
                    position: "absolute",
                    bottom: active === 'lg' ? "6px": "0px",
                    right: active === 'lg' ? "5px": "2px",
                  }}
                />
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
