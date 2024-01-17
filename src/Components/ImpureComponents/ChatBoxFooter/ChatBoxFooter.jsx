import { Box } from "@mui/material";
import CircleListIcon from "../../CustomComponents/CircleListIcon/CircleListIcon";
import { IoIosAddCircle } from "react-icons/io";
import { FaImage } from "react-icons/fa6";
import { MdGifBox } from "react-icons/md";
import { PiStickerFill } from "react-icons/pi";
import { FaSmile } from "react-icons/fa";
import { IoMdThumbsUp } from "react-icons/io";
import TextField from "../../CustomComponents/TextFeild/TextField/TextField";

const ChatFooterIcons = [
    <IoIosAddCircle />,
    <FaImage />,
    <MdGifBox />,
    <PiStickerFill />,
  ];  

export default function ChatBoxFooter() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          px: "0.3rem",
          pb: "0.3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {ChatFooterIcons.map((icon, index) => (
            <CircleListIcon key={index} icon={icon} />
          ))}
        </Box>
        <Box sx={{ width: "100%" }}>
            {/* this is custom made TextField not from the mui. */}
          <TextField
            data={{
              type: "text",
              placeholder: "Aa",
              rightIcon: (
                <FaSmile
                  style={{
                    color: "#0976F2",
                    cursor: "pointer",
                    opacity: 1,
                  }}
                />
              ),
              styles: {
                background: "#f5f5f5",
                borderRadius: "1rem",
                opacity: 1,
              },
            }}
          />
        </Box>
        <Box>
          <CircleListIcon icon={<IoMdThumbsUp />} />
        </Box>
      </Box>
    </>
  );
}
